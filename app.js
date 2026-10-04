const ATMS_STATE = {
  isLoggedIn: false,
  loginRole: 'instructor', // 'instructor' or 'trainee'
  activePortal: 'instructor',
  activeInstructorTab: 'squads',
  activeTraineeTab: 'assessment',
  
  currentUser: {
    role: 'instructor',
    name: 'Maj. Vikram Rathore, SM',
    serviceNo: 'IC-58921',
    designation: 'Senior Directing Staff (DS)',
    unit: 'Army War College (Mhow)'
  },

  squad: {
    name: 'Alfa Squadron',
    cohortCode: 'YO-2026-TAC',
    members: [
      { id: 'cadet-1', serviceNo: 'IC-84920', name: 'Cadet Arjun Rawat', role: 'Squad Leader', status: 'Completed', mcqScore: '90%', timeTaken: '2m 14s', fieldStatus: 'Verified', grade: 'A+' },
      { id: 'cadet-2', serviceNo: 'IC-84921', name: 'Cadet Devendra Singh', role: 'Scout / Recon', status: 'Not Started', mcqScore: '--', timeTaken: '--', fieldStatus: 'Pending', grade: '--' },
      { id: 'cadet-3', serviceNo: 'IC-84922', name: 'Cadet Priya Nair', role: 'Signals Officer', status: 'In Progress', mcqScore: '--', timeTaken: '1m 40s', fieldStatus: 'Active', grade: 'In-Eval' },
      { id: 'cadet-4', serviceNo: 'IC-84923', name: 'Cadet Manpreet Gill', role: '2IC / Navigator', status: 'Completed', mcqScore: '80%', timeTaken: '2m 50s', fieldStatus: 'Verified', grade: 'A' },
      { id: 'cadet-5', serviceNo: 'IC-84924', name: 'Cadet Rohit Deshmukh', role: 'Rifleman Support', status: 'Completed', mcqScore: '70%', timeTaken: '3m 10s', fieldStatus: 'Verified', grade: 'B+' },
      { id: 'cadet-6', serviceNo: 'IC-84925', name: 'Cadet Ananya Verma', role: 'Medic / Triage', status: 'In Progress', mcqScore: '--', timeTaken: '1m 15s', fieldStatus: 'Active', grade: 'In-Eval' }
    ]
  },
  parameters: { difficulty: 'Intermediate', timerMode: 'per-question', timerSeconds: 60, passingThreshold: 75 },
  questions: [
    {
      id: 1, domain: 'TACTICAL AMBUSH & DEFENSE', difficulty: 'Intermediate',
      prompt: 'While conducting a daylight reconnaissance patrol through undulating scrub terrain, your lead scout reports enemy infantry movement at Grid 482-914, approximately 350 meters ahead, with visual indication of an unspotted machine gun emplacement. What is your immediate tactical drill?',
      options: {
        A: 'Halt, take immediate cover, order rifle squad to freeze in place, and signal 2IC to initiate simultaneous fire and movement without artillery check.',
        B: 'Direct immediate tactical bounds backward, pop smoke grenade, and establish an ad-hoc defensive perimeter in dead ground to confirm enemy disposition.',
        C: 'RTI (Return Immediate Fire) drill: Direct heavy suppressive fire onto bunker line while calling company command for airstrike clearance.',
        D: 'Order immediate frontal charge using close-quarter battle drills to overwhelm the enemy before they establish interlocking arcs.'
      },
      correct: 'B',
      explanation: 'Standard doctrine dictates that an uncommitted patrol encountering a superior fixed weapon must avoid entering the enemy kill zone. Falling back to dead ground with smoke screen provides reconnaissance confirmation.'
    },
    {
      id: 2, domain: 'CBRN & CHEMICAL WARFARE', difficulty: 'Basic',
      prompt: 'During an advance toward an objective, your chemical reconnaissance paper (3-way detector) turns blue-green, and troops report the scent of freshly cut hay. Which agent is present and what is your immediate command?',
      options: {
        A: 'Nerve Agent (VX); order immediate autoinjector Atropine administration.',
        B: 'Blister Agent (Mustard Gas); order immediate Full IPE de-contamination.',
        C: 'Choking Agent (Phosgene); order Immediate Masking and move to high ground upwind.',
        D: 'Blood Agent (Cyanogen Chloride); order rapid sprint downwind.'
      },
      correct: 'C',
      explanation: 'Freshly cut hay is the classic diagnostic signature of Phosgene (CG), a lethal pulmonary choking agent. Troops must mask within 9 seconds and evacuate upwind.'
    },
    {
      id: 3, domain: 'SIGNALS & ELECTRONIC WARFARE', difficulty: 'Intermediate',
      prompt: 'Your VHF tactical radio net encounters heavy intermittent electronic jamming (screech tones and artificial static) during battalion assault synchronization. Which SOP action takes precedence?',
      options: {
        A: 'Increase transmitter power output to maximum wattage and repeat unencrypted message.',
        B: 'Switch immediately to pre-designated alternate frequencies (Frequency Hopping / PACE plan) and employ terrain shielding.',
        C: 'Abandon radio communication and rely solely on hand signals over a 3-kilometer battle front.',
        D: 'Break radio silence on emergency guard channel (243.0 MHz).'
      },
      correct: 'B',
      explanation: 'Increasing power merely alerts enemy Direction Finding (DF) units. Doctrine mandates transition to alternate PACE frequency behind terrain masking.'
    },
    {
      id: 4, domain: 'COMBAT LOGISTICS & CASEVAC', difficulty: 'Advanced',
      prompt: 'A team member sustains a blast injury with severe arterial bleeding in the femoral region under active sniper fire. Triage protocol mandates which immediate sequence of care?',
      options: {
        A: 'Care Under Fire (CUF): Direct member to self-apply tourniquet or suppress threat before performing interventions; move casualty to cover.',
        B: 'Tactical Field Care (TFC): Lay casualty flat, perform abdominal check, and pack wound with non-hemostatic gauze.',
        C: 'Call immediate MEDEVAC helicopter directly into the active fire zone without clearing landing zone security.',
        D: 'Administer oral fluids and morphine immediately while under active enemy sightlines.'
      },
      correct: 'A',
      explanation: 'Under TCCC Care Under Fire guidelines, fire superiority is paramount. Apply tourniquet only if feasible, or suppress shooter before patient packaging.'
    },
    {
      id: 5, domain: 'MAP READING & NIGHT AZIMUTH', difficulty: 'Basic',
      prompt: 'When converting a Grid Bearing of 142° to a Magnetic Bearing in a theater with an Easterly Magnetic Declination of 3° 30\', the calculated Magnetic Bearing to set on your prismatic compass is:',
      options: { A: '145° 30\'', B: '138° 30\'', C: '142° 00\'', D: '140° 15\'' },
      correct: 'B',
      explanation: 'Grid to Magnetic with Easterly variation: Magnetic Bearing = Grid Bearing - Magnetic Variation. 142° - 3° 30\' = 138° 30\'.'
    }
  ],
  fieldTasks: [
    {
      id: 'ft-1',
      title: 'Ex-Night Azimuth Navigation Drill',
      objective: '5 km tactical compass navigation through scrub terrain carrying 15 kg combat battle load. Zero white-light signature.',
      targetGrid: 'GRID 482-914', mode: 'Multi-User', timeLimit: 45, status: 'Active',
      submissions: [
        { traineeName: 'Cadet Arjun Rawat (IC-84920)', timeLogged: '34 mins', grid: '482-914', notes: 'Checkpoints Alpha and Bravo logged via GPS. Team gear 100% intact.', status: 'Verified' },
        { traineeName: 'Cadet Manpreet Gill (IC-84923)', timeLogged: '38 mins', grid: '482-914', notes: 'Navigated dead ground route. Radio check completed.', status: 'Verified' }
      ]
    },
    {
      id: 'ft-2',
      title: 'VHF Antenna Rigging & Crypto Code Drill',
      objective: 'Erect field mast antenna and establish secure cipher link within 8 minutes under simulated electronic fog.',
      targetGrid: 'GRID 510-822', mode: 'Single-User', timeLimit: 15, status: 'Active',
      submissions: [
        { traineeName: 'Cadet Priya Nair (IC-84922)', timeLogged: '06m 20s', grid: '510-822', notes: 'Frequency hopping established. Signal strength 5/5.', status: 'Verified' }
      ]
    }
  ],
  currentQuestionIdx: 0,
  userAnswers: {},
  examTimerRemaining: 60,
  examTimerInterval: null,
  selectedTraineeId: 'cadet-1'
};

