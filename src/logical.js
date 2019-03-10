exports.not = (signal) =>
  (0 === signal) ? 1 : 0;

exports.and = (signal1, signal2) =>
  (1 === signal1 && 1 === signal2) ? 1 : 0;

exports.or = (signal1, signal2) =>
  (0 === signal1 && 0 === signal2) ? 0 : 1;