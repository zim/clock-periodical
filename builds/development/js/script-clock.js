console.log('hello');

//var myVar=setInterval(function(){myTimer()},1000);

// function myTimer() {
//     var d = new Date();
//     document.getElementById("myClock").innerHTML = d.toLocaleTimeString();
// }

var hourImgB, hourImgF;
var minuteImgB, minuteImgF;

hourImgP = document.getElementById("hourImgP");
hourImgC = document.getElementById("hourImgC");
hourImgN = document.getElementById("hourImgN");
minuteImgP = document.getElementById("minuteImgP");
minuteImgC = document.getElementById("minuteImgC");
minuteImgN = document.getElementById("minuteImgN");

var sP, sC, sN;

function startTime() {
  console.log('function startTime() {');
    var today=new Date();
    var h=parseInt(today.getHours());
    var m=parseInt(today.getMinutes());
    var s=parseInt(today.getSeconds());

    // var sP, sC, sN;

    sP = (s-1);
    //console.log('sP =' + sP);

    if(sP == -1){
      console.log('sP ========== 59');
      sP=59;
    };

    // if(sP == 62){
    //       console.log('sP ======== 62');
    //       sP=2;
    //     };

    sC = (s);
    //console.log('sC =' + sC);

    // if(sC == 0){
    //   console.log('sC == 59');
    //   sC=59;
    // };
    //
    // if(sC == 62){
    //   console.log('sC == 62');
    //   sC=2;
    // };

    sN = (s+1);
    //console.log('sN =' + sN);

    if(sN == 60){
      console.log('sN ======== 60');
      sN=0;
    };
    // 
    // if(sN == 0){
    //   console.log('sN ======== 0');
    //   sN=1;
    // };



    // m = checkTime(m);
    // s = checkTime(s);
    document.getElementById('myClock').innerHTML = h+":"+m+":"+s;

    hourImgP.src = "images/numbers/" + (h-1) + ".jpg";
    minuteImgP.src = "images/numbers/" + (m-1) + ".jpg";
    secondImgP.src = "images/numbers/" + sP + ".jpg";

    hourImgC.src = "images/numbers/" + h + ".jpg";
    minuteImgC.src = "images/numbers/" + m + ".jpg";
    secondImgC.src = "images/numbers/" + sC + ".jpg";

    hourImgN.src = "images/numbers/" + (h+1) + ".jpg";
    minuteImgN.src = "images/numbers/" + (m+1) + ".jpg";
    secondImgN.src = "images/numbers/" + sN + ".jpg";

    var t = setTimeout(function(){startTime()},500);
}

function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

if(window.addEventListener){
  window.addEventListener('load', startTime)
}else{
  window.attachEvent('onload', startTime)
}
