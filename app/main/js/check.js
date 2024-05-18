//Code by Kerso
//Copyright Kerso 2024
var busstop

function check() {
    const busstop = document.getElementById('stop-num').value;

    window.location.href = "http://rozklady.lodz.pl/Home/TimeTableReal?busStopNum=" + busstop;
}