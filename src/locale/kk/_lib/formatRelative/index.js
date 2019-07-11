"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatRelative;
var formatRelativeLocale = {
  lastWeek: "'соңғы' eeee 'сағат' p",
  yesterday: "'кеше сағат' p",
  today: "'бүгін сағат' p",
  tomorrow: "'ертең сағат' p",
  nextWeek: "'келесі' eeee 'сағат' p",
  other: "P"
};

function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
}

module.exports = exports.default;
