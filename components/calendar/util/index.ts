import { DateModels } from '../date/DataTypes';

export const mergeDateTime = (date?: Date, time?: Date) => {
  date = date || new Date();
  if (!time) {
    return date;
  }
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    time.getHours(),
    time.getMinutes(),
    time.getSeconds()
  );
};

export const formatDate = (date: Date, format: string, locale?: DateModels.Locale) => {
  const week = locale && locale.week;

  let o: { [key: string]: any } = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'q+': Math.floor((date.getMonth() + 3) / 3),
    'w+': week && week[date.getDay()],
    S: date.getMilliseconds()
  };
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
    }
  }
  return format;
};

export const isSameDate = (day_one: Date, day_two: Date) => {
  if (!day_one || !day_two) {
    console.error('isSameDate function need two params');
    return 'need two params';
  }
  const compareDate = day_one.getDate() === day_two.getDate();
  const compareMonth = day_one.getMonth() === day_two.getMonth();
  const compareYear = day_one.getFullYear() === day_two.getFullYear();

  return compareDate && compareMonth && compareYear;
};
