
var Clock = Clock || (function(domObject){

  console.log('NEW CLOCK OBJECT CREATED +++++++++++++++++++++++++++++++ domObject = ' + domObject);

  // SET DATE OBJECT
  var todaySpin;
  var hSpin;
  var mSpin;
  var sSpin;

  //document.getElementById('myClock').innerHTML = h+":"+m+":"+s;


  var clockWrap = document.getElementById(domObject);

  //CREATE CLOCK ELEMENTS
  var myClockWrapper = document.createElement('div');
  myClockWrapper.id = 'myClockWrapper';
  clockWrap.appendChild(myClockWrapper);

  //CREATE CLOCK ELEMENT HOUR
  var hourWrapSpin1 = document.createElement('div');
  hourWrapSpin1.id = 'hourWrapSpin1';
  hourWrapSpin1.className = 'col';
  myClockWrapper.appendChild(hourWrapSpin1);

  //CREATE CLOCK ELEMENT MINUTE
  var minWrapSpin1 = document.createElement('div');
  minWrapSpin1.id = 'minWrapSpin1';
  minWrapSpin1.className = 'col';
  myClockWrapper.appendChild(minWrapSpin1);

  //CREATE CLOCK ELEMENT SECOND
  var secWrapSpin1 = document.createElement('div');
  secWrapSpin1.id = 'secWrapSpin1';
  secWrapSpin1.className = 'col';
  myClockWrapper.appendChild(secWrapSpin1);

  //Create image element
	var hourImageSrc = 'images/numbers/numbers1d.jpg';
	var hourImage = document.createElement('img');
  hourImage.id = 'hourImage';
  hourImage.src = hourImageSrc;
  // hourImage.style.display = 'block';
  // hourImage.style.position = 'absolute';
  hourWrapSpin1.appendChild(hourImage);

  //Create minute image element
	var minuteImageSrc = 'images/numbers/numbers1d.jpg';
	var minuteImage = document.createElement('img');
  minuteImage.id = 'minuteImage';
  minuteImage.src = minuteImageSrc;
  // hourImage.style.display = 'block';
  // hourImage.style.position = 'absolute';
  minWrapSpin1.appendChild(minuteImage);

  //Create SECOND image element
	var secondImageSrc = 'images/numbers/numbers1d.jpg';
	var secondImage = document.createElement('img');
  secondImage.id = 'secondImage';
  secondImage.src = secondImageSrc;
  // hourImage.style.display = 'block';
  // hourImage.style.position = 'absolute';
  secWrapSpin1.appendChild(secondImage);


  // SPIN FUNCTION
  function startSpin() {
    console.log('CLOCK OBJECT function startSpin() CALLED *********************** currentVert ===== ' + currentVert);
    // var todaySpin=new Date();
    // var hSpin=parseInt(todaySpin.getHours());
    // var mSpin=parseInt(todaySpin.getMinutes());
    // var sSpin=parseInt(todaySpin.getSeconds());

    todaySpin=new Date();
    hSpin=parseInt(todaySpin.getHours());
    mSpin=parseInt(todaySpin.getMinutes());
    sSpin=parseInt(todaySpin.getSeconds());

    document.getElementById('myClock').innerHTML = hSpin+":"+mSpin+":"+sSpin;

  	//secTime = currentVert;

  	console.log('secTime = ' + secTime);

  	secTime = secTime+1;

  	console.log('secTime2 =-==== ' + secTime);

    hourImage.style.webkitTransform = "translate3d(0px,-" + hourStartPoint[hSpin-3] +"px,0px) scale(1)";
    minuteImage.style.webkitTransform = "translate3d(0px,-" + minStartPoint[mSpin-3] +"px,0px) scale(1)";
    secondImage.style.webkitTransform = "translate3d(0px,-" + secStartPoint[sSpin-2] +"px,0px) scale(1)";

  	// numbersHourSpin.style.webkitTransform = "translate3d(0px,-" + hourStartPoint[hSpin-3] +"px,0px) scale(1)";
    //
  	// numbersMinSpin.style.webkitTransform = "translate3d(0px,-" + minStartPoint[mSpin-3] +"px,0px) scale(1)";
    //
  	// numbersSpin.style.webkitTransform = "translate3d(0px,-" + secStartPoint[sSpin-2] +"px,0px) scale(1)";

    var tSpin = setTimeout(function(){startSpin()},1000);
  }
  // END function startSpin() {

  startSpin();


	function setTimeSecPosition(){
		console.log('setTimeSecPosition CALLED ==================================');

	}// end function setTimeSecPosition(){

	function shareTime(url, caption){
	    console.log('function shareTime(url, caption) CALLED ************* url = ' + url + " and caption = " + caption);
	}// end function shareTime(url, caption){


	return{
    TimeSecPosition:function(){
      setTimeSecPosition();
		},
		share:function(url, caption){
      shareTime(url, caption);
		}
	};
  // end return

});
