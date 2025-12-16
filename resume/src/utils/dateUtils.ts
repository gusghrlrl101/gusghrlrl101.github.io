/**
 * 시작 날짜부터 종료 날짜(또는 현재)까지의 기간을 계산합니다.
 * @param startDate - 시작 날짜 (YYYY.MM 형식)
 * @param endDate - 종료 날짜 (YYYY.MM 형식, 없으면 현재까지)
 * @param lang - 언어 ('kr' 또는 'en')
 * @returns 계산된 기간 문자열
 */
export function calculateDuration(startDate: string, endDate: string | undefined, lang: 'kr' | 'en'): string {
  const [startYear, startMonth] = startDate.split('.').map(Number);
  const start = new Date(startYear, startMonth - 1);

  let end: Date;
  if (endDate) {
    const [endYear, endMonth] = endDate.split('.').map(Number);
    end = new Date(endYear, endMonth - 1);
  } else {
    end = new Date();
  }

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  if (lang === 'kr') {
    if (years > 0 && months > 0) {
      return `${years}년 ${months}개월`;
    } else if (years > 0) {
      return `${years}년`;
    } else {
      return `${months}개월`;
    }
  } else {
    if (years > 0 && months > 0) {
      return `${years} year${years > 1 ? 's' : ''} ${months} month${months > 1 ? 's' : ''}`;
    } else if (years > 0) {
      return `${years} year${years > 1 ? 's' : ''}`;
    } else {
      return `${months} month${months > 1 ? 's' : ''}`;
    }
  }
}

/**
 * 기간 문자열을 포맷팅합니다.
 * @param startDate - 시작 날짜 (YYYY.MM 형식)
 * @param endDate - 종료 날짜 (YYYY.MM 형식, 없으면 현재까지)
 * @param lang - 언어 ('kr' 또는 'en')
 * @returns 포맷된 기간 문자열
 */
export function formatPeriod(startDate: string, endDate: string | undefined, lang: 'kr' | 'en'): string {
  const duration = calculateDuration(startDate, endDate, lang);

  if (!endDate) {
    // end가 없으면 현재까지로 표시
    if (lang === 'kr') {
      return `${startDate} - 현재 (${duration})`;
    } else {
      const [year, month] = startDate.split('.');
      const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const formattedStart = `${monthNames[parseInt(month) - 1]} ${year}`;
      return `${formattedStart} - Present (${duration})`;
    }
  }

  // end가 있으면 기간과 함께 표시
  if (lang === 'kr') {
    return `${startDate} - ${endDate} (${duration})`;
  } else {
    const [startYear, startMonth] = startDate.split('.');
    const [endYear, endMonth] = endDate.split('.');
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const formattedStart = `${monthNames[parseInt(startMonth) - 1]} ${startYear}`;
    const formattedEnd = `${monthNames[parseInt(endMonth) - 1]} ${endYear}`;
    return `${formattedStart} - ${formattedEnd} (${duration})`;
  }
}
