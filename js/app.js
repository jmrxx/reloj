// screen for the clock digital
const screenDigital = document.getElementById("screen-clock-digital");
const screenDigitalDate = document.getElementById("screen-clock-digital-date");

// screen for the clock analog
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const seconds = document.querySelector(".second");

// year month
const monthName = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "Octuber",
  "November",
  "December",
];
// day week
const dayName = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function clockDigital() {
  const local = new Date();
  let h = local.getHours(),
    m = local.getMinutes(),
    s = local.getSeconds();

  if (h < 10) h = "0" + h;
  if (m < 10) m = "0" + m;
  if (s < 10) s = "0" + s;

  let day = local.getDay();
  (d = local.getDate()), (month = local.getMonth()), (y = local.getFullYear());

  //print Result
  screenDigital.innerHTML = `${h} : ${m} : ${s}`;
  screenDigitalDate.innerHTML = `${dayName[day]}, ${d} ${monthName[month]} ${y}`;
}

setInterval(clockDigital, 1000);

function clockAnalog() {
  const local = new Date();

  let h = local.getHours();
  let m = local.getMinutes();
  let s = local.getSeconds();

  hr = 30 * h + m / 2;
  min = 6 * m;
  sec = 6 * s;

  hour.style.transform = `rotate(${hr}deg)`;
  minute.style.transform = `rotate(${min}deg)`;
  seconds.style.transform = `rotate(${sec}deg)`;
}

setInterval(clockAnalog, 1000);
