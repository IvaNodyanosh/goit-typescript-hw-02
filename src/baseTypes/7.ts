/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Week {
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY,
}

function isWeekend(day: string): boolean {
  if (day.toUpperCase() || Week[Week.SATURDAY] || Week[Week.SUNDAY]) {
    return true;
  }
  return false;
}
