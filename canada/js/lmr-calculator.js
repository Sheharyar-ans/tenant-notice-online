/**
 * TenantNotice.online - Ontario LMR Deposit Interest Calculator
 * Statutory Reference: Ontario Residential Tenancies Act, 2006, Section 106(6) & 106(7)
 * Zero Data Retention: 100% Client-Side In-Memory Execution
 */

(function (root) {
  'use strict';

  var ONTARIO_GUIDELINES = {
    2026: 2.5,
    2025: 2.5,
    2024: 2.5,
    2023: 2.5,
    2022: 1.2,
    2021: 0.0,
    2020: 2.2,
    2019: 1.8,
    2018: 1.8,
    2017: 1.5,
    2016: 2.0,
    2015: 1.6,
    2014: 0.8,
    2013: 2.5,
    2012: 3.1,
    2011: 0.7,
    2010: 2.1,
    2009: 1.8,
    2008: 1.4,
    2007: 2.6
  };

  var LmrCalculator = {
    getGuideline: function (year) {
      if (ONTARIO_GUIDELINES.hasOwnProperty(year)) {
        return ONTARIO_GUIDELINES[year];
      }
      return 2.5; // Standard statutory cap fallback
    },

    formatCad: function (amount) {
      return new Intl.NumberFormat('en-CA', {
        style: 'currency',
        currency: 'CAD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(amount || 0);
    },

    /**
     * Compute multi-year LMR interest ledger
     * @param {number} initialDeposit
     * @param {string} startDate ISO date YYYY-MM-DD
     * @param {string} endDate ISO date YYYY-MM-DD
     * @param {string} offsetMode 'none' (full payout) | 'full_offset' (rent raised by guideline, offset) | 'custom'
     */
    calculateLedger: function (initialDeposit, startDate, endDate, offsetMode) {
      initialDeposit = parseFloat(initialDeposit) || 0;
      if (!startDate || !endDate || initialDeposit <= 0) {
        return null;
      }

      var start = new Date(startDate + 'T00:00:00');
      var end = new Date(endDate + 'T00:00:00');
      if (end <= start) {
        return null;
      }

      var ledger = [];
      var currentDeposit = initialDeposit;
      var curStart = new Date(start.getTime());
      var periodIndex = 1;

      var totalInterestAccrued = 0;
      var totalOffsetsApplied = 0;
      var totalNetPayable = 0;

      while (curStart < end) {
        var curEnd = new Date(curStart.getTime());
        curEnd.setFullYear(curEnd.getFullYear() + 1);

        var isPartial = false;
        var periodEndDate = curEnd;
        if (curEnd > end) {
          periodEndDate = new Date(end.getTime());
          isPartial = true;
        }

        // Under RTA s. 106(6), interest rate is the guideline in effect when payment becomes due
        // Payment becomes due on the annual anniversary date
        var dueYear = periodEndDate.getFullYear();
        var guidelineRate = this.getGuideline(dueYear);

        // Days calculation
        var msDiff = periodEndDate.getTime() - curStart.getTime();
        var daysInPeriod = Math.round(msDiff / (1000 * 60 * 60 * 24));
        var daysInFullYear = 365;
        var checkLeap = new Date(curStart.getFullYear(), 1, 29).getMonth() === 1;
        if (checkLeap) daysInFullYear = 366;

        var proRataRatio = isPartial ? (daysInPeriod / daysInFullYear) : 1.0;
        var interestEarned = currentDeposit * (guidelineRate / 100) * proRataRatio;
        interestEarned = Math.round(interestEarned * 100) / 100;

        var offsetApplied = 0;
        var topUpOwed = 0;

        if (offsetMode === 'full_offset') {
          // Landlord increased rent by guideline and credited interest to deposit
          topUpOwed = interestEarned;
          offsetApplied = interestEarned;
          currentDeposit += offsetApplied; // deposit is now topped up
        }

        var netPayable = interestEarned - offsetApplied;
        netPayable = Math.round(netPayable * 100) / 100;

        totalInterestAccrued += interestEarned;
        totalOffsetsApplied += offsetApplied;
        totalNetPayable += netPayable;

        ledger.push({
          periodNumber: periodIndex,
          periodStart: curStart.toISOString().split('T')[0],
          periodEnd: periodEndDate.toISOString().split('T')[0],
          isPartial: isPartial,
          days: daysInPeriod,
          dueYear: dueYear,
          guidelineRate: guidelineRate,
          depositBasis: currentDeposit - (offsetMode === 'full_offset' ? offsetApplied : 0),
          interestEarned: interestEarned,
          offsetApplied: offsetApplied,
          netPayable: netPayable,
          closingDeposit: currentDeposit
        });

        curStart = new Date(periodEndDate.getTime());
        periodIndex++;
      }

      return {
        initialDeposit: initialDeposit,
        startDate: startDate,
        endDate: endDate,
        offsetMode: offsetMode,
        ledger: ledger,
        totalInterestAccrued: totalInterestAccrued,
        totalOffsetsApplied: totalOffsetsApplied,
        totalNetPayable: totalNetPayable,
        finalDepositHeld: currentDeposit
      };
    }
  };

  root.LmrCalculator = LmrCalculator;
  root.ONTARIO_GUIDELINES = ONTARIO_GUIDELINES;
})(typeof window !== 'undefined' ? window : global);
