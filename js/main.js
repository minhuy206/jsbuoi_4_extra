/**
 * Bài 1
 *  - Đầu vào: nhập ngày tháng năm
 *  - Xử lí:
 *      -Tính ngày tiếp theo:
 *              - Ngày tiếp theo day = day + 1;
 *              - Nếu là ngày 31 của tháng 1, 3, 7, 8, 10 hoặc 30 của tháng 4, 6, 9, 11 hoặc 28, 29 của tháng 2 => ngày tiếp theo là ngày 1 tháng tiếp theo => day = 1 và month = month + 1
 *              - Nếu là ngày 31 tháng 12 => ngày tiếp theo là ngày 1 tháng 1 => day = 1 và month = 1;
 *      - Tính ngày trước đó:
 *              - Ngày trước đó: day = day - 1;
 *              - Nếu là ngày 1 => ngày trước đó day = 31/30/28/29 và month = month - 1;
 *              - Nếu là ngày 1/1 => ngày trước đó day = 31 month = 12;
 *  -Đầu ra: in ra màn hình
 */

document.getElementById("btnCalPreDay").onclick = function () {
  var getDate = document.getElementById("date").value;
  getDate = new Date(getDate);
  var date = getDate.getDate(getDate) * 1;
  var month = (getDate.getMonth(getDate) + 1) * 1;
  var year = getDate.getFullYear(getDate) * 1;
  var leapYear = year % 4;
  if (date == 1 && (month == 5 || month == 7 || month == 10 || month == 12)) {
    date = 30;
    month -= 1;
  } else if (
    (date == 1) &
    (month == 2 ||
      month == 4 ||
      month == 6 ||
      month == 8 ||
      month == 9 ||
      month == 11)
  ) {
    date = 31;
    month -= 1;
  } else if (date == 1 && month == 3 && leapYear == 0) {
    date = 29;
    month = 2;
  } else if (date == 1 && month == 3 && leapYear != 0) {
    date = 28;
    month = 2;
  } else if (date == 1 && month == 1) {
    date = 31;
    month = 12;
    year -= 1;
  } else {
    date -= 1;
  }
  document.getElementById("infoPreDate").innerHTML = "";
  var infoPreDate = document.createElement("p");
  infoPreDate.innerHTML = date + "/" + month + "/" + year;
  document.getElementById("infoPreDate").appendChild(infoPreDate);
};

document.getElementById("btnCalNextDay").onclick = function () {
  var getDate = document.getElementById("date").value;
  getDate = new Date(getDate);
  var date = getDate.getDate(getDate) * 1;
  var month = (getDate.getMonth(getDate) + 1) * 1;
  var year = getDate.getFullYear(getDate) * 1;
  var leapYear = year % 4;
  if (
    date == 31 &&
    (month == 1 ||
      month == 3 ||
      month == 5 ||
      month == 7 ||
      month == 8 ||
      month == 10)
  ) {
    date = 1;
    month += 1;
  } else if (
    date == 30 &&
    (month == 4 || month == 6 || month == 9 || month == 11)
  ) {
    date = 1;
    month += 1;
  } else if (date == 28 && month == 2 && leapYear != 0) {
    date = 1;
    month = 3;
  } else if (date == 29 && month == 2 && leapYear == 0) {
    date = 1;
    month = 3;
  } else if (date == 31 && month == 12) {
    date = 1;
    month = 1;
    year += 1;
  } else {
    date += 1;
  }
  document.getElementById("infoNextDate").innerHTML = "";
  var infoNextDate = document.createElement("p");
  infoNextDate.innerHTML = date + "/" + month + "/" + year;
  document.getElementById("infoNextDate").appendChild(infoNextDate);
};

/**
 * Bài 2
 *  -Đầu vào: Nhập tháng và năm
 *  -Xử lí:
 *      -Các tháng 1 3 5 7 8 10 12 => có 31 ngày
 *      -Các tháng 4 6 9 11 => có 30 ngày
 *      -Tháng 2 năm nhuận có 29 ngày
 *      -Tháng 2 năm không nhuận có 28 ngày
 *      -Năm % 4 == 0 => năm nhuận
 *      -Năm % 4 != 0 => năm không nhuận
 *  -Đầu ra: in ra màn hình kết quả
 */

document.getElementById("btnCalDate").onclick = function () {
  var getMonth = document.getElementById("month").value;
  getMonth = new Date(getMonth);
  var month = (getMonth.getMonth(getMonth) + 1) * 1;
  var year = getMonth.getFullYear(getMonth) * 1;
  var leapYear = year % 4;
  var day = null;
  if (month == 4 || month == 6 || month == 9 || month == 11) {
    day = 30;
  } else if (
    month == 1 ||
    month == 3 ||
    month == 5 ||
    month == 7 ||
    month == 8 ||
    month == 10 ||
    month == 12
  ) {
    day = 31;
  } else if (month == 2 && leapYear == 0) {
    day = 29;
  } else if (month == 2 && leapYear != 0) {
    day = 28;
  }
  getMonth.setMonth(month - 1);
  document.getElementById("infoDate").innerHTML = "";
  var infoDate = document.createElement("p");
  infoDate.innerHTML =
    getMonth.toLocaleString("en-US", { month: "long" }) +
    " consists of " +
    day +
    " days";
  document.getElementById("infoDate").appendChild(infoDate);
};

/**
 * Bài 4
 */
document.getElementById("btnCalFarthestStudent").onclick = function () {
  var schoolX = document.getElementById("schoolX").value * 1;
  var schoolY = document.getElementById("schoolY").value * 1;

  var student1Name = document.getElementById("student1Name").value;
  var student1X = document.getElementById("student1X").value * 1;
  var student1Y = document.getElementById("student1Y").value * 1;

  var student2Name = document.getElementById("student2Name").value;
  var student2X = document.getElementById("student2X").value * 1;
  var student2Y = document.getElementById("student2Y").value * 1;

  var student3Name = document.getElementById("student3Name").value;
  var student3X = document.getElementById("student3X").value * 1;
  var student3Y = document.getElementById("student3Y").value * 1;

  var student1Coordinate =
    (schoolX - student1X) * (schoolX - student1X) +
    (schoolY - student1Y) * (schoolY - student1Y);
  student1Coordinate = Math.sqrt(student1Coordinate);

  var student2Coordinate =
    (schoolX - student2X) * (schoolX - student2X) +
    (schoolY - student2Y) * (schoolY - student2Y);
  student2Coordinate = Math.sqrt(student2Coordinate);

  var student3Coordinate =
    (schoolX - student3X) * (schoolX - student3X) +
    (schoolY - student3Y) * (schoolY - student3Y);
  student3Coordinate = Math.sqrt(student3Coordinate);

  var mid = student1Coordinate;
  var farthestStudent = student1Name;

  if (mid < student2Coordinate) {
    mid = student2Coordinate;
    farthestStudent = student2Name;
    if (mid < student3Coordinate) {
      mid = student3Coordinate;
      farthestStudent = student3Name;
    }
  } else if (mid < student3Coordinate) {
    mid = student3Coordinate;
    farthestStudent = student3Name;
  }

  document.getElementById("infoFarthestStudent").innerHTML = "";
  var infoFarthestStudent = document.createElement("p");
  infoFarthestStudent.innerHTML =
    farthestStudent + " là sinh viên xa trường nhất!";
  document
    .getElementById("infoFarthestStudent")
    .appendChild(infoFarthestStudent);
  infoFarthestStudent.className = "alert alert-success";
};