// ================= INITIALIZATION =================
document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();
  showLoginView();
  renderSquadRoster();
  renderQuestionBank();
  renderFieldTasks();
  renderTraineeTaskList();
  loadTraineeQuestion(0);
});

// ================= LOGIN SYSTEM LOGIC =================
function showLoginView() {
  document.getElementById('view-login').classList.remove('hidden');
  document.getElementById('view-app').classList.add('hidden');
}

function setLoginRole(role) {
  ATMS_STATE.loginRole = role;
  const tabInst = document.getElementById('login-tab-instructor');
  const tabTr = document.getElementById('login-tab-trainee');
  const bannerTitle = document.getElementById('login-banner-title');
  const bannerDesc = document.getElementById('login-banner-desc');
  const labelService = document.getElementById('label-service-no');
  const inputService = document.getElementById('login-input-service');
  const selectClearance = document.getElementById('login-input-clearance');

  if (role === 'instructor') {
    tabInst.className = 'py-3 px-4 flex items-center justify-center space-x-2 border-b-2 border-slate-900 bg-white text-slate-900';
    tabTr.className = 'py-3 px-4 flex items-center justify-center space-x-2 border-b-2 border-transparent text-slate-500 hover:text-slate-800';
    bannerTitle.innerText = 'Directing Staff / Instructor Access';
    bannerDesc.innerText = 'Administrative rights to manage cohorts, author tactical MCQs, adjust countdown timers, and issue signed ARTRAC evaluation reports.';
    labelService.innerText = 'Army Service Number (IC No)';
    inputService.value = 'IC-58921';
    selectClearance.value = 'LEVEL-4';
  } else {
    tabTr.className = 'py-3 px-4 flex items-center justify-center space-x-2 border-b-2 border-slate-900 bg-white text-slate-900';
    tabInst.className = 'py-3 px-4 flex items-center justify-center space-x-2 border-b-2 border-transparent text-slate-500 hover:text-slate-800';
    bannerTitle.innerText = 'Officer Trainee / Cadet Access';
    bannerDesc.innerText = 'Candidate portal to execute timed tactical assessments, submit verified field mission coordinates, and monitor individual performance dossiers.';
    labelService.innerText = 'Cadet Service Number (IC No)';
    inputService.value = 'IC-84920';
    selectClearance.value = 'LEVEL-3';
  }
  lucide.createIcons();
}

