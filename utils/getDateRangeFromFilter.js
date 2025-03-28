import { subDays, subMonths, startOfDay, endOfDay } from 'date-fns';

export function getDateRangeFromFilter(filtro) {
  const today = new Date();

  if (Array.isArray(filtro)) {
    return filtro; 
  }

  switch (filtro) {
    case 'HOY':
      return [startOfDay(today), endOfDay(today)];
    case '7D':
      return [subDays(today, 6), endOfDay(today)];
    case 'Este mes':
      return [subMonths(today, 0), endOfDay(today)];
    case '6M':
      return [subMonths(today, 6), endOfDay(today)];
    case 'YTD / YTG':
      return [new Date(today.getFullYear(), 0, 1), endOfDay(today)];
    case '1A':
      return [subMonths(today, 12), endOfDay(today)];
    case 'MÁX':
      return [new Date(2022, 0, 1), endOfDay(today)]; 
    default:
      return [subDays(today, 7), endOfDay(today)];
  }
}

