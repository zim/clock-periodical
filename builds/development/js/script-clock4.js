// Call init once the document is fully loaded
// ===========================================================
//window.addEventListener('load', init, false);

if(window.addEventListener){
  window.addEventListener('load', init)
}else{
  window.attachEvent('onload', init)
}

// ===========================================================

// GLOBAL VARIABLES
// ===========================================================
	// ===========================================================

// var hourImgP, hourImgC, hourImgN;
// var minuteImgP, minuteImgC, minuteImgN;
// //var minuteImgP, minuteImgC, minuteImgN;
//
// hourImgP = document.getElementById("hourImgP");
// hourImgC = document.getElementById("hourImgC");
// hourImgN = document.getElementById("hourImgN");
// minuteImgP = document.getElementById("minuteImgP");
// minuteImgC = document.getElementById("minuteImgC");
// minuteImgN = document.getElementById("minuteImgN");
//
// var hP, hC, hN;
// var mP, mC, mN;
// var sP, sC, sN;

var secTime = 10;



var secStartPoint = [210, 310, 410, 510, 610, 710, 810, 910, 1010, 1110, 1210, 1310, 1410, 1510, 1610, 1710, 1810, 1910, 2010, 2110, 2210, 2310, 2410, 2510, 2610, 2710, 2810, 2910, 3010, 3110, 3210, 3310, 3410, 3510, 3610, 3710, 3810, 3910, 4010, 4110, 4210, 4310, 4410, 4510, 4610, 4710, 4810, 4910, 5010, 5110, 5210, 5310, 5410, 5510, 5610, 5710, 5810, 5910, 6010, 6110];          // Good

var minStartPoint = [210, 310, 410, 510, 610, 710, 810, 910, 1010, 1110, 1210, 1310, 1410, 1510, 1610, 1710, 1810, 1910, 2010, 2110, 2210, 2310, 2410, 2510, 2610, 2710, 2810, 2910, 3010, 3110, 3210, 3310, 3410, 3510, 3610, 3710, 3810, 3910, 4010, 4110, 4210, 4310, 4410, 4510, 4610, 4710, 4810, 4910, 5010, 5110, 5210, 5310, 5410, 5510, 5610, 5710, 5810, 5910, 6010, 6110];          // Good

var hourStartPoint = [210, 310, 410, 510, 610, 710, 810, 910, 1010, 1110, 1210, 1310, 1410, 1510, 1610, 1710, 1810, 1910, 2010, 2110, 2210, 2310, 2410, 2510, 2610, 2710, 2810, 2910, 3010, 3110, 3210, 3310, 3410, 3510, 3610, 3710, 3810, 3910, 4010, 4110, 4210, 4310, 4410, 4510, 4610, 4710, 4810, 4910, 5010, 5110, 5210, 5310, 5410, 5510, 5610, 5710, 5810, 5910, 6010, 6110];          // Good


// var today;
// var h;
// var m;
// var s;

// var numbersHourSpin = document.getElementById("numbersHourSpin");
//
// var numbersMinSpin = document.getElementById("numbersMinSpin");
//
// var numbersSpin = document.getElementById("numbersSpin");


var currentVert;







// INITIALISE
// ===========================================================
//CustomWebView.loadSounds(["audio/donkey.mp3", "audio/master.mp3"]);

function init() {

console.log('init() CALLED ***********************');

// set date etc...
// today=new Date();
// h=parseInt(today.getHours());
// m=parseInt(today.getMinutes());
// s=parseInt(today.getSeconds());

var todayVert=new Date();
        var hVert=parseInt(todayVert.getHours());
        var mVert=parseInt(todayVert.getMinutes());
        var sVert=parseInt(todayVert.getSeconds());

currentVert = secStartPoint[sVert];

	//startTime();

	//startSpin(currentVert);

  var Clock1 = new Clock('myClockOne');

  Clock1.TimeSecPosition();
}
// END init()

// function startSpin() {
//   console.log('function startSpin() CALLED *********************** currentVert ===== ' + currentVert);
//     var todaySpin=new Date();
//             var hSpin=parseInt(todaySpin.getHours());
//             var mSpin=parseInt(todaySpin.getMinutes());
//             var sSpin=parseInt(todaySpin.getSeconds());
//
// 	//secTime = currentVert;
//
// 	console.log('secTime = ' + secTime);
//
// 	secTime = secTime+1;
//
// 	console.log('secTime2 =-==== ' + secTime);
//
// 	// numbersHourSpin.style.webkitTransform = "translate3d(0px,-" + hourStartPoint[hSpin-3] +"px,0px) scale(1)";
//   //
// 	// numbersMinSpin.style.webkitTransform = "translate3d(0px,-" + minStartPoint[mSpin-3] +"px,0px) scale(1)";
//   //
// 	// numbersSpin.style.webkitTransform = "translate3d(0px,-" + secStartPoint[sSpin-2] +"px,0px) scale(1)";
//
//   var tSpin = setTimeout(function(){startSpin()},1000);
// }
// END function startSpin() {



// function startTime(today) {
//   console.log('function startTime() CALLED ***********************');
//     var today=new Date();
//     h=parseInt(today.getHours());
//     m=parseInt(today.getMinutes());
//     s=parseInt(today.getSeconds());
//
// 	// adjust secsnds previos and next seconds
//     hP = (h-1);
//     if(hP == -1){
//       console.log('hP ========== 59');
//       hP=59;
//     };
//     hC = (h);
//     hN = (h+1);
//     if(hN == 60){
//       console.log('hN ======== 60');
//       hN=0;
//     };
//
// 	// adjust secsnds previos and next seconds
//     sP = (s-1);
//     if(sP == -1){
//       console.log('sP ========== 59');
//       sP=59;
//     };
//     sC = (s);
//     sN = (s+1);
//     if(sN == 60){
//       console.log('sN ======== 60');
//       sN=0;
//     };
//
//     // m = checkTime(m);
//     // s = checkTime(s);
//     document.getElementById('myClock').innerHTML = h+":"+m+":"+s;
//
//     hourImgP.src = "images/numbers/" + hP + ".jpg";
//     minuteImgP.src = "images/numbers/" + (m-1) + ".jpg";
//     secondImgP.src = "images/numbers/" + sP + ".jpg";
//
//     hourImgC.src = "images/numbers/" + h + ".jpg";
//     minuteImgC.src = "images/numbers/" + m + ".jpg";
//     secondImgC.src = "images/numbers/" + sC + ".jpg";
//
//     hourImgN.src = "images/numbers/" + hN + ".jpg";
//     minuteImgN.src = "images/numbers/" + (m+1) + ".jpg";
//     secondImgN.src = "images/numbers/" + sN + ".jpg";
//
//     var t = setTimeout(function(){startTime()},500);
//
// }// END function startTime() {


// function checkTime(i) {
//     if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
//     return i;
// }