function handleFormLogin(e) {
  e.preventDefault();
  const serviceNo = document.getElementById('login-input-service').value.trim();
  const division = document.getElementById('login-input-division').value;
  const btnText = document.getElementById('btn-login-text');
  
  btnText.innerText = 'Verifying Credential...';
  setTimeout(() => {
    btnText.innerText = 'Authenticate & Enter Console';
    if (ATMS_STATE.loginRole === 'instructor') {
      completeLogin({
        role: 'instructor',
        name: 'Maj. Vikram Rathore, SM',
        serviceNo: serviceNo || 'IC-58921',
        designation: 'Senior Directing Staff (DS)',
        unit: division
      });
    } else {
      completeLogin({
        role: 'trainee',
        name: 'Cadet Arjun Rawat',
        serviceNo: serviceNo || 'IC-84920',
        designation: 'Alfa Squad Leader',
        unit: division,
        traineeId: 'cadet-1'
      });
    }
  }, 500);
}

function quickOfficerLogin(preset) {
  if (preset === 'instructor') {
    completeLogin({
      role: 'instructor',
      name: 'Maj. Vikram Rathore, SM',
      serviceNo: 'IC-58921',
      designation: 'Senior Directing Staff (DS)',
      unit: 'Army War College (Mhow)'
    });
  } else if (preset === 'trainee-leader') {
    completeLogin({
      role: 'trainee',
      name: 'Cadet Arjun Rawat',
      serviceNo: 'IC-84920',
      designation: 'Alfa Squad Leader',
      unit: 'Army War College (Mhow)',
      traineeId: 'cadet-1'
    });
  } else if (preset === 'trainee-signals') {
    completeLogin({
      role: 'trainee',
      name: 'Cadet Priya Nair',
      serviceNo: 'IC-84922',
      designation: 'Signals & EW Officer',
      unit: 'Army War College (Mhow)',
      traineeId: 'cadet-3'
    });
  }
}

function completeLogin(officer) {
  ATMS_STATE.isLoggedIn = true;
  ATMS_STATE.currentUser = officer;
  
  document.getElementById('view-login').classList.add('hidden');
  document.getElementById('view-app').classList.remove('hidden');

  if (officer.role === 'trainee' && officer.traineeId) {
    ATMS_STATE.selectedTraineeId = officer.traineeId;
    const sel = document.getElementById('select-trainee-persona');
    if (sel) sel.value = officer.traineeId;
  }

  switchPortal(officer.role);
  startExamTimer();
}

function logoutOfficer() {
  if (ATMS_STATE.examTimerInterval) clearInterval(ATMS_STATE.examTimerInterval);
  ATMS_STATE.isLoggedIn = false;
  showLoginView();
  setLoginRole('instructor');
}

// ================= PORTAL SWITCHING =================
function switchPortal(portal) {
  ATMS_STATE.activePortal = portal;
  const instView = document.getElementById('view-instructor');
  const trView = document.getElementById('view-trainee');
  const btnInst = document.getElementById('btn-portal-instructor');
  const btnTr = document.getElementById('btn-portal-trainee');
  const userDisplay = document.getElementById('user-display-name');
  const userSub = document.getElementById('user-display-sub');
  const userAvatar = document.getElementById('user-avatar-initials');

  if (portal === 'instructor') {
    instView.classList.remove('hidden');
    trView.classList.add('hidden');
    btnInst.className = 'px-3 py-1.5 rounded-md text-xs font-semibold transition flex items-center space-x-1.5 bg-white text-slate-900 shadow-sm border border-slate-200';
    btnTr.className = 'px-3 py-1.5 rounded-md text-xs font-semibold transition flex items-center space-x-1.5 text-slate-600 hover:text-slate-900';
    userDisplay.innerHTML = '<span>Maj. Vikram Rathore, SM</span><span class="text-[10px] bg-slate-200 text-slate-800 px-1.5 py-0.2 rounded font-mono font-normal">DS-TACTICAL</span>';
    userSub.innerText = 'Corps of Signals / Directing Staff • Session: RBAC-SECURE';
    userAvatar.innerText = 'VR';
  } else {
    instView.classList.add('hidden');
    trView.classList.remove('hidden');
    btnTr.className = 'px-3 py-1.5 rounded-md text-xs font-semibold transition flex items-center space-x-1.5 bg-white text-slate-900 shadow-sm border border-slate-200';
    btnInst.className = 'px-3 py-1.5 rounded-md text-xs font-semibold transition flex items-center space-x-1.5 text-slate-600 hover:text-slate-900';
    const curr = ATMS_STATE.squad.members.find(m => m.id === ATMS_STATE.selectedTraineeId) || ATMS_STATE.squad.members[0];
    userDisplay.innerHTML = `<span>${curr.name}</span><span class="text-[10px] bg-blue-100 text-blue-800 px-1.5 py-0.2 rounded font-mono font-normal">${curr.serviceNo}</span>`;
    userSub.innerText = `Alfa Squad • Role: ${curr.role} • Assessment Mode`;
    userAvatar.innerText = curr.name.split(' ').map(n=>n[0]).slice(-2).join('');
  }
  lucide.createIcons();
}

