import { Period } from 'src/model/period.enum';

export function getNextPeriodDate(currentDate: Date, period: Period): Date {
  const nextDate = new Date(currentDate);

  if (period === Period.WEEKLY) {
    nextDate.setDate(currentDate.getDate() + 7);
  } else if (period === Period.MONTHLY) {
    nextDate.setMonth(currentDate.getMonth() + 1);
  } else if (period === Period.YEARLY) {
    nextDate.setFullYear(currentDate.getFullYear() + 1);
  }

  return nextDate;
}
