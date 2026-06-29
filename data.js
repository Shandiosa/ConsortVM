// VM 2026 – Statiske data
const TEAMS = {
  MEX: { name: 'Mexico', flag: '🇲🇽', group: 'A' },
  RSA: { name: 'Sør-Afrika', flag: '🇿🇦', group: 'A' },
  KOR: { name: 'Sør-Korea', flag: '🇰🇷', group: 'A' },
  CZE: { name: 'Tsjekkia', flag: '🇨🇿', group: 'A' },
  CAN: { name: 'Canada', flag: '🇨🇦', group: 'B' },
  BIH: { name: 'Bosnia-Hercegovina', flag: '🇧🇦', group: 'B' },
  QAT: { name: 'Qatar', flag: '🇶🇦', group: 'B' },
  SUI: { name: 'Sveits', flag: '🇨🇭', group: 'B' },
  BRA: { name: 'Brasil', flag: '🇧🇷', group: 'C' },
  MAR: { name: 'Marokko', flag: '🇲🇦', group: 'C' },
  HAI: { name: 'Haiti', flag: '🇭🇹', group: 'C' },
  SCO: { name: 'Skottland', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', group: 'C' },
  USA: { name: 'USA', flag: '🇺🇸', group: 'D' },
  PAR: { name: 'Paraguay', flag: '🇵🇾', group: 'D' },
  AUS: { name: 'Australia', flag: '🇦🇺', group: 'D' },
  TUR: { name: 'Tyrkia', flag: '🇹🇷', group: 'D' },
  GER: { name: 'Tyskland', flag: '🇩🇪', group: 'E' },
  CUW: { name: 'Curaçao', flag: '🇨🇼', group: 'E' },
  CIV: { name: 'Elfenbenskysten', flag: '🇨🇮', group: 'E' },
  ECU: { name: 'Ecuador', flag: '🇪🇨', group: 'E' },
  NED: { name: 'Nederland', flag: '🇳🇱', group: 'F' },
  JPN: { name: 'Japan', flag: '🇯🇵', group: 'F' },
  SWE: { name: 'Sverige', flag: '🇸🇪', group: 'F' },
  TUN: { name: 'Tunisia', flag: '🇹🇳', group: 'F' },
  BEL: { name: 'Belgia', flag: '🇧🇪', group: 'G' },
  EGY: { name: 'Egypt', flag: '🇪🇬', group: 'G' },
  IRN: { name: 'Iran', flag: '🇮🇷', group: 'G' },
  NZL: { name: 'New Zealand', flag: '🇳🇿', group: 'G' },
  ESP: { name: 'Spania', flag: '🇪🇸', group: 'H' },
  CPV: { name: 'Kapp Verde', flag: '🇨🇻', group: 'H' },
  KSA: { name: 'Saudi-Arabia', flag: '🇸🇦', group: 'H' },
  URU: { name: 'Uruguay', flag: '🇺🇾', group: 'H' },
  FRA: { name: 'Frankrike', flag: '🇫🇷', group: 'I' },
  SEN: { name: 'Senegal', flag: '🇸🇳', group: 'I' },
  NOR: { name: 'Norge', flag: '🇳🇴', group: 'I' },
  IRQ: { name: 'Irak', flag: '🇮🇶', group: 'I' },
  ARG: { name: 'Argentina', flag: '🇦🇷', group: 'J' },
  ALG: { name: 'Algerie', flag: '🇩🇿', group: 'J' },
  AUT: { name: 'Østerrike', flag: '🇦🇹', group: 'J' },
  JOR: { name: 'Jordan', flag: '🇯🇴', group: 'J' },
  POR: { name: 'Portugal', flag: '🇵🇹', group: 'K' },
  COD: { name: 'DR Kongo', flag: '🇨🇩', group: 'K' },
  UZB: { name: 'Usbekistan', flag: '🇺🇿', group: 'K' },
  COL: { name: 'Colombia', flag: '🇨🇴', group: 'K' },
  ENG: { name: 'England', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', group: 'L' },
  CRO: { name: 'Kroatia', flag: '🇭🇷', group: 'L' },
  GHA: { name: 'Ghana', flag: '🇬🇭', group: 'L' },
  PAN: { name: 'Panama', flag: '🇵🇦', group: 'L' },
};

const GROUPS = {
  A: ['MEX', 'RSA', 'KOR', 'CZE'],
  B: ['CAN', 'BIH', 'QAT', 'SUI'],
  C: ['BRA', 'MAR', 'HAI', 'SCO'],
  D: ['USA', 'PAR', 'AUS', 'TUR'],
  E: ['GER', 'CUW', 'CIV', 'ECU'],
  F: ['NED', 'JPN', 'SWE', 'TUN'],
  G: ['BEL', 'EGY', 'IRN', 'NZL'],
  H: ['ESP', 'CPV', 'KSA', 'URU'],
  I: ['FRA', 'SEN', 'NOR', 'IRQ'],
  J: ['ARG', 'ALG', 'AUT', 'JOR'],
  K: ['POR', 'COD', 'UZB', 'COL'],
  L: ['ENG', 'CRO', 'GHA', 'PAN'],
};

// Official group-stage match order — chronological by UTC kick-off (M1–M72).
// Source: FIFA / Al Jazeera full schedule (June 11–27 / 28 2026).
const GAME_MATCH_NUMS = {
  'A_MEX_RSA':1, 'A_KOR_CZE':2,
  'B_CAN_BIH':3, 'D_USA_PAR':4,
  'B_QAT_SUI':5, 'C_BRA_MAR':6, 'C_HAI_SCO':7, 'D_AUS_TUR':8,
  'E_GER_CUW':9, 'F_NED_JPN':10, 'E_CIV_ECU':11, 'F_SWE_TUN':12,
  'H_ESP_CPV':13, 'G_BEL_EGY':14, 'H_KSA_URU':15, 'G_IRN_NZL':16,
  'I_FRA_SEN':17, 'I_NOR_IRQ':18, 'J_ARG_ALG':19, 'J_AUT_JOR':20,
  'K_POR_COD':21, 'L_ENG_CRO':22, 'L_GHA_PAN':23, 'K_UZB_COL':24,
  'A_RSA_CZE':25, 'B_BIH_SUI':26, 'B_CAN_QAT':27, 'A_MEX_KOR':28,
  'D_USA_AUS':29, 'C_MAR_SCO':30, 'C_BRA_HAI':31, 'D_PAR_TUR':32,
  'F_NED_SWE':33, 'E_GER_CIV':34, 'E_CUW_ECU':35, 'F_JPN_TUN':36,
  'H_ESP_KSA':37, 'G_BEL_IRN':38, 'H_CPV_URU':39, 'G_EGY_NZL':40,
  'J_ARG_AUT':41, 'I_FRA_IRQ':42, 'I_SEN_NOR':43, 'J_ALG_JOR':44,
  'K_POR_UZB':45, 'L_ENG_GHA':46, 'L_CRO_PAN':47, 'K_COD_COL':48,
  'B_CAN_SUI':49, 'B_BIH_QAT':50, 'C_BRA_SCO':51, 'C_MAR_HAI':52,
  'A_MEX_CZE':53, 'A_RSA_KOR':54,
  'E_GER_ECU':55, 'E_CUW_CIV':56, 'F_JPN_SWE':57, 'F_NED_TUN':58,
  'D_USA_TUR':59, 'D_PAR_AUS':60,
  'I_FRA_NOR':61, 'I_SEN_IRQ':62,
  'H_CPV_KSA':63, 'H_ESP_URU':64, 'G_EGY_IRN':65, 'G_BEL_NZL':66,
  'L_ENG_PAN':67, 'L_CRO_GHA':68, 'K_POR_COL':69, 'K_COD_UZB':70,
  'J_ALG_AUT':71, 'J_ARG_JOR':72,
};

// Short Norwegian date label per game (UTC kick-off date)
const GAME_DATE_LABELS = {
  'A_MEX_RSA':'11. jun','A_KOR_CZE':'12. jun',
  'B_CAN_BIH':'12. jun','D_USA_PAR':'13. jun',
  'B_QAT_SUI':'13. jun','C_BRA_MAR':'13. jun','C_HAI_SCO':'14. jun','D_AUS_TUR':'14. jun',
  'E_GER_CUW':'14. jun','F_NED_JPN':'14. jun','E_CIV_ECU':'14. jun','F_SWE_TUN':'15. jun',
  'H_ESP_CPV':'15. jun','G_BEL_EGY':'15. jun','H_KSA_URU':'15. jun','G_IRN_NZL':'16. jun',
  'I_FRA_SEN':'16. jun','I_NOR_IRQ':'16. jun','J_ARG_ALG':'17. jun','J_AUT_JOR':'17. jun',
  'K_POR_COD':'17. jun','L_ENG_CRO':'17. jun','L_GHA_PAN':'17. jun','K_UZB_COL':'18. jun',
  'A_RSA_CZE':'18. jun','B_BIH_SUI':'18. jun','B_CAN_QAT':'18. jun','A_MEX_KOR':'19. jun',
  'D_USA_AUS':'19. jun','C_MAR_SCO':'19. jun','C_BRA_HAI':'20. jun','D_PAR_TUR':'20. jun',
  'F_NED_SWE':'20. jun','E_GER_CIV':'20. jun','E_CUW_ECU':'21. jun','F_JPN_TUN':'21. jun',
  'H_ESP_KSA':'21. jun','G_BEL_IRN':'21. jun','H_CPV_URU':'21. jun','G_EGY_NZL':'22. jun',
  'J_ARG_AUT':'22. jun','I_FRA_IRQ':'22. jun','I_SEN_NOR':'23. jun','J_ALG_JOR':'23. jun',
  'K_POR_UZB':'23. jun','L_ENG_GHA':'23. jun','L_CRO_PAN':'23. jun','K_COD_COL':'24. jun',
  'B_CAN_SUI':'24. jun','B_BIH_QAT':'24. jun','C_BRA_SCO':'24. jun','C_MAR_HAI':'24. jun',
  'A_MEX_CZE':'25. jun','A_RSA_KOR':'25. jun',
  'E_GER_ECU':'25. jun','E_CUW_CIV':'25. jun','F_JPN_SWE':'25. jun','F_NED_TUN':'25. jun',
  'D_USA_TUR':'26. jun','D_PAR_AUS':'26. jun',
  'I_FRA_NOR':'26. jun','I_SEN_IRQ':'26. jun',
  'H_CPV_KSA':'27. jun','H_ESP_URU':'27. jun','G_EGY_IRN':'27. jun','G_BEL_NZL':'27. jun',
  'L_ENG_PAN':'27. jun','L_CRO_GHA':'27. jun','K_POR_COL':'27. jun','K_COD_UZB':'27. jun',
  'J_ALG_AUT':'28. jun','J_ARG_JOR':'28. jun',
};

// Generate all 6 games per group, tagged with official match number and date
function generateGroupGames(groupId) {
  const teams = GROUPS[groupId];
  const games = [];
  for (let i = 0; i < teams.length; i++) {
    for (let j = i + 1; j < teams.length; j++) {
      const id = `${groupId}_${teams[i]}_${teams[j]}`;
      games.push({
        id,
        group: groupId,
        home: teams[i],
        away: teams[j],
        matchNum: GAME_MATCH_NUMS[id] || 999,
        dateLabel: GAME_DATE_LABELS[id] || '',
      });
    }
  }
  games.sort((a, b) => a.matchNum - b.matchNum);
  return games;
}

const GROUP_GAMES = {};
Object.keys(GROUPS).forEach(g => { GROUP_GAMES[g] = generateGroupGames(g); });
const ALL_GAMES = Object.values(GROUP_GAMES).flat().sort((a, b) => a.matchNum - b.matchNum);

// Knockout bracket structure — OFFICIAL FIFA World Cup 2026 layout (matches M73–M104).
// Slots: '1X' = group X winner, '2X' = group X runner-up, 'T_<matchId>' = best-third slot
// whose eligible groups are defined in THIRD_SLOT_ORDER below (FIFA Annex C clusters).
const R32 = [
  { id: 'R32_1',  num: 73, home: '2A', away: '2B'       },
  { id: 'R32_2',  num: 74, home: '1E', away: 'T_R32_2'  }, // 3rd: A/B/C/D/F
  { id: 'R32_3',  num: 75, home: '1F', away: '2C'       },
  { id: 'R32_4',  num: 76, home: '1C', away: '2F'       },
  { id: 'R32_5',  num: 77, home: '1I', away: 'T_R32_5'  }, // 3rd: C/D/F/G/H
  { id: 'R32_6',  num: 78, home: '2E', away: '2I'       },
  { id: 'R32_7',  num: 79, home: '1A', away: 'T_R32_7'  }, // 3rd: C/E/F/H/I
  { id: 'R32_8',  num: 80, home: '1L', away: 'T_R32_8'  }, // 3rd: E/H/I/J/K
  { id: 'R32_9',  num: 81, home: '1D', away: 'T_R32_9'  }, // 3rd: B/E/F/I/J
  { id: 'R32_10', num: 82, home: '1G', away: 'T_R32_10' }, // 3rd: A/E/H/I/J
  { id: 'R32_11', num: 83, home: '2K', away: '2L'       },
  { id: 'R32_12', num: 84, home: '1H', away: '2J'       },
  { id: 'R32_13', num: 85, home: '1B', away: 'T_R32_13' }, // 3rd: E/F/G/I/J
  { id: 'R32_14', num: 86, home: '1J', away: '2H'       },
  { id: 'R32_15', num: 87, home: '1K', away: 'T_R32_15' }, // 3rd: D/E/I/J/L
  { id: 'R32_16', num: 88, home: '2D', away: '2G'       },
];

// The 8 best-third slots, with the groups each slot may draw from (FIFA official).
// Order matters for the assignment tie-break (alphabetical, as FIFA publishes).
const THIRD_SLOT_ORDER = [
  { match: 'R32_2',  groups: ['A', 'B', 'C', 'D', 'F'] },
  { match: 'R32_5',  groups: ['C', 'D', 'F', 'G', 'H'] },
  { match: 'R32_7',  groups: ['C', 'E', 'F', 'H', 'I'] },
  { match: 'R32_8',  groups: ['E', 'H', 'I', 'J', 'K'] },
  { match: 'R32_9',  groups: ['B', 'E', 'F', 'I', 'J'] },
  { match: 'R32_10', groups: ['A', 'E', 'H', 'I', 'J'] },
  { match: 'R32_13', groups: ['E', 'F', 'G', 'I', 'J'] },
  { match: 'R32_15', groups: ['D', 'E', 'I', 'J', 'L'] },
];

const R16 = [
  { id: 'R16_1', num: 89, prev: ['R32_2',  'R32_5']  }, // W74 v W77
  { id: 'R16_2', num: 90, prev: ['R32_1',  'R32_3']  }, // W73 v W75
  { id: 'R16_3', num: 91, prev: ['R32_4',  'R32_6']  }, // W76 v W78
  { id: 'R16_4', num: 92, prev: ['R32_7',  'R32_8']  }, // W79 v W80
  { id: 'R16_5', num: 93, prev: ['R32_11', 'R32_12'] }, // W83 v W84
  { id: 'R16_6', num: 94, prev: ['R32_9',  'R32_10'] }, // W81 v W82
  { id: 'R16_7', num: 95, prev: ['R32_14', 'R32_16'] }, // W86 v W88
  { id: 'R16_8', num: 96, prev: ['R32_13', 'R32_15'] }, // W85 v W87
];

const QF = [
  { id: 'QF_1', num: 97,  prev: ['R16_1', 'R16_2'] }, // W89 v W90
  { id: 'QF_2', num: 98,  prev: ['R16_5', 'R16_6'] }, // W93 v W94
  { id: 'QF_3', num: 99,  prev: ['R16_3', 'R16_4'] }, // W91 v W92
  { id: 'QF_4', num: 100, prev: ['R16_7', 'R16_8'] }, // W95 v W96
];

const SF = [
  { id: 'SF_1', num: 101, prev: ['QF_1', 'QF_2'] }, // W97 v W98
  { id: 'SF_2', num: 102, prev: ['QF_3', 'QF_4'] }, // W99 v W100
];

const BRONZE = { id: 'BRONZE', num: 103, prev: ['SF_1', 'SF_2'], loser: true };
const FINAL  = { id: 'FINAL',  num: 104, prev: ['SF_1', 'SF_2'] };

const KNOCKOUT_ROUNDS = [
  { key: 'R32',    label: 'Runde av 32', matches: R32,    isGroup: true },
  { key: 'R16',    label: 'Runde av 16', matches: R16 },
  { key: 'QF',     label: 'Kvartfinale', matches: QF  },
  { key: 'SF',     label: 'Semifinale',  matches: SF  },
  { key: 'BRONZE', label: 'Bronsefinale', matches: [BRONZE] },
  { key: 'FINAL',  label: 'Finale',      matches: [FINAL]  },
];

// Calculate group standings from score predictions
// For admin scores: skip games where played===false (unpublished)
// For user predictions: no played field, all count
function calcStandings(groupId, scores) {
  const teams = GROUPS[groupId];
  const s = {};
  teams.forEach(t => { s[t] = { pts: 0, gf: 0, ga: 0, gd: 0, played: 0 }; });
  GROUP_GAMES[groupId].forEach(game => {
    const sc = scores[game.id];
    if (!sc || sc.home === '' || sc.away === '') return;
    if (sc.played === false) return; // unpublished admin game - skip
    const h = parseInt(sc.home), a = parseInt(sc.away);
    if (isNaN(h) || isNaN(a)) return;
    s[game.home].played++; s[game.away].played++;
    s[game.home].gf += h; s[game.home].ga += a; s[game.home].gd += h - a;
    s[game.away].gf += a; s[game.away].ga += h; s[game.away].gd += a - h;
    if (h > a)      { s[game.home].pts += 3; }
    else if (h < a) { s[game.away].pts += 3; }
    else            { s[game.home].pts += 1; s[game.away].pts += 1; }
  });
  return [...teams].sort((a, b) =>
    s[b].pts !== s[a].pts ? s[b].pts - s[a].pts :
    s[b].gd  !== s[a].gd  ? s[b].gd  - s[a].gd  :
                            s[b].gf  - s[a].gf
  ).map(t => ({ team: t, ...s[t] }));
}

// Helpers: which admin games are published?
function isGamePlayed(adminGroupScores, gameId) {
  const sc = adminGroupScores?.[gameId];
  return !!(sc && sc.played === true);
}

function isGroupComplete(adminGroupScores, groupId) {
  return GROUP_GAMES[groupId].every(g => isGamePlayed(adminGroupScores, g.id));
}

// FIFA's OFFICIAL assignment of the 8 best third-placed teams to R32 slots
// (Annex C). The 2026 knockout bracket is fixed — no redraws — so once the set
// of groups that produced a qualifying third-placed team is known, the slot each
// third occupies is fully determined. Keyed by the sorted list of those groups.
// Real tournament set {B,D,E,F,I,J,K,L} → checkpoint: 1I (France) meets 3F (Sweden) in R32_5.
const THIRD_ASSIGNMENT_TABLE = {
  'B,D,E,F,I,J,K,L': { R32_2:'D', R32_5:'F', R32_7:'E', R32_8:'K', R32_9:'B', R32_10:'I', R32_13:'J', R32_15:'L' },
};

// Assign the 8 qualifying third-placed teams to their R32 slots.
// Uses FIFA's official table when the qualifying-group set is known; otherwise
// falls back to bipartite matching against the eligible-group clusters
// (THIRD_SLOT_ORDER) so a complete, valid assignment is still produced.
// Returns a map { matchId: groupLetter }.
function assignThirdSlots(thirdPlace) {
  const qualGroups = (thirdPlace || []).map(c => TEAMS[c]?.group).filter(Boolean);
  const key = [...qualGroups].sort().join(',');
  if (THIRD_ASSIGNMENT_TABLE[key]) return { ...THIRD_ASSIGNMENT_TABLE[key] };

  const slots = THIRD_SLOT_ORDER;
  const groupToSlot = {}; // groupLetter -> slot index currently holding it

  function augment(slotIdx, visited) {
    for (const g of slots[slotIdx].groups) {
      if (!qualGroups.includes(g) || visited.has(g)) continue;
      visited.add(g);
      if (groupToSlot[g] === undefined || augment(groupToSlot[g], visited)) {
        groupToSlot[g] = slotIdx;
        return true;
      }
    }
    return false;
  }
  for (let i = 0; i < slots.length; i++) augment(i, new Set());

  const result = {};
  for (const g in groupToSlot) result[slots[groupToSlot[g]].match] = g;
  return result;
}

// Resolve a bracket slot to a team code
function resolveSlot(slot, groupStandings, thirdPlace, picks) {
  if (!slot) return null;
  if (slot[0] === '1') return groupStandings[slot[1]]?.[0]?.team ?? null;
  if (slot[0] === '2') return groupStandings[slot[1]]?.[1]?.team ?? null;
  if (slot.startsWith('T_')) {
    const matchId = slot.slice(2);
    const assignment = assignThirdSlots(thirdPlace); // { matchId: groupLetter }
    const grp = assignment[matchId];
    if (!grp) return null;
    return (thirdPlace || []).find(c => TEAMS[c]?.group === grp) ?? null;
  }
  return null;
}

function resolveMatchTeams(match, groupStandings, thirdPlace, picks) {
  if (match.prev) {
    const [pa, pb] = match.prev;
    const loser = match.loser;
    if (loser) {
      // Bronze: losers of SF
      const sfA = SF.find(m => m.id === pa), sfB = SF.find(m => m.id === pb);
      const winA = picks[pa], winB = picks[pb];
      const teamA = winA ? (resolveMatchTeamsPair(sfA, groupStandings, thirdPlace, picks).filter(t => t !== winA)[0] ?? null) : null;
      const teamB = winB ? (resolveMatchTeamsPair(sfB, groupStandings, thirdPlace, picks).filter(t => t !== winB)[0] ?? null) : null;
      return [teamA, teamB];
    }
    return [picks[pa] ?? null, picks[pb] ?? null];
  }
  const home = resolveSlot(match.home, groupStandings, thirdPlace, picks);
  const away = resolveSlot(match.away, groupStandings, thirdPlace, picks);
  return [home, away];
}

function resolveMatchTeamsPair(match, groupStandings, thirdPlace, picks) {
  if (!match) return [null, null];
  if (match.prev) return [picks[match.prev[0]] ?? null, picks[match.prev[1]] ?? null];
  return [
    resolveSlot(match.home, groupStandings, thirdPlace, picks),
    resolveSlot(match.away, groupStandings, thirdPlace, picks),
  ];
}

const TIPPING_DEADLINE = new Date('2026-06-10T16:00:00');

// Scoring
function calcScore(tipping, adminResults) {
  let pts = 0;
  if (!adminResults) return 0;
  const adminScores = adminResults.groupScores || {};
  const adminKO = adminResults.knockoutResults || adminResults.knockoutPicks || {};

  // Group game outcomes (1 pt each) - only published games
  ALL_GAMES.forEach(game => {
    if (!isGamePlayed(adminScores, game.id)) return;
    const user = tipping.groupScores?.[game.id];
    const real = adminScores[game.id];
    if (!user || !real) return;
    const uh = parseInt(user.home), ua = parseInt(user.away);
    const rh = parseInt(real.home), ra = parseInt(real.away);
    if (isNaN(uh)||isNaN(ua)||isNaN(rh)||isNaN(ra)) return;
    const uRes = uh > ua ? 'H' : uh < ua ? 'A' : 'D';
    const rRes = rh > ra ? 'H' : rh < ra ? 'A' : 'D';
    if (uRes === rRes) pts++;
  });

  // Group positions (1 pt per correct position) – only when ALL 6 games in a group are played
  Object.keys(GROUPS).forEach(g => {
    if (!isGroupComplete(adminScores, g)) return;
    const userStand = calcStandings(g, tipping.groupScores || {});
    const realStand = calcStandings(g, adminScores);
    userStand.forEach((entry, idx) => {
      if (realStand[idx]?.team === entry.team) pts++;
    });
  });

  // Knockout – 2 pts per correctly predicted advancing team, per round.
  // PAIRING-INDEPENDENT: compares the SET of teams the user advanced each round
  // against the set that really advanced. This keeps every already-submitted
  // bracket valid even though the official R32 pairings differ from the ones a
  // tipper navigated — what counts is whether the teams they sent through are right.
  const rounds = ['R32', 'R16', 'QF', 'SF'];
  rounds.forEach(roundKey => {
    const matches = { R32, R16, QF, SF }[roundKey];
    const realAdvanced = new Set(matches.map(m => adminKO[m.id]).filter(Boolean));
    const counted = new Set();
    matches.forEach(match => {
      const t = tipping.knockoutPicks?.[match.id];
      if (t && realAdvanced.has(t) && !counted.has(t)) { counted.add(t); pts += 2; }
    });
  });

  // Finalists (1 pt each correct finalist)
  const userFin1 = tipping.knockoutPicks?.['SF_1'];
  const userFin2 = tipping.knockoutPicks?.['SF_2'];
  const realFin1 = adminKO['SF_1'];
  const realFin2 = adminKO['SF_2'];
  const realFinalists = [realFin1, realFin2].filter(Boolean);
  [userFin1, userFin2].forEach(t => { if (t && realFinalists.includes(t)) pts++; });

  // Bronze (1 pt)
  if (tipping.knockoutPicks?.['BRONZE'] && tipping.knockoutPicks['BRONZE'] === adminKO['BRONZE']) pts++;

  // Champion (5 pts)
  if (tipping.knockoutPicks?.['FINAL'] && tipping.knockoutPicks['FINAL'] === adminKO['FINAL']) pts += 5;

  // Top scorer (4 pts)
  if (tipping.topScorer && adminResults.topScorer &&
      tipping.topScorer.trim().toLowerCase() === adminResults.topScorer.trim().toLowerCase()) pts += 4;

  // Top assist (3 pts)
  if (tipping.topAssist && adminResults.topAssist &&
      tipping.topAssist.trim().toLowerCase() === adminResults.topAssist.trim().toLowerCase()) pts += 3;

  return pts;
}