function switchInstructorTab(tab) {
  ATMS_STATE.activeInstructorTab = tab;
  ['squads', 'engine', 'fieldtasks', 'reports'].forEach(t => {
    const el = document.getElementById(`inst-tab-${t}`);
    const btn = document.getElementById(`tab-inst-${t}`);
    if (t === tab) {
      el.classList.remove('hidden');
      btn.className = 'pb-3 border-b-2 border-slate-900 text-slate-900 flex items-center space-x-2';
    } else {
      el.classList.add('hidden');
      btn.className = 'pb-3 border-b-2 border-transparent text-slate-500 hover:text-slate-900 flex items-center space-x-2';
    }
  });
  lucide.createIcons();
}

function switchTraineeTab(tab) {
  ATMS_STATE.activeTraineeTab = tab;
  ['assessment', 'fieldtask', 'dossier'].forEach(t => {
    const el = document.getElementById(`tr-tab-${t}`);
    const btn = document.getElementById(`tab-tr-${t}`);
    if (t === tab) {
      el.classList.remove('hidden');
      btn.className = 'pb-3 border-b-2 border-slate-900 text-slate-900 flex items-center space-x-2';
    } else {
      el.classList.add('hidden');
      btn.className = 'pb-3 border-b-2 border-transparent text-slate-500 hover:text-slate-900 flex items-center space-x-2';
    }
  });
  lucide.createIcons();
}

function renderSquadRoster() {
  const tbody = document.getElementById('squad-roster-tbody');
  if (!tbody) return;
  tbody.innerHTML = '';
  let compCount = 0, inProgCount = 0, notStartCount = 0;

  ATMS_STATE.squad.members.forEach((m, idx) => {
    if (m.status === 'Completed') compCount++;
    else if (m.status === 'In Progress') inProgCount++;
    else notStartCount++;

    let statusBadge = m.status === 'Completed' ?
      '<span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-100 text-emerald-800"><span class="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5"></span>Completed</span>' :
      (m.status === 'In Progress' ?
        '<span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-amber-100 text-amber-800"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mr-1.5 animate-pulse"></span>In Progress</span>' :
        '<span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-600"><span class="w-1.5 h-1.5 rounded-full bg-slate-400 mr-1.5"></span>Not Started</span>');

    const tr = document.createElement('tr');
    tr.className = 'hover:bg-slate-50 transition border-b border-slate-100';
    tr.innerHTML = `
      <td class="py-3 px-4 font-mono text-slate-400">${idx + 1}</td>
      <td class="py-3 px-4 font-medium text-slate-900">
        <div class="font-bold">${m.name}</div>
        <div class="text-[11px] font-mono text-slate-500">${m.serviceNo}</div>
      </td>
      <td class="py-3 px-4"><span class="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-xs font-mono">${m.role}</span></td>
      <td class="py-3 px-4">${statusBadge}</td>
      <td class="py-3 px-4 font-mono font-bold text-slate-800">${m.mcqScore}</td>
      <td class="py-3 px-4 text-xs font-mono">
        ${m.fieldStatus === 'Verified' ? '<span class="text-emerald-700 font-bold">✓ Verified</span>' : (m.fieldStatus === 'Active' ? '<span class="text-amber-600 font-bold">⟳ Active</span>' : '<span class="text-slate-400">Pending</span>')}
      </td>
      <td class="py-3 px-4 text-right">
        <button onclick="simulateToggleMemberStatus('${m.id}')" class="text-xs text-blue-600 hover:text-blue-800 font-medium underline">Toggle Status</button>
      </td>
    `;
    tbody.appendChild(tr);
  });

  const cEl = document.getElementById('stat-completed-count');
  const pEl = document.getElementById('stat-inprogress-count');
  const nEl = document.getElementById('stat-notstarted-count');
  if (cEl) cEl.innerText = compCount;
  if (pEl) pEl.innerText = inProgCount;
  if (nEl) nEl.innerText = notStartCount;
}

function simulateToggleMemberStatus(id) {
  const m = ATMS_STATE.squad.members.find(x => x.id === id);
  if (!m) return;
  if (m.status === 'Not Started') { m.status = 'In Progress'; m.fieldStatus = 'Active'; }
  else if (m.status === 'In Progress') { m.status = 'Completed'; m.mcqScore = '80%'; m.timeTaken = '2m 30s'; m.fieldStatus = 'Verified'; m.grade = 'A'; }
  else { m.status = 'Not Started'; m.mcqScore = '--'; m.fieldStatus = 'Pending'; m.grade = '--'; }
  renderSquadRoster();
}

function resetSquadDemoData() {
  ATMS_STATE.squad.members[0].status = 'Completed';
  ATMS_STATE.squad.members[1].status = 'Not Started';
  ATMS_STATE.squad.members[2].status = 'In Progress';
  ATMS_STATE.squad.members[3].status = 'Completed';
  ATMS_STATE.squad.members[4].status = 'Completed';
  ATMS_STATE.squad.members[5].status = 'In Progress';
  renderSquadRoster();
}

