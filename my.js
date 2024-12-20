// 첫 일 시작일: 2019년 6월 24일
const getCareerAge = () => 1 + Math.floor((new Date() - new Date("2019-06-24").getTime()) / 3.15576e+10);

function calculateDuration(startYear, startMonth) {
    // 현재 날짜
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1; // 월은 0부터 시작하므로 +1

    // 입력 날짜
    const startDate = new Date(startYear, startMonth - 1); // 월은 0부터 시작하므로 -1

    // 년도와 월 계산
    let years = currentYear - startYear;
    let months = currentMonth - startMonth;

    // 만약 월 차이가 음수라면, 이전 해로부터 차감
    if (months < 0) {
        years -= 1;
        months += 12;
    }

    return { years, months };
}

// set career age
document.getElementById("my-career-ages").innerText = getCareerAge().toString();

// set current company age
const { years, months } = calculateDuration(2022, 6); // 우아한형제들 2022년 6월 입사
document.getElementById("my-current-company-years").innerText = years.toString();
document.getElementById("my-current-company-months").innerText = months.toString();
