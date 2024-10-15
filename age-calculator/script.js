function calculateAge() {
    var birthDay = document.getElementById("birthDay").value;
    var birthMonth = document.getElementById("birthMonth").value;
    var birthYear = document.getElementById("birthYear").value;

    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var monthAbbr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var monthAbbr = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

    if (isNaN(birthMonth)) {
        if (monthNames.includes(birthMonth)) {
            birthMonth = monthNames.indexOf(birthMonth) + 1;
        } else if (monthAbbr.includes(birthMonth)) {
            birthMonth = monthAbbr.indexOf(birthMonth) + 1;
        }
    } else {
        birthMonth = parseInt(birthMonth);
    }

    birthDay = parseInt(birthDay);
    birthMonth = parseInt(birthMonth);
    birthYear = parseInt(birthYear);

    var currentDate = new Date();
    var currentDay = currentDate.getDate();
    var currentMonth = currentDate.getMonth() + 1;
    var currentYear = currentDate.getFullYear();

    var ageYears = currentYear - birthYear;
    var ageMonths = currentMonth - birthMonth;
    var ageDays = currentDay - birthDay;

    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(currentYear, currentMonth - 1, 0).getDate();
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    document.getElementById("result").innerText = `Your Age is ${ageYears} years, ${ageMonths} months, and ${ageDays} days!`;
}