function renderQuestionBank() {
  const container = document.getElementById('question-bank-container');
  if (!container) return;
  container.innerHTML = '';
  const bEl = document.getElementById('badge-question-count');
  if (bEl) bEl.innerText = `${ATMS_STATE.questions.length} Questions Loaded`;

  ATMS_STATE.questions.forEach((q, idx) => {
    const card = document.createElement('div');
    card.className = 'p-4 rounded-lg border border-slate-200 bg-slate-50 hover:bg-white hover:shadow-sm transition space-y-2';
    card.innerHTML = `
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-2">
          <span class="px-2 py-0.5 rounded font-mono font-bold text-xs bg-slate-200 text-slate-800">Q${idx + 1}</span>
          <span class="text-xs font-mono font-semibold text-blue-700">${q.domain}</span>
        </div>
        <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-200 text-slate-700 font-bold">${q.difficulty}</span>
      </div>
      <p class="text-xs font-medium text-slate-900 leading-snug">${q.prompt}</p>
      <div class="grid grid-cols-2 gap-2 text-[11px] text-slate-600 pt-1 font-mono">
        <div><strong class="text-slate-800">A:</strong> ${q.options.A.substring(0, 42)}...</div>
        <div><strong class="text-slate-800">B:</strong> ${q.options.B.substring(0, 42)}...</div>
        <div><strong class="text-slate-800">C:</strong> ${q.options.C.substring(0, 42)}...</div>
        <div><strong class="text-slate-800">D:</strong> ${q.options.D.substring(0, 42)}...</div>
      </div>
      <div class="flex items-center justify-between pt-1 border-t border-slate-200 text-[11px]">
        <span class="text-emerald-700 font-mono font-bold">Correct Key: Option ${q.correct}</span>
        <button onclick="removeQuestion(${q.id})" class="text-red-600 hover:text-red-800 font-medium">Remove</button>
      </div>
    `;
    container.appendChild(card);
  });
}

function removeQuestion(id) {
  if (ATMS_STATE.questions.length <= 1) { alert("At least 1 question must remain in the active assessment."); return; }
  ATMS_STATE.questions = ATMS_STATE.questions.filter(q => q.id !== id);
  renderQuestionBank();
  loadTraineeQuestion(0);
}

function triggerDynamicGeneration() {
  const diff = document.getElementById('param-difficulty').value;
  const topic = document.getElementById('param-topic').value;
  const feedback = document.getElementById('gen-feedback-msg');
  feedback.classList.remove('hidden');
  feedback.innerText = 'Synthesizing tactical dilemma via Doctrine Engine...';

  setTimeout(() => {
    const freshQ = {
      id: Date.now(),
      domain: topic === 'cbrn' ? 'CBRN & CHEMICAL WARFARE' : (topic === 'signals' ? 'ELECTRONIC WARFARE' : 'TACTICAL DEFENSE & RETALIATION'),
      difficulty: diff,
      prompt: `[Dynamic ${diff}] During a battalion breakthrough, thermal sensors indicate an armored platoon advancing with drone overhead cover at 800m. Your forward screen has only 3 wire-guided ATGMs remaining. What is your immediate doctrinal firing allocation?`,
      options: {
        A: 'Fire all 3 ATGMs simultaneously at the lead vehicle to create an immediate road blockade.',
        B: 'Hold fire until the lead command tank reaches designated engagement kill-box (400m); engage with staggered single missiles.',
        C: 'Discharge smoke mortars and withdraw the anti-tank detachment without engaging.',
        D: 'Order riflemen to engage armor optics with small arms fire to distract crews.'
      },
      correct: 'B',
      explanation: 'Conservation of high-value munitions dictates engaging command assets in pre-surveyed kill-boxes with shoot-and-scoot doctrine.'
    };
    ATMS_STATE.questions.push(freshQ);
    renderQuestionBank();
    feedback.innerText = `✓ Fresh ${diff} question successfully generated and added to Question Bank!`;
    setTimeout(() => feedback.classList.add('hidden'), 4000);
  }, 700);
}

function updateEngineParams() {
  const mode = document.getElementById('param-timer-mode').value;
  const secs = parseInt(document.getElementById('param-timer-seconds').value, 10);
  ATMS_STATE.parameters.timerMode = mode;
  ATMS_STATE.parameters.timerSeconds = secs;
  const desc = document.getElementById('timer-mode-desc');
  if (mode === 'per-question') {
    desc.innerText = `Each individual question enforces a ${secs}-second operational deadline.`;
  } else {
    desc.innerText = `Total test session capped at ${Math.round(secs/60)} minutes overall countdown.`;
  }
}

function openAuthorModal() { document.getElementById('modal-author-question').classList.remove('hidden'); }
function closeAuthorModal() { document.getElementById('modal-author-question').classList.add('hidden'); }
function saveAuthoredQuestion() {
  const prompt = document.getElementById('author-prompt').value.trim();
  const domain = document.getElementById('author-domain').value.trim();
  const diff = document.getElementById('author-difficulty').value;
  const optA = document.getElementById('author-opt-a').value.trim();
  const optB = document.getElementById('author-opt-b').value.trim();
  const optC = document.getElementById('author-opt-c').value.trim();
  const optD = document.getElementById('author-opt-d').value.trim();
  const correct = document.getElementById('author-correct').value;
  const explanation = document.getElementById('author-explanation').value.trim();

  if (!prompt || !optA || !optB || !optC || !optD) {
    alert("Please complete the question prompt and all four options (A, B, C, D).");
    return;
  }
  ATMS_STATE.questions.push({
    id: Date.now(), domain: domain || 'TACTICAL SCENARIO', difficulty: diff, prompt: prompt,
    options: { A: optA, B: optB, C: optC, D: optD }, correct: correct, explanation: explanation || 'Instructor verified doctrine.'
  });
  renderQuestionBank();
  closeAuthorModal();
  alert("Custom Question authored and added to assessment bank!");
}

