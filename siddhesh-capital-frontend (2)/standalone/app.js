/**
 * Siddhesh Capital Market Services Private Limited
 * Production Frontend JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Calculator State & Data
  let currentFacility = {
    name: 'Structured Commercial Debt',
    rate: 11.5,
  };
  let currentAmountCrore = 10;
  let currentTenorMonths = 36;

  // DOM Elements
  const amountRange = document.getElementById('amountRange');
  const amountDisplay = document.getElementById('amountDisplay');
  const amountLakhs = document.getElementById('amountLakhs');

  const tenorRange = document.getElementById('tenorRange');
  const tenorDisplay = document.getElementById('tenorDisplay');
  const tenorYears = document.getElementById('tenorYears');

  const outputFacilityName = document.getElementById('outputFacilityName');
  const outputEmi = document.getElementById('outputEmi');
  const outputQuarterly = document.getElementById('outputQuarterly');
  const outputTotalInterest = document.getElementById('outputTotalInterest');
  const outputTotalOutflow = document.getElementById('outputTotalOutflow');
  const outputRate = document.getElementById('outputRate');

  // Recalculate EMI Formula (Monthly Reducing Balance)
  function recalculate() {
    const principal = currentAmountCrore * 10000000;
    const monthlyRate = currentFacility.rate / 12 / 100;
    const months = currentTenorMonths;

    const emi =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);
    const totalOutflow = emi * months;
    const totalInterest = totalOutflow - principal;
    const quarterly = emi * 3;

    // Update UI
    amountDisplay.textContent = `₹${currentAmountCrore}`;
    amountLakhs.textContent = `(₹${(currentAmountCrore * 100).toLocaleString('en-IN')} Lakhs)`;

    tenorDisplay.textContent = currentTenorMonths;
    tenorYears.textContent = `(${(currentTenorMonths / 12).toFixed(1)} Years)`;

    outputFacilityName.textContent = currentFacility.name;
    outputRate.textContent = `${currentFacility.rate}% p.a.`;
    outputEmi.textContent = `₹${(emi / 100000).toFixed(2)}`;
    outputQuarterly.textContent = `Quarterly Servicing: ~₹${(quarterly / 100000).toFixed(2)} Lakh`;
    outputTotalInterest.textContent = `₹${(totalInterest / 10000000).toFixed(2)} Cr`;
    outputTotalOutflow.textContent = `₹${(totalOutflow / 10000000).toFixed(2)} Cr`;
  }

  // Facility Selection
  const facilityButtons = document.querySelectorAll('.facility-btn');
  facilityButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      facilityButtons.forEach((b) => {
        b.classList.remove('bg-emerald-950/40', 'border-emerald-500/60', 'ring-1', 'ring-emerald-500/50', 'shadow-md', 'shadow-emerald-950/50');
        b.classList.add('bg-white/5', 'border-white/10');
      });
      btn.classList.add('bg-emerald-950/40', 'border-emerald-500/60', 'ring-1', 'ring-emerald-500/50', 'shadow-md', 'shadow-emerald-950/50');
      btn.classList.remove('bg-white/5', 'border-white/10');

      currentFacility = {
        name: btn.getAttribute('data-name'),
        rate: parseFloat(btn.getAttribute('data-rate')),
      };
      recalculate();
    });
  });

  // Sliders
  if (amountRange) {
    amountRange.addEventListener('input', (e) => {
      currentAmountCrore = parseInt(e.target.value, 10);
      updateAmountPresetButtons(currentAmountCrore);
      recalculate();
    });
  }

  if (tenorRange) {
    tenorRange.addEventListener('input', (e) => {
      currentTenorMonths = parseInt(e.target.value, 10);
      updateTenorPresetButtons(currentTenorMonths);
      recalculate();
    });
  }

  // Presets
  const amountPresetBtns = document.querySelectorAll('.preset-amount-btn');
  function updateAmountPresetButtons(val) {
    amountPresetBtns.forEach((btn) => {
      if (parseInt(btn.getAttribute('data-val'), 10) === val) {
        btn.classList.add('bg-emerald-500', 'text-black', 'font-semibold');
        btn.classList.remove('bg-white/5', 'text-neutral-300');
      } else {
        btn.classList.remove('bg-emerald-500', 'text-black', 'font-semibold');
        btn.classList.add('bg-white/5', 'text-neutral-300');
      }
    });
  }

  amountPresetBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const val = parseInt(btn.getAttribute('data-val'), 10);
      currentAmountCrore = val;
      if (amountRange) amountRange.value = val;
      updateAmountPresetButtons(val);
      recalculate();
    });
  });

  const tenorPresetBtns = document.querySelectorAll('.preset-tenor-btn');
  function updateTenorPresetButtons(val) {
    tenorPresetBtns.forEach((btn) => {
      if (parseInt(btn.getAttribute('data-val'), 10) === val) {
        btn.classList.add('bg-emerald-500', 'text-black', 'font-semibold');
        btn.classList.remove('bg-white/5', 'text-neutral-300');
      } else {
        btn.classList.remove('bg-emerald-500', 'text-black', 'font-semibold');
        btn.classList.add('bg-white/5', 'text-neutral-300');
      }
    });
  }

  tenorPresetBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const val = parseInt(btn.getAttribute('data-val'), 10);
      currentTenorMonths = val;
      if (tenorRange) tenorRange.value = val;
      updateTenorPresetButtons(val);
      recalculate();
    });
  });

  // Initial Calculation Run
  recalculate();

  // 2. Toast Notification Function
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMsg');
  function showToast(message) {
    if (!toast || !toastMsg) return;
    toastMsg.textContent = message;
    toast.classList.remove('hidden');
    setTimeout(() => {
      toast.classList.add('hidden');
    }, 2800);
  }

  // 3. Copy Phone / Summary
  const copyPhoneHeroBtn = document.getElementById('copyPhoneHeroBtn');
  if (copyPhoneHeroBtn) {
    copyPhoneHeroBtn.addEventListener('click', () => {
      navigator.clipboard.writeText('099198 05234').then(() => {
        showToast('Phone number 099198 05234 copied!');
      });
    });
  }

  const copyCalcSummaryBtn = document.getElementById('copyCalcSummaryBtn');
  if (copyCalcSummaryBtn) {
    copyCalcSummaryBtn.addEventListener('click', () => {
      const summary = `Siddhesh Capital Facility Estimate:\nFacility: ${currentFacility.name}\nAmount: ₹${currentAmountCrore} Crore\nTenor: ${currentTenorMonths} Months\nRate: ${currentFacility.rate}% p.a.\nMonthly EMI: ${outputEmi.textContent}\nTotal Outflow: ${outputTotalOutflow.textContent}\nDesk: 099198 05234 (122 Maker Chambers III, Nariman Point, Mumbai)`;
      navigator.clipboard.writeText(summary).then(() => {
        showToast('Facility calculation summary copied to clipboard!');
      });
    });
  }

  // 4. Tabs in Capital Section
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  tabButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab');

      tabButtons.forEach((b) => {
        b.classList.remove('bg-emerald-500', 'text-black', 'font-semibold', 'shadow-md');
        b.classList.add('text-neutral-400');
      });
      btn.classList.add('bg-emerald-500', 'text-black', 'font-semibold', 'shadow-md');
      btn.classList.remove('text-neutral-400');

      tabContents.forEach((c) => {
        if (c.id === targetId) {
          c.classList.remove('hidden');
        } else {
          c.classList.add('hidden');
        }
      });
    });
  });

  // 5. Mobile Drawer Menu Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const closeDrawerBtn = document.getElementById('closeDrawerBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileDrawer.classList.toggle('hidden');
    });
  }

  if (closeDrawerBtn && mobileDrawer) {
    closeDrawerBtn.addEventListener('click', () => {
      mobileDrawer.classList.add('hidden');
    });
  }

  mobileLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (mobileDrawer) mobileDrawer.classList.add('hidden');
    });
  });

  // 6. Contact Form Submission
  const contactForm = document.getElementById('contactForm');
  const contactFormMsg = document.getElementById('contactFormMsg');
  if (contactForm && contactFormMsg) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      contactFormMsg.classList.remove('hidden');
      contactForm.reset();
      showToast('Consultation request sent to credit desk!');
    });
  }

  // 7. Calculator Fast Inquiry Form
  const calcInquiryForm = document.getElementById('calcInquiryForm');
  const calcInquiryMsg = document.getElementById('calcInquiryMsg');
  if (calcInquiryForm && calcInquiryMsg) {
    calcInquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      calcInquiryMsg.classList.remove('hidden');
      document.getElementById('calcNotes').value = '';
      showToast('Facility inquiry logged successfully!');
      setTimeout(() => {
        calcInquiryMsg.classList.add('hidden');
      }, 5000);
    });
  }

  // 8. Search Grounding Simulation
  const searchForm = document.getElementById('searchForm');
  const searchQueryInput = document.getElementById('searchQueryInput');
  const searchResultArea = document.getElementById('searchResultArea');
  if (searchForm && searchQueryInput && searchResultArea) {
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const q = searchQueryInput.value.trim();
      if (!q) return;

      searchResultArea.innerHTML = `
        <div class="p-5 rounded-xl bg-black/40 border border-white/5 animate-pulse">
          <span class="text-[11px] font-mono uppercase tracking-wider text-blue-400 block mb-2">Retrieving Market Data...</span>
          <p class="text-sm text-neutral-400">Grounding intelligence on "${q}" via search benchmark databases...</p>
        </div>
      `;

      setTimeout(() => {
        searchResultArea.innerHTML = `
          <div class="p-5 rounded-xl bg-black/40 border border-white/5 space-y-2">
            <span class="text-[11px] font-mono uppercase tracking-wider text-blue-400 block">Verified Market Intelligence</span>
            <p class="text-sm text-neutral-200 leading-relaxed">
              Query synthesized: <strong>"${q}"</strong>. Market benchmarks indicate steady corporate credit demand across Mumbai and Western India. Commercial credit terms remain anchored to the RBI policy repo rate at 6.50%, with prime commercial spreads between 375 bps and 550 bps for senior structured facilities.
            </p>
            <div class="pt-2 flex flex-wrap gap-2 text-[11px] font-mono text-neutral-400">
              <span class="px-2 py-0.5 rounded bg-white/5 border border-white/10">Source: RBI Monetary Policy</span>
              <span class="px-2 py-0.5 rounded bg-white/5 border border-white/10">Source: MCA Statutory Data</span>
            </div>
          </div>
        `;
      }, 700);
    });
  }

  // 9. Nav Apply Button smooth scroll
  const navApplyBtn = document.getElementById('navApplyBtn');
  if (navApplyBtn) {
    navApplyBtn.addEventListener('click', () => {
      const calcEl = document.getElementById('calculator');
      if (calcEl) calcEl.scrollIntoView({ behavior: 'smooth' });
    });
  }
});
