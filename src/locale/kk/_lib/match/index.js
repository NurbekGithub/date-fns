"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(
  require("../../../_lib/buildMatchPatternFn/index.js")
);

var _index2 = _interopRequireDefault(
  require("../../../_lib/buildMatchFn/index.js")
);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var matchOrdinalNumberPattern = /^(\d+)(ші|шы)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(?б\.?\s?з\.?\s?д\.?)/i,
  abbreviated: /^(?б\.?\s?з\.?\s?д\.?)/i,
  wide: /^(біздің заманымызға дейін|біздің заманымыз|біздің заманымыздан)/i
};
var parseEraPatterns = {
  any: [/^б/i, /^з/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^[1234](-?ші)? тоқ.?/i,
  wide: /^[1234](-?ші)? тоқсан/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^(қаң|ақп|нау|сәу|мам|мау|шіл|там|қыр|қаз|қар|жел)/i,
  abbreviated: /^(қаң|ақп|нау|сәу|мам|мау|шіл|там|қыр|қаз|қар|жел)/i,
  wide: /^(қаңтар|ақпан|наурыз|сәуір|мамыр|маусым|шілде|тамыз|қыркүйек|қазан|қараша|желтоқсан)/i
};
var parseMonthPatterns = {
  narrow: [
    /^қаң/i,
    /^ақп/i,
    /^нау/i,
    /^сәу/i,
    /^мам/i,
    /^мау/i,
    /^шіл/i,
    /^там/i,
    /^қыр/i,
    /^қаз/i,
    /^қар/i,
    /^жел/i
  ],
  any: [
    /^қаң/i,
    /^ақп/i,
    /^нау/i,
    /^сәу/i,
    /^мам/i,
    /^мау/i,
    /^шіл/i,
    /^там/i,
    /^қыр/i,
    /^қаз/i,
    /^қар/i,
    /^жел/i
  ]
};
var matchDayPatterns = {
  narrow: /^(жк|дй|сй|ср|бй|жм|сн)/i,
  short: /^(жк|дй|сй|ср|бй|жм|сн)/i,
  abbreviated: /^(жк|дй|сй|ср|бй|жм|сн)/i,
  wide: /^(жексенбі|дүйсенбі|сейсенбі|сәрсенбі|бейсенбі|жұма|сенбі)/i
};
var parseDayPatterns = {
  narrow: [/^жк/i, /^дй/i, /^сй/i, /^ср/i, /^бй/i, /^жм/i, /^сн/i],
  any: [/^жк/i, /^дй/i, /^сй/i, /^ср/i, /^бй/i, /^жм/i, /^сн/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(Т\.?\s?[ДК]\.?|түн ортасында|түсте| (таң|таңда|таңертең|таңмен|күндіз|кеш|кеште|түн|түнде))/i,
  any: /^(Т\.?\s?[ДК]\.?|түн ортасында|түсте| (таң|таңда|таңертең|таңмен|күндіз|кеш|кеште|түн|түнде))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^ТД/i,
    pm: /^ТК/i,
    midnight: /^түн орта/i,
    noon: /^күндіз/i,
    morning: /таң/i,
    afternoon: /түс/i,
    evening: /кеш/i,
    night: /түн/i
  }
};
var match = {
  ordinalNumber: (0, _index.default)({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function(value) {
      return parseInt(value, 10);
    }
  }),
  era: (0, _index2.default)({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any"
  }),
  quarter: (0, _index2.default)({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: function(index) {
      return index + 1;
    }
  }),
  month: (0, _index2.default)({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any"
  }),
  day: (0, _index2.default)({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any"
  }),
  dayPeriod: (0, _index2.default)({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any"
  })
};
var _default = match;
exports.default = _default;
module.exports = exports.default;