function addSquadMemberModal() { document.getElementById('modal-add-member').classList.remove('hidden'); }
function closeAddMemberModal() { document.getElementById('modal-add-member').classList.add('hidden'); }
function saveNewSquadMember() {
  const sNo = document.getElementById('member-service-no').value.trim();
  const name = document.getElementById('member-name').value.trim();
  const role = document.getElementById('member-role').value;
  if (!sNo || !name) return;
  ATMS_STATE.squad.members.push({
    id: 'cadet-' + (ATMS_STATE.squad.members.length + 1), serviceNo: sNo, name: name, role: role,
    status: 'Not Started', mcqScore: '--', timeTaken: '--', fieldStatus: 'Pending', grade: '--'
  });
  renderSquadRoster();
  closeAddMemberModal();
}

function renderFieldTasks() {
  const grid = document.getElementById('dispatched-tasks-grid');
  const subTbody = document.getElementById('field-submissions-tbody');
  if (!grid || !subTbody) return;
  grid.innerHTML = '';
  subTbody.innerHTML = '';

  ATMS_STATE.fieldTasks.forEach(t => {
    const card = document.createElement('div');
    card.className = 'p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2';
    card.innerHTML = `
      <div class="flex items-center justify-between">
        <span class="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">${t.mode}</span>
        <span class="text-xs font-mono text-slate-500">${t.targetGrid}</span>
      </div>
      <h4 class="font-bold text-slate-900 text-sm">${t.title}</h4>
      <p class="text-xs text-slate-600">${t.objective}</p>
      <div class="flex items-center justify-between pt-2 border-t border-slate-200 text-xs font-mono">
        <span class="text-slate-500">Time Limit: ${t.timeLimit} mins</span>
        <span class="text-emerald-700 font-bold">${t.submissions.length} Submissions Logged</span>
      </div>
    `;
    grid.appendChild(card);

    t.submissions.forEach(sub => {
      const row = document.createElement('tr');
      row.className = 'border-b border-slate-100 hover:bg-slate-50';
      row.innerHTML = `
        <td class="py-2.5 px-3 font-semibold text-slate-900">${sub.traineeName}</td>
        <td class="py-2.5 px-3">${t.title}</td>
        <td class="py-2.5 px-3 font-mono text-slate-600">${sub.grid}</td>
        <td class="py-2.5 px-3 font-mono font-bold">${sub.timeLogged}</td>
        <td class="py-2.5 px-3 text-slate-600">${sub.notes}</td>
        <td class="py-2.5 px-3 font-mono font-bold text-emerald-700">✓ ${sub.status}</td>
        <td class="py-2.5 px-3 text-right"><span class="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-mono font-bold">APPROVED</span></td>
      `;
      subTbody.appendChild(row);
    });
  });
}

function openDispatchTaskModal() { document.getElementById('modal-dispatch-task').classList.remove('hidden'); }
function closeDispatchTaskModal() { document.getElementById('modal-dispatch-task').classList.add('hidden'); }
function confirmDispatchTask() {
  const title = document.getElementById('dispatch-title').value.trim();
  const obj = document.getElementById('dispatch-objective').value.trim();
  const grid = document.getElementById('dispatch-grid').value.trim();
  const mode = document.getElementById('dispatch-mode').value;
  const time = parseInt(document.getElementById('dispatch-time').value, 10);
  if (!title || !obj) { alert("Please specify task title and objectives."); return; }

  ATMS_STATE.fieldTasks.unshift({
    id: 'ft-' + Date.now(), title: title, objective: obj, targetGrid: grid || 'GRID 480-920',
    mode: mode, timeLimit: time || 30, status: 'Active', submissions: []
  });
  renderFieldTasks();
  renderTraineeTaskList();
  closeDispatchTaskModal();
  alert(`Exercise '${title}' dispatched to squad trainees!`);
}

