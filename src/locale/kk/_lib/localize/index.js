"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(
  require("../../../_lib/buildLocalizeFn/index.js")
);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var eraValues = {
  narrow: ["б.з.д.", "б.з."],
  abbreviated: ["б.з.д.", "б.з."],
  wide: ["біздің заманымызға дейін", "біздің заманымыз"]
};
var quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["1-ші тоқ.", "2-ші тоқ.", "3-ші тоқ.", "4-ші тоқ."],
  wide: ["1-ші тоқсан", "2-ші тоқсан", "3-ші тоқсан", "4-ші тоқсан"]
};
var monthValues = {
  narrow: "қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"),
  abbreviated: "қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"),
  wide: "қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split(
    "_"
  )
};
var dayValues = {
  narrow: "жк_дй_сй_ср_бй_жм_сн".split("_"),
  abbreviated: "жк_дй_сй_ср_бй_жм_сн".split("_"),
  wide: "жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_")
};
var dayPeriodValues = {
  wide: {
    am: "ТД",
    pm: "ТК",
    midnight: "түн ортасы",
    noon: "түс",
    morning: "таң",
    afternoon: "күндіз",
    evening: "кеш",
    night: "түн"
  }
};
var formattingDayPeriodValues = {
  wide: {
    am: "т.д.",
    pm: "т.к.",
    midnight: "түн ортасында",
    noon: "түсте",
    morning: "таңертең",
    afternoon: "күндіз",
    evening: "кеште",
    night: "түнде"
  }
};

function ordinalNumber(dirtyNumber, _dirtyOptions) {
  var number = Number(dirtyNumber);
  var lastDigit = number % 10;
  var lastThreeDigits = number % 1000;
  var suffix;
  switch (true) {
    case lastDigit === 1:
    case lastDigit === 2:
    case lastDigit === 3:
    case lastDigit === 4:
    case lastDigit === 5:
    case lastDigit === 7:
    case lastDigit === 8:
    case number === 0:
    case number === 50:
    case number === 70:
    case number === 80:
    case lastThreeDigits % 100 === 0 && lastThreeDigits / 100 < 10:
      suffix = "-ші";
      break;
    default:
      suffix = "-шы";
      break;
  }
  return number + suffix;
}

var localize = {
  ordinalNumber: ordinalNumber,
  era: (0, _index.default)({
    values: eraValues,
    defaultWidth: "wide"
  }),
  quarter: (0, _index.default)({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: function(quarter) {
      return Number(quarter) - 1;
    }
  }),
  month: (0, _index.default)({
    values: monthValues,
    defaultWidth: "wide"
  }),
  day: (0, _index.default)({
    values: dayValues,
    defaultWidth: "wide"
  }),
  dayPeriod: (0, _index.default)({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide"
  })
};
var _default = localize;
exports.default = _default;
module.exports = exports.default;
