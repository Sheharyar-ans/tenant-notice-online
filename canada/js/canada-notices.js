/**
 * TenantNotice.online - Autonomous Canadian Statutory Notice Engines
 * Jurisdictional Module: Canada (/canada/)
 * Compliance:
 *  - Ontario Residential Tenancies Act, 2006 (S.O. 2006, c. 17) & LTB Rules
 *  - British Columbia Residential Tenancy Act [SBC 2002] c. 78 & RTB Policy
 *  - Alberta Residential Tenancies Act (RSA 2000, c. R-17) & RTDRS Rules
 * Zero-Data Retention: 100% Client-Side In-Memory Compilation
 */

(function (root) {
  'use strict';

  var CanadaNotices = {
    // Utility: Date formatter (YYYY-MM-DD to Month DD, YYYY)
    formatDateLong: function (isoStr) {
      if (!isoStr) return '';
      var parts = isoStr.split('-');
      if (parts.length !== 3) return isoStr;
      var d = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
      return d.toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' });
    },

    // Utility: Add days to ISO date string
    addDays: function (isoStr, days) {
      var parts = isoStr.split('-');
      var d = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
      d.setDate(d.getDate() + days);
      var year = d.getFullYear();
      var month = String(d.getMonth() + 1).padStart(2, '0');
      var day = String(d.getDate()).padStart(2, '0');
      return year + '-' + month + '-' + day;
    },

    // Utility: Check if year is leap year
    isLeapYear: function (year) {
      return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    },

    // Utility: Get last day of a given month
    getLastDayOfMonth: function (year, monthIndex) {
      var d = new Date(year, monthIndex + 1, 0);
      return d.getDate();
    },

    /**
     * 1. ONTARIO LTB FORM N9 60-DAY ENGINE (RTA s. 44, 47)
     * Rules:
     * - Minimum 60 calendar days notice
     * - Termination date MUST fall on the last day of a rental period
     * - Service deemed days: In person (0), Mail (+5), Courier (+1)
     * - February Exception (RTA s. 44(4)):
     *   - Served on or before Jan 1 -> allowed termination on last day of Feb (Feb 28/29)
     *   - Served on or before Feb 1 -> allowed termination on March 31
     */
    calculateOntarioN9: function (serviceDate, rentDueDay, serviceMethod) {
      if (!serviceDate) return null;
      rentDueDay = parseInt(rentDueDay, 10) || 1;

      var deemedDays = 0;
      if (serviceMethod === 'mail') deemedDays = 5;
      else if (serviceMethod === 'courier') deemedDays = 1;

      var effectiveServiceDate = this.addDays(serviceDate, deemedDays);
      var parts = effectiveServiceDate.split('-');
      var sYear = parseInt(parts[0], 10);
      var sMonth = parseInt(parts[1], 10); // 1-12
      var sDay = parseInt(parts[2], 10);

      // Check February Statutory Exceptions (RTA s. 44(4))
      var isFebExceptionApplicable = false;
      var febExceptionDate = null;
      var febNote = '';

      if (sMonth === 1 && sDay === 1 && rentDueDay === 1) {
        // Served on or before Jan 1 with rent due on the 1st
        var lastDayFeb = this.isLeapYear(sYear) ? 29 : 28;
        febExceptionDate = sYear + '-02-' + String(lastDayFeb).padStart(2, '0');
        isFebExceptionApplicable = true;
        febNote = 'Special statutory rule under RTA s. 44(4): Notice served on or before January 1 allows termination on the final day of February.';
      } else if (sMonth === 2 && sDay === 1 && rentDueDay === 1) {
        // Served on or before Feb 1 with rent due on the 1st
        febExceptionDate = sYear + '-03-31';
        isFebExceptionApplicable = true;
        febNote = 'Special statutory rule under RTA s. 44(4): Notice served on or before February 1 allows termination on March 31.';
      }

      // Standard Earliest 60-Day Calculation
      var minCalendarDate = this.addDays(effectiveServiceDate, 60);
      var mParts = minCalendarDate.split('-');
      var mYear = parseInt(mParts[0], 10);
      var mMonth = parseInt(mParts[1], 10) - 1; // 0-indexed
      var mDay = parseInt(mParts[2], 10);

      // Find the next rental period end date
      // If rent is due on the 1st, rental period ends on the last day of the month
      var targetYear = mYear;
      var targetMonth = mMonth;
      var targetDay;

      if (rentDueDay === 1) {
        targetDay = this.getLastDayOfMonth(targetYear, targetMonth);
        var candidate = new Date(targetYear, targetMonth, targetDay);
        var minDate = new Date(mYear, mMonth, mDay);
        if (candidate < minDate) {
          // Move to next month end
          targetMonth += 1;
          if (targetMonth > 11) {
            targetMonth = 0;
            targetYear += 1;
          }
          targetDay = this.getLastDayOfMonth(targetYear, targetMonth);
        }
      } else {
        // Rent due on day X (e.g. 15th) -> period ends on day X-1 (e.g. 14th)
        var periodEndDay = rentDueDay - 1;
        if (mDay <= periodEndDay) {
          targetDay = periodEndDay;
        } else {
          targetMonth += 1;
          if (targetMonth > 11) {
            targetMonth = 0;
            targetYear += 1;
          }
          targetDay = periodEndDay;
        }
      }

      var stdMonthStr = String(targetMonth + 1).padStart(2, '0');
      var stdDayStr = String(targetDay).padStart(2, '0');
      var standardStatutoryDate = targetYear + '-' + stdMonthStr + '-' + stdDayStr;

      var recommendedDate = (isFebExceptionApplicable && febExceptionDate) ? febExceptionDate : standardStatutoryDate;

      return {
        serviceDate: serviceDate,
        effectiveServiceDate: effectiveServiceDate,
        deemedDays: deemedDays,
        minimumDaysRequired: 60,
        standardStatutoryDate: standardStatutoryDate,
        recommendedDate: recommendedDate,
        isFebExceptionApplicable: isFebExceptionApplicable,
        febNote: febNote
      };
    },

    // Validate if a custom selected date is lawful under Ontario RTA
    validateOntarioDate: function (selectedDate, calcResult, rentDueDay) {
      if (!selectedDate || !calcResult) return { valid: false, message: 'Missing date parameters' };
      rentDueDay = parseInt(rentDueDay, 10) || 1;

      var sel = new Date(selectedDate + 'T00:00:00');
      var eff = new Date(calcResult.effectiveServiceDate + 'T00:00:00');
      var diffDays = Math.round((sel - eff) / (1000 * 60 * 60 * 24));

      // Check February exception match
      if (calcResult.isFebExceptionApplicable && selectedDate === calcResult.recommendedDate) {
        return { valid: true, message: 'Compliant with Ontario RTA s. 44(4) February special exception.' };
      }

      // Check 60 days
      if (diffDays < 60) {
        return {
          valid: false,
          code: 'UNDER_60_DAYS',
          message: 'Legally void: Ontario RTA s. 44 mandates at least 60 full calendar days notice (currently ' + diffDays + ' days).'
        };
      }

      // Check rental period end
      var selParts = selectedDate.split('-');
      var sYear = parseInt(selParts[0], 10);
      var sMonth = parseInt(selParts[1], 10) - 1;
      var sDay = parseInt(selParts[2], 10);

      var isPeriodEnd = false;
      if (rentDueDay === 1) {
        var lastDay = this.getLastDayOfMonth(sYear, sMonth);
        isPeriodEnd = (sDay === lastDay);
      } else {
        isPeriodEnd = (sDay === (rentDueDay - 1));
      }

      if (!isPeriodEnd) {
        var expectedEnd = (rentDueDay === 1) ? 'the final day of the month' : 'the ' + (rentDueDay - 1) + 'th of the month';
        return {
          valid: false,
          code: 'MID_PERIOD_TERMINATION',
          message: 'Legally void: Notice must terminate on the last day of a rental period (' + expectedEnd + '). Mid-period dates are rejected by the Landlord and Tenant Board.'
        };
      }

      return { valid: true, message: 'Statutorily compliant under Ontario RTA s. 44.' };
    },

    /**
     * 2. BRITISH COLUMBIA RTB 1-MONTH ENGINE (BC RTA s. 45 & s. 90)
     * Rules:
     * - Minimum 1 full rental month
     * - Effective on the day immediately preceding the date rent is due
     * - Deemed delivery: Personal (0), Mail (+5), Door/Mailbox (+3), Consented digital (+3)
     */
    calculateBcNotice: function (serviceDate, rentDueDay, serviceMethod) {
      if (!serviceDate) return null;
      rentDueDay = parseInt(rentDueDay, 10) || 1;

      var deemedDays = 0;
      if (serviceMethod === 'mail') deemedDays = 5;
      else if (serviceMethod === 'door' || serviceMethod === 'digital') deemedDays = 3;

      var effectiveServiceDate = this.addDays(serviceDate, deemedDays);
      var parts = effectiveServiceDate.split('-');
      var sYear = parseInt(parts[0], 10);
      var sMonth = parseInt(parts[1], 10) - 1; // 0-11
      var sDay = parseInt(parts[2], 10);

      // Tenancy ends on the day immediately preceding rent due date
      // If rent due on 1st, termination is on the last day of a month
      // Notice served in Month M takes effect at the earliest on the last day of Month M+1
      var targetYear = sYear;
      var targetMonth = sMonth + 1; // Next month
      if (targetMonth > 11) {
        targetMonth = 0;
        targetYear += 1;
      }

      var targetDay;
      if (rentDueDay === 1) {
        targetDay = this.getLastDayOfMonth(targetYear, targetMonth);
      } else {
        targetDay = rentDueDay - 1;
        // If effective service day is after the preceding day in current cycle, push to subsequent
        if (sDay > targetDay) {
          targetMonth += 1;
          if (targetMonth > 11) {
            targetMonth = 0;
            targetYear += 1;
          }
        }
      }

      var outMonth = String(targetMonth + 1).padStart(2, '0');
      var outDay = String(targetDay).padStart(2, '0');
      var statutoryDate = targetYear + '-' + outMonth + '-' + outDay;

      return {
        serviceDate: serviceDate,
        effectiveServiceDate: effectiveServiceDate,
        deemedDays: deemedDays,
        statutoryDate: statutoryDate
      };
    },

    validateBcDate: function (selectedDate, calcResult, rentDueDay) {
      if (!selectedDate || !calcResult) return { valid: false, message: 'Missing date parameters' };
      rentDueDay = parseInt(rentDueDay, 10) || 1;

      var sel = new Date(selectedDate + 'T00:00:00');
      var stat = new Date(calcResult.statutoryDate + 'T00:00:00');

      if (sel < stat) {
        return {
          valid: false,
          code: 'SHORT_NOTICE',
          message: 'Legally void under BC RTA s. 45: Notice must provide at least 1 full rental month ending on the day before rent is payable (earliest lawful date: ' + CanadaNotices.formatDateLong(calcResult.statutoryDate) + ').'
        };
      }

      var selParts = selectedDate.split('-');
      var sYear = parseInt(selParts[0], 10);
      var sMonth = parseInt(selParts[1], 10) - 1;
      var sDay = parseInt(selParts[2], 10);

      var isDayBefore = false;
      if (rentDueDay === 1) {
        var lastDay = this.getLastDayOfMonth(sYear, sMonth);
        isDayBefore = (sDay === lastDay);
      } else {
        isDayBefore = (sDay === (rentDueDay - 1));
      }

      if (!isDayBefore) {
        return {
          valid: false,
          code: 'NOT_DAY_BEFORE',
          message: 'Invalid termination date: Under BC RTA s. 45(1)(b), notice must end on the day immediately preceding the date rent is due.'
        };
      }

      return { valid: true, message: 'Compliant with British Columbia Residential Tenancy Act s. 45.' };
    },

    /**
     * 3. ALBERTA RTDRS PERIODIC NOTICE ENGINE (Alberta RTA ss. 6-12)
     * Rules:
     * - Tenant periodic notice: 1 full tenancy month
     * - Landlord periodic notice: 3 full tenancy months
     * - Termination must take effect on the last day of the tenancy month
     * - Landlord notice REQUIRES mandatory statutory grounds
     */
    calculateAlbertaNotice: function (serviceDate, role, rentDueDay) {
      if (!serviceDate) return null;
      rentDueDay = parseInt(rentDueDay, 10) || 1;
      var isLandlord = (role === 'landlord');
      var monthsNeeded = isLandlord ? 3 : 1;

      var parts = serviceDate.split('-');
      var sYear = parseInt(parts[0], 10);
      var sMonth = parseInt(parts[1], 10) - 1; // 0-11
      var sDay = parseInt(parts[2], 10);

      // In Alberta, notice served on or before the 1st day of the tenancy month takes effect on the last day of that month (or 3rd month for landlord).
      // If served after the 1st day, the cycle begins the 1st of the following month.
      var cycleStartMonth = sMonth;
      var cycleStartYear = sYear;

      if (sDay > 1) {
        cycleStartMonth += 1;
        if (cycleStartMonth > 11) {
          cycleStartMonth = 0;
          cycleStartYear += 1;
        }
      }

      var targetMonth = cycleStartMonth + (monthsNeeded - 1);
      var targetYear = cycleStartYear;
      while (targetMonth > 11) {
        targetMonth -= 12;
        targetYear += 1;
      }

      var targetDay = this.getLastDayOfMonth(targetYear, targetMonth);
      var outMonth = String(targetMonth + 1).padStart(2, '0');
      var outDay = String(targetDay).padStart(2, '0');
      var statutoryDate = targetYear + '-' + outMonth + '-' + outDay;

      return {
        serviceDate: serviceDate,
        role: role,
        monthsNeeded: monthsNeeded,
        statutoryDate: statutoryDate
      };
    },

    validateAlbertaDate: function (selectedDate, calcResult) {
      if (!selectedDate || !calcResult) return { valid: false, message: 'Missing parameters' };
      var sel = new Date(selectedDate + 'T00:00:00');
      var stat = new Date(calcResult.statutoryDate + 'T00:00:00');

      if (sel < stat) {
        var periodDesc = (calcResult.role === 'landlord') ? '3 full tenancy months' : '1 full tenancy month';
        return {
          valid: false,
          code: 'SHORT_NOTICE',
          message: 'Legally void under Alberta RTA: Periodic notice requires ' + periodDesc + ' (earliest lawful date: ' + CanadaNotices.formatDateLong(calcResult.statutoryDate) + ').'
        };
      }

      var selParts = selectedDate.split('-');
      var sYear = parseInt(selParts[0], 10);
      var sMonth = parseInt(selParts[1], 10) - 1;
      var sDay = parseInt(selParts[2], 10);
      var lastDay = this.getLastDayOfMonth(sYear, sMonth);

      if (sDay !== lastDay) {
        return {
          valid: false,
          code: 'NOT_MONTH_END',
          message: 'Invalid date: Under Alberta RTA s. 6-11, notice must terminate on the final day of a tenancy month.'
        };
      }

      return { valid: true, message: 'Compliant with Alberta Residential Tenancies Act.' };
    }
  };

  root.CanadaNotices = CanadaNotices;
})(typeof window !== 'undefined' ? window : global);