function loadTraineeQuestion(idx) {
  if (idx < 0 || idx >= ATMS_STATE.questions.length) return;
  ATMS_STATE.currentQuestionIdx = idx;
  const q = ATMS_STATE.questions[idx];

  const numBadge = document.getElementById('exam-q-number-badge');
  const domBadge = document.getElementById('exam-q-domain-badge');
  const diffBadge = document.getElementById('exam-difficulty-badge');
  const promptEl = document.getElementById('exam-q-prompt');
  const progEl = document.getElementById('exam-progress-bar');
  if (numBadge) numBadge.innerText = `QUESTION ${idx + 1} OF ${ATMS_STATE.questions.length}`;
  if (domBadge) domBadge.innerText = q.domain;
  if (diffBadge) diffBadge.innerText = `DIFFICULTY: ${q.difficulty.toUpperCase()}`;
  if (promptEl) promptEl.innerText = q.prompt;
  if (progEl) progEl.style.width = `${((idx + 1) / ATMS_STATE.questions.length) * 100}%`;

  const container = document.getElementById('exam-options-container');
  if (!container) return;
  container.innerHTML = '';
  ['A', 'B', 'C', 'D'].forEach(letter => {
    const text = q.options[letter];
    const isChecked = ATMS_STATE.userAnswers[idx] === letter;
    const label = document.createElement('label');
    label.className = `option-tile flex items-start p-4 rounded-xl border-2 cursor-pointer transition select-none ${isChecked ? 'border-slate-900 bg-slate-100 shadow-sm' : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'}`;
    label.innerHTML = `
      <input type="radio" name="mcq_answer" value="${letter}" ${isChecked ? 'checked' : ''} onchange="selectTraineeAnswer('${letter}')" class="mt-1 h-4 w-4 text-slate-900 border-slate-300 focus:ring-slate-900">
      <div class="ml-3">
        <span class="inline-block font-mono font-bold text-xs ${isChecked ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-800'} border border-slate-300 px-2 py-0.5 rounded mr-2">${letter}</span>
        <span class="text-sm font-medium text-slate-800">${text}</span>
      </div>
    `;
    container.appendChild(label);
  });

  const prevBtn = document.getElementById('btn-exam-prev');
  const nextBtn = document.getElementById('btn-exam-next');
  const subBtn = document.getElementById('btn-exam-submit');
  if (prevBtn) prevBtn.disabled = (idx === 0);
  if (idx === ATMS_STATE.questions.length - 1) {
    if (nextBtn) nextBtn.classList.add('hidden');
    if (subBtn) subBtn.classList.remove('hidden');
  } else {
    if (nextBtn) nextBtn.classList.remove('hidden');
    if (subBtn) subBtn.classList.add('hidden');
  }

  ATMS_STATE.examTimerRemaining = ATMS_STATE.parameters.timerSeconds;
  updateTimerDisplay();
  lucide.createIcons();
}

function selectTraineeAnswer(letter) {
  ATMS_STATE.userAnswers[ATMS_STATE.currentQuestionIdx] = letter;
  loadTraineeQuestion(ATMS_STATE.currentQuestionIdx);
}

function navigateExamQuestion(delta) {
  const next = ATMS_STATE.currentQuestionIdx + delta;
  if (next >= 0 && next < ATMS_STATE.questions.length) loadTraineeQuestion(next);
}

