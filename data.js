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

// Generate all 6 games per group
function generateGroupGames(groupId) {
  const teams = GROUPS[groupId];
  const games = [];
  for (let i = 0; i < teams.length; i++) {
    for (let j = i + 1; j < teams.length; j++) {
      games.push({ id: `${groupId}_${teams[i]}_${teams[j]}`, group: groupId, home: teams[i], away: teams[j] });
    }
  }
  return games;
}

const GROUP_GAMES = {};
Object.keys(GROUPS).forEach(g => { GROUP_GAMES[g] = generateGroupGames(g); });
const ALL_GAMES = Object.values(GROUP_GAMES).flat();

// Knockout bracket structure
// R32: 16 matches. Slots: '1X' = group X winner, '2X' = runner-up, '3P_N' = Nth best 3rd-place
const R32 = [
  { id: 'R32_1',  home: '1A', away: '3P_1' },
  { id: 'R32_2',  home: '1B', away: '2A'   },
  { id: 'R32_3',  home: '1C', away: '3P_2' },
  { id: 'R32_4',  home: '1D', away: '2C'   },
  { id: 'R32_5',  home: '1E', away: '3P_3' },
  { id: 'R32_6',  home: '1F', away: '2E'   },
  { id: 'R32_7',  home: '2B', away: '3P_4' },
  { id: 'R32_8',  home: '2D', away: '2F'   },
  { id: 'R32_9',  home: '1G', away: '3P_5' },
  { id: 'R32_10', home: '1H', away: '2G'   },
  { id: 'R32_11', home: '1I', away: '3P_6' },
  { id: 'R32_12', home: '1J', away: '2I'   },
  { id: 'R32_13', home: '1K', away: '3P_7' },
  { id: 'R32_14', home: '1L', away: '2K'   },
  { id: 'R32_15', home: '2H', away: '3P_8' },
  { id: 'R32_16', home: '2J', away: '2L'   },
];

const R16 = [
  { id: 'R16_1', prev: ['R32_1',  'R32_2']  },
  { id: 'R16_2', prev: ['R32_3',  'R32_4']  },
  { id: 'R16_3', prev: ['R32_5',  'R32_6']  },
  { id: 'R16_4', prev: ['R32_7',  'R32_8']  },
  { id: 'R16_5', prev: ['R32_9',  'R32_10'] },
  { id: 'R16_6', prev: ['R32_11', 'R32_12'] },
  { id: 'R16_7', prev: ['R32_13', 'R32_14'] },
  { id: 'R16_8', prev: ['R32_15', 'R32_16'] },
];

const QF = [
  { id: 'QF_1', prev: ['R16_1', 'R16_2'] },
  { id: 'QF_2', prev: ['R16_3', 'R16_4'] },
  { id: 'QF_3', prev: ['R16_5', 'R16_6'] },
  { id: 'QF_4', prev: ['R16_7', 'R16_8'] },
];

const SF = [
  { id: 'SF_1', prev: ['QF_1', 'QF_2'] },
  { id: 'SF_2', prev: ['QF_3', 'QF_4'] },
];

const BRONZE = { id: 'BRONZE', prev: ['SF_1', 'SF_2'], loser: true };
const FINAL  = { id: 'FINAL',  prev: ['SF_1', 'SF_2'] };

const KNOCKOUT_ROUNDS = [
  { key: 'R32',    label: 'Runde av 32', matches: R32,    isGroup: true },
  { key: 'R16',    label: 'Runde av 16', matches: R16 },
  { key: 'QF',     label: 'Kvartfinale', matches: QF  },
  { key: 'SF',     label: 'Semifinale',  matches: SF  },
  { key: 'BRONZE', label: 'Bronsefinale', matches: [BRONZE] },
  { key: 'FINAL',  label: 'Finale',      matches: [FINAL]  },
];

