export interface DateDiffResult {
  years: number;
  months: number;
  days: number;
  totalDays: number;
}

export function calculateDateDiff(startDate: Date, endDate: Date): DateDiffResult {
  let start = startDate;
  let end = endDate;
  if (start > end) {
    [start, end] = [end, start];
  }

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  let days = end.getDate() - start.getDate();

  if (days < 0) {
    months -= 1;
    const lastDayOfPrevMonth = new Date(end.getFullYear(), end.getMonth(), 0);
    days += lastDayOfPrevMonth.getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const totalDays = Math.round(
    (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
  );

  return { years, months, days, totalDays };
}