function startExamTimer() {
  if (ATMS_STATE.examTimerInterval) clearInterval(ATMS_STATE.examTimerInterval);
  ATMS_STATE.examTimerInterval = setInterval(() => {
    if (ATMS_STATE.examTimerRemaining > 0) {
      ATMS_STATE.examTimerRemaining--;
      updateTimerDisplay();
    } else {
      if (ATMS_STATE.currentQuestionIdx < ATMS_STATE.questions.length - 1) navigateExamQuestion(1);
      else submitExamAssessment();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const mins = Math.floor(ATMS_STATE.examTimerRemaining / 60);
  const secs = ATMS_STATE.examTimerRemaining % 60;
  const disp = document.getElementById('exam-timer-display');
  if (disp) {
    disp.innerText = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    disp.className = ATMS_STATE.examTimerRemaining <= 10 ? 'text-lg font-mono font-bold text-red-400 animate-pulse tracking-wider' : 'text-lg font-mono font-bold text-white tracking-wider';
  }
}

function submitExamAssessment() {
  clearInterval(ATMS_STATE.examTimerInterval);
  let correctCount = 0;
  ATMS_STATE.questions.forEach((q, idx) => {
    if (ATMS_STATE.userAnswers[idx] === q.correct) correctCount++;
  });
  const total = ATMS_STATE.questions.length;
  const pct = Math.round((correctCount / total) * 100);

  const fScore = document.getElementById('final-score-display');
  const fTime = document.getElementById('final-time-display');
  const eBody = document.getElementById('exam-body-container');
  const eComp = document.getElementById('exam-completed-view');
  if (fScore) fScore.innerText = `${correctCount} / ${total} (${pct}%)`;
  if (fTime) fTime.innerText = `2m 14s`;
  if (eBody) eBody.classList.add('hidden');
  if (eComp) eComp.classList.remove('hidden');

  const curr = ATMS_STATE.squad.members.find(m => m.id === ATMS_STATE.selectedTraineeId);
  if (curr) {
    curr.status = 'Completed';
    curr.mcqScore = `${pct}%`;
    curr.grade = pct >= 80 ? 'A' : (pct >= 60 ? 'B' : 'C');
    renderSquadRoster();
  }
}

function retakeAssessmentDemo() {
  ATMS_STATE.userAnswers = {};
  const eBody = document.getElementById('exam-body-container');
  const eComp = document.getElementById('exam-completed-view');
  if (eBody) eBody.classList.remove('hidden');
  if (eComp) eComp.classList.add('hidden');
  loadTraineeQuestion(0);
  startExamTimer();
}

function onTraineePersonaChange() {
  const val = document.getElementById('select-trainee-persona').value;
  ATMS_STATE.selectedTraineeId = val;
  const curr = ATMS_STATE.squad.members.find(m => m.id === val);
  if (curr) {
    const wTitle = document.getElementById('trainee-welcome-title');
    if (wTitle) wTitle.innerText = `${curr.name} (${curr.serviceNo})`;
  }
  switchPortal('trainee');
}

function renderTraineeTaskList() {
  const list = document.getElementById('trainee-tasks-list');
  const detail = document.getElementById('trainee-active-task-detail');
  if (!list || !detail) return;
  list.innerHTML = '';
  if (ATMS_STATE.fieldTasks.length === 0) return;

  const activeTask = ATMS_STATE.fieldTasks[0];
  ATMS_STATE.fieldTasks.forEach((t, i) => {
    const item = document.createElement('div');
    item.className = `p-3 rounded-lg border cursor-pointer transition ${i === 0 ? 'bg-slate-900 text-white border-slate-900' : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100'}`;
    item.innerHTML = `
      <div class="text-[10px] font-mono uppercase ${i === 0 ? 'text-amber-400' : 'text-slate-500'}">${t.mode} • ${t.targetGrid}</div>
      <div class="text-xs font-bold mt-0.5">${t.title}</div>
    `;
    list.appendChild(item);
  });

  detail.innerHTML = `
    <div class="flex items-center justify-between border-b border-slate-200 pb-3">
      <div>
        <span class="text-xs font-mono font-bold bg-amber-100 text-amber-800 px-2 py-0.5 rounded">ASSIGNED FIELD EXERCISE</span>
        <h3 class="text-base font-bold text-slate-900 mt-1">${activeTask.title}</h3>
      </div>
      <div class="text-right font-mono text-xs">
        <span class="text-slate-500">Target Grid:</span>
        <span class="font-bold text-slate-900 ml-1">${activeTask.targetGrid}</span>
      </div>
    </div>
    <div class="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-700 space-y-1">
      <strong class="text-slate-900">Task Objective & Directives:</strong>
      <p>${activeTask.objective}</p>
    </div>
    <div class="space-y-4 pt-2">
      <h4 class="text-xs font-bold text-slate-900 uppercase font-mono">Submit Field Completion SITREP</h4>
      <div class="grid grid-cols-2 gap-3">
        <div>
          <label class="block text-[11px] font-bold text-slate-700 mb-1">ACTUAL COMPLETION TIME (MINS)</label>
          <input type="number" id="tr-submit-time" value="34" class="w-full text-xs bg-slate-50 border border-slate-300 rounded p-2 font-mono font-bold">
        </div>
        <div>
          <label class="block text-[11px] font-bold text-slate-700 mb-1">VERIFIED GPS / MAP GRID REACHED</label>
          <input type="text" id="tr-submit-grid" value="${activeTask.targetGrid}" class="w-full text-xs bg-slate-50 border border-slate-300 rounded p-2 font-mono font-bold">
        </div>
      </div>
      <div>
        <label class="block text-[11px] font-bold text-slate-700 mb-1">OBSERVATIONAL REPORT & CHECKLIST NOTES</label>
        <textarea id="tr-submit-notes" rows="2.5" class="w-full text-xs bg-slate-50 border border-slate-300 rounded p-2" placeholder="e.g., Azimuth checkpoints 1 and 2 identified without detection. Gear operational."></textarea>
      </div>
      <button onclick="submitTraineeFieldSitrep()" class="w-full py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-lg shadow-sm flex items-center justify-center space-x-2 transition">
        <i data-lucide="check" class="w-4 h-4"></i>
        <span>Submit Verification SITREP to Directing Staff</span>
      </button>
    </div>
  `;
  lucide.createIcons();
}

function submitTraineeFieldSitrep() {
  const time = document.getElementById('tr-submit-time').value;
  const grid = document.getElementById('tr-submit-grid').value;
  const notes = document.getElementById('tr-submit-notes').value.trim() || 'Tactical waypoints successfully traversed. Zero white light violation.';
  const curr = ATMS_STATE.squad.members.find(m => m.id === ATMS_STATE.selectedTraineeId);
  const activeTask = ATMS_STATE.fieldTasks[0];

  activeTask.submissions.unshift({
    traineeName: `${curr.name} (${curr.serviceNo})`, timeLogged: `${time} mins`, grid: grid, notes: notes, status: 'Verified'
  });
  curr.fieldStatus = 'Verified';
  renderSquadRoster();
  renderFieldTasks();
  alert("Field SITREP submitted! Directing Staff console updated in real-time.");
}

function toggleArchModal(open) {
  const modal = document.getElementById('modal-architecture');
  if (open) modal.classList.remove('hidden');
  else modal.classList.add('hidden');
}

function previewOfficialReport() {
  const report = document.getElementById('printable-pdf-report');
  report.classList.remove('hidden');
  const printTbody = document.getElementById('print-roster-tbody');
  printTbody.innerHTML = '';
  ATMS_STATE.squad.members.forEach((m, idx) => {
    const tr = document.createElement('tr');
    tr.className = 'border-b border-slate-300';
    tr.innerHTML = `
      <td class="p-2 border-r border-slate-300">${idx + 1}</td>
      <td class="p-2 border-r border-slate-300 font-bold">${m.serviceNo} - ${m.name}</td>
      <td class="p-2 border-r border-slate-300">${m.role}</td>
      <td class="p-2 border-r border-slate-300 font-bold">${m.mcqScore}</td>
      <td class="p-2 border-r border-slate-300">${m.timeTaken}</td>
      <td class="p-2 border-r border-slate-300">${m.fieldStatus}</td>
      <td class="p-2 font-bold">${m.grade}</td>
    `;
    printTbody.appendChild(tr);
  });
  report.scrollIntoView({ behavior: 'smooth' });
}

function closeOfficialReportPreview() {
  document.getElementById('printable-pdf-report').classList.add('hidden');
}