// Calculate group standings from score predictions
function calcStandings(groupId, scores) {
  const teams = GROUPS[groupId];
  const s = {};
  teams.forEach(t => { s[t] = { pts: 0, gf: 0, ga: 0, gd: 0, played: 0 }; });
  GROUP_GAMES[groupId].forEach(game => {
    const sc = scores[game.id];
    if (!sc || sc.home === '' || sc.away === '') return;
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
    b.pts !== a.pts ? s[b].pts - s[a].pts :
    b.gd  !== a.gd  ? s[b].gd  - s[a].gd  :
                      s[b].gf  - s[a].gf
  ).map(t => ({ team: t, ...s[t] }));
}

// Resolve a bracket slot to a team code
function resolveSlot(slot, groupStandings, thirdPlace, picks) {
  if (!slot) return null;
  if (slot.startsWith('1')) return groupStandings[slot[1]]?.[0]?.team ?? null;
  if (slot.startsWith('2')) return groupStandings[slot[1]]?.[1]?.team ?? null;
  if (slot.startsWith('3P_')) {
    const idx = parseInt(slot.replace('3P_', '')) - 1;
    return thirdPlace?.[idx] ?? null;
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

  // Group game outcomes (1 pt each)
  ALL_GAMES.forEach(game => {
    const user = tipping.groupScores?.[game.id];
    const real = adminResults.groupScores?.[game.id];
    if (!user || !real) return;
    const uh = parseInt(user.home), ua = parseInt(user.away);
    const rh = parseInt(real.home), ra = parseInt(real.away);
    if (isNaN(uh)||isNaN(ua)||isNaN(rh)||isNaN(ra)) return;
    const uRes = uh > ua ? 'H' : uh < ua ? 'A' : 'D';
    const rRes = rh > ra ? 'H' : rh < ra ? 'A' : 'D';
    if (uRes === rRes) pts++;
  });

  // Group positions (1 pt each correct position, all 4 in each group)
  Object.keys(GROUPS).forEach(g => {
    const userStand = calcStandings(g, tipping.groupScores || {});
    const realStand = calcStandings(g, adminResults.groupScores || {});
    userStand.forEach((entry, idx) => {
      if (realStand[idx]?.team === entry.team) pts++;
    });
  });

  // Knockout – 2 pts per correctly predicted advancing team per round
  const rounds = ['R32', 'R16', 'QF', 'SF'];
  rounds.forEach(roundKey => {
    const matches = { R32, R16, QF, SF }[roundKey];
    matches.forEach(match => {
      const userPick = tipping.knockoutPicks?.[match.id];
      const realPick = adminResults.knockoutPicks?.[match.id];
      if (userPick && realPick && userPick === realPick) pts += 2;
    });
  });

  // Finalists (1 pt each correct finalist)
  const userFin1 = tipping.knockoutPicks?.['SF_1'];
  const userFin2 = tipping.knockoutPicks?.['SF_2'];
  const realFin1 = adminResults.knockoutPicks?.['SF_1'];
  const realFin2 = adminResults.knockoutPicks?.['SF_2'];
  const realFinalists = [realFin1, realFin2].filter(Boolean);
  [userFin1, userFin2].forEach(t => { if (t && realFinalists.includes(t)) pts++; });

  // Bronze (1 pt)
  if (tipping.knockoutPicks?.['BRONZE'] && tipping.knockoutPicks['BRONZE'] === adminResults.knockoutPicks?.['BRONZE']) pts++;

  // Champion (2 pts)
  if (tipping.knockoutPicks?.['FINAL'] && tipping.knockoutPicks['FINAL'] === adminResults.knockoutPicks?.['FINAL']) pts += 2;

  // Top scorer (2 pts)
  if (tipping.topScorer && adminResults.topScorer &&
      tipping.topScorer.trim().toLowerCase() === adminResults.topScorer.trim().toLowerCase()) pts += 2;

  // Top assist (2 pts)
  if (tipping.topAssist && adminResults.topAssist &&
      tipping.topAssist.trim().toLowerCase() === adminResults.topAssist.trim().toLowerCase()) pts += 2;

  return pts;
}
