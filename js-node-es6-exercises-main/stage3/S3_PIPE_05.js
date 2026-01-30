// S3_PIPE_05.js
const parseLog = line => {
  const [level, rest] = line.split(": ");
  const userMatch = rest.match(/user=(\d+)/);
  return { level: level.trim(), userId: userMatch ? userMatch[1] : null };
};

const isInfo = log => log.level === "INFO";
const getUserId = log => log.userId;

const getInfoUserIds = pipe(
  lines => lines.map(parseLog),
  logs => logs.filter(isInfo),
  logs => logs.map(getUserId).filter(Boolean)
);

const logs = [
  "INFO: user=42 action=login",
  "ERROR: something bad",
  "INFO: user=17 action=logout",
  "DEBUG: user=99",
  "INFO: user=8 action=update"
];

console.log(getInfoUserIds(logs));   // ["42", "17", "8"]
