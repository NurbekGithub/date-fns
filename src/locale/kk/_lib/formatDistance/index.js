"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatDistance;
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: "1 секундтан аз",
    other: "{{count}} секундтан аз"
  },
  xSeconds: {
    one: "1 секунд",
    other: "{{count}} секунд"
  },
  halfAMinute: "жарты минут",
  lessThanXMinutes: {
    one: "1 минуттан аз",
    other: "{{count}} минуттан аз"
  },
  xMinutes: {
    one: "1 минут",
    other: "{{count}} минут"
  },
  aboutXHours: {
    one: "шамамен 1 сағат",
    other: "шамамен {{count}} сағат"
  },
  xHours: {
    one: "1 сағат",
    other: "{{count}} сағат"
  },
  xDays: {
    one: "1 күн",
    other: "{{count}} күн"
  },
  aboutXMonths: {
    one: "шамамен 1 ай",
    other: "шамамен {{count}} ай"
  },
  xMonths: {
    one: "1 ай",
    other: "{{count}} ай"
  },
  aboutXYears: {
    one: "шамамен 1 жыл",
    other: "шамамен {{count}} жыл"
  },
  xYears: {
    one: "1 жыл",
    other: "{{count}} жыл"
  },
  overXYears: {
    one: "1 жылдан астам",
    other: "{{count}} жылдан астам"
  },
  almostXYears: {
    one: "1 жылға жақын",
    other: "{{count}} жылға жақын"
  }
};

function formatDistance(token, count, options) {
  options = options || {};
  var result;

  if (typeof formatDistanceLocale[token] === "string") {
    result = formatDistanceLocale[token];
  } else if (count === 1) {
    result = formatDistanceLocale[token].one;
  } else {
    result = formatDistanceLocale[token].other.replace("{{count}}", count);
  }

  if (options.addSuffix) {
    if (options.comparison > 0) {
      return result + " кейін";
    } else {
      return result + " бұрын";
    }
  }

  return result;
}

module.exports = exports.default;
