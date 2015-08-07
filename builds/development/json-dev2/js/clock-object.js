
var Clock = Clock || (function(domObject){

  console.log('NEW CLOCK OBJECT CREATED +++++++++++++++++++++++++++++++ domObject = ' + domObject);

  console.log('ELEMENTS _____________________________ domObject = ' + elements);

  // SET DATE OBJECT
  var todaySpin;
  var hSpin, hSpinPrev, hSpinNext;
  var mSpin, mSpinPrev, mSpinNext;
  var sSpin, sSpinPrev, sSpinNext;


  //document.getElementById('myClock').innerHTML = h+":"+m+":"+s;

function element(number, name, small) {
    this.number = number;
    this.name = name;
    this.small = small;
}

  var clockWrap = document.getElementById(domObject);

	var output='';

	var elements = new Array();


	var elementsHour = new Array();
	var elementsMin = new Array();
	var elementsSec = new Array();



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




	$.getJSON('data.json', function(data){

		console.log('$.getJSON(data.json, function(data){ CALLLED data in object = ' + data);

    console.log('data in object 1111111 = ' + data.elements);

			for (var i = 0; i <= data.elements.length-1; i++) {

				// elements[i] = new element();



				output += '<div class="element" style="outline:1px solid red;">';

				for (key in data.elements[i]) {
					if (data.elements[i].hasOwnProperty(key)) {
						output += '<div>' +
								'<p class="one">"' + key +
								'"</p><p class="two">' + data.elements[i][key] + '</p>';
								'</div>';


			    	}
				}
				output += '</div>';

				// CREATE HOUR ELEMENTS
				  elementsHour[i] = document.createElement('div');
				//var varTemp = document.createElement('div');
				  elementsHour[i].id = 'hourEl' + i;
				  elementsHour[i].className = 'element';
				  //elementsHour[i].innerHTML = data.elements[i].number;
				  hourWrapSpin1.appendChild(elementsHour[i]);

			     var varTemph = document.createElement('div');
				 varTemph.id = 'hourElNumber' + i;
				 varTemph.className = 'number';
				 varTemph.innerHTML = data.elements[i].number;
				 elementsHour[i].appendChild(varTemph);

				var varTempSmall = document.createElement('div');
				 varTempSmall.id = 'hourElSmall' + i;
				 varTempSmall.className = 'small';
				 varTempSmall.innerHTML = data.elements[i].small;
				 elementsHour[i].appendChild(varTempSmall);

				var varTempName = document.createElement('div');
				 varTempName.id = 'hourElName' + i;
				 varTempName.className = 'name';
				 varTempName.innerHTML = data.elements[i].name;
				 elementsHour[i].appendChild(varTempName);

				// CREATE MINUTE ELEMENTS
				  elementsMin[i] = document.createElement('div');
				//var varTemp = document.createElement('div');
				  elementsMin[i].id = 'minEl' + i;
				  elementsMin[i].className = 'element';
				  //elementsHour[i].innerHTML = data.elements[i].number;
				  minWrapSpin1.appendChild(elementsMin[i]);

			     var varTempm = document.createElement('div');
				 varTempm.id = 'minuteElNumber' + i;
				 varTempm.className = 'number';
				 varTempm.innerHTML = data.elements[i].number;
				 elementsMin[i].appendChild(varTempm);

				var varTempmSmall = document.createElement('div');
				 varTempmSmall.id = 'minElSmall' + i;
				 varTempmSmall.className = 'small';
				 varTempmSmall.innerHTML = data.elements[i].small;
				 elementsMin[i].appendChild(varTempmSmall);

				var varTempmName = document.createElement('div');
				 varTempmName.id = 'minElName' + i;
				 varTempmName.className = 'name';
				 varTempmName.innerHTML = data.elements[i].name;
				 elementsMin[i].appendChild(varTempmName);

				// CREATE SECONDS ELEMENTS
				  elementsSec[i] = document.createElement('div');
				//var varTemp = document.createElement('div');
				  elementsSec[i].id = 'secEl' + i;
				  elementsSec[i].className = 'element';
				  //elementsHour[i].innerHTML = data.elements[i].number;
				  secWrapSpin1.appendChild(elementsSec[i]);

			     var varTemps = document.createElement('div');
				 varTemps.id = 'secElNumber' + i;
				 varTemps.className = 'number';
				 varTemps.innerHTML = data.elements[i].number;
				 elementsSec[i].appendChild(varTemps);

				var varTempsSmall = document.createElement('div');
				 varTempsSmall.id = 'secElSmall' + i;
				 varTempsSmall.className = 'small';
				 varTempsSmall.innerHTML = data.elements[i].small;
				 elementsSec[i].appendChild(varTempsSmall);

				var varTempsName = document.createElement('div');
				 varTempsName.id = 'secElName' + i;
				 varTempsName.className = 'name';
				 varTempsName.innerHTML = data.elements[i].name;
				 elementsSec[i].appendChild(varTempsName);


				console.log("data.elements[i][number] + data.elements[i][small] + data.elements[i][name] = " + data.elements[i].number + data.elements[i].small + data.elements[i].name);

				elements[i] = new element(data.elements[i].number,data.elements[i].name,data.elements[i].small);
				//var myFather = new person("John", "Doe", 50, "blue");
				console.log('well = ' + elements[i].name);

				// CREATE ELEMENT DIVS
				console.log("LENGTH = " + elements.length);

			// var update = document.getElementById('demo');
			// 			update.innerHTML = output;


			}// end for (var i = 0; i <= data.elements.length-1; i++) {



	}); //getJSON




  // FADE FUNCTION
  function startFade() {
    console.log('CLOCK OBJECT function startFade() CALLED *********************** currentVert ===== ' + currentVert);


    // var todaySpin=new Date();
    // var hSpin=parseInt(todaySpin.getHours());
    // var mSpin=parseInt(todaySpin.getMinutes());
    // var sSpin=parseInt(todaySpin.getSeconds());

    todaySpin=new Date();
    hSpin=parseInt(todaySpin.getHours());
    mSpin=parseInt(todaySpin.getMinutes());
    sSpin=parseInt(todaySpin.getSeconds());



    hSpinPrev=hSpin-1;
    hSpinNext=hSpin+1;

    mSpinPrev=mSpin-1;
    mSpinNext=mSpin+1;

    sSpinPrev=sSpin-1;
    sSpinNext=sSpin+1;




    mSpin=parseInt(todaySpin.getMinutes());
    sSpin=parseInt(todaySpin.getSeconds());

    document.getElementById('myClock').innerHTML = hSpin+":"+mSpin+":"+sSpin;

    //secTime = currentVert;

    console.log('secTime = ' + secTime);

    console.log('hSpin = ' + hSpin);
    console.log('mSpin = ' + mSpin);
    console.log('sSpin = ' + sSpin);

    secTime = secTime+1;

    console.log('secTime2 =-==== ' + secTime);


    hourWrapSpin1.style.opacity = "1";

    minWrapSpin1.style.opacity = "1";

    secWrapSpin1.style.opacity = "1";


    console.log("elementsSec[i][i] = " + elementsSec[hSpin]);

    elementsSec[hSpinPrev].style.opacity = "0";
    elementsSec[sSpin].style.opacity = "1";


    elementsMin[mSpin].style.opacity = "1";


    elementsHour[hSpin].style.opacity = "1";


    elementsSec[sSpin-1].style.opacity = "0";
    elementsMin[mSpin].style.opacity = "1";
    elementsHour[hSpin].style.opacity = "1";



    // hourWrapSpin1.style.webkitTransform = "translate3d(0px,-" + hourStartPoint[hSpin-3] +"px,0px) scale(1)";
    //
    // minWrapSpin1.style.webkitTransform = "translate3d(0px,-" + minStartPoint[mSpin-3] +"px,0px) scale(1)";
    //
    // secWrapSpin1.style.webkitTransform = "translate3d(0px,-" + secStartPoint[sSpin-2] +"px,0px) scale(1)";







    // numbersHourSpin.style.webkitTransform = "translate3d(0px,-" + hourStartPoint[hSpin-3] +"px,0px) scale(1)";
    //
    // numbersMinSpin.style.webkitTransform = "translate3d(0px,-" + minStartPoint[mSpin-3] +"px,0px) scale(1)";
    //
    // numbersSpin.style.webkitTransform = "translate3d(0px,-" + secStartPoint[sSpin-2] +"px,0px) scale(1)";

    var tFade = setTimeout(function(){startFade()},1000);

    //startFade();
  }
  // END function startFade() {

  console.log("elements bottom = " + elements);

  var tFadeMain = setTimeout(function(){
    startFade();
  },2000);






  // SPIN FUNCTION
  // function startSpin() {
  //   console.log('CLOCK OBJECT function startSpin() CALLED *********************** currentVert ===== ' + currentVert);
  //   // var todaySpin=new Date();
  //   // var hSpin=parseInt(todaySpin.getHours());
  //   // var mSpin=parseInt(todaySpin.getMinutes());
  //   // var sSpin=parseInt(todaySpin.getSeconds());
  //
  //   todaySpin=new Date();
  //   hSpin=parseInt(todaySpin.getHours());
  //   mSpin=parseInt(todaySpin.getMinutes());
  //   sSpin=parseInt(todaySpin.getSeconds());
  //
  //   document.getElementById('myClock').innerHTML = hSpin+":"+mSpin+":"+sSpin;
  //
  // 	//secTime = currentVert;
  //
  // 	console.log('secTime = ' + secTime);
  //
  //   console.log('hSpin = ' + hSpin);
  //   console.log('mSpin = ' + mSpin);
  //   console.log('sSpin = ' + sSpin);
  //
  // 	secTime = secTime+1;
  //
  // 	console.log('secTime2 =-==== ' + secTime);
  //
  //
  //   // hourWrapSpin1.style.webkitTransform = "translate3d(10px,-" + ((hSpin*90)+3) +"px,0px) scale(1)";
  //   //
  //   // minWrapSpin1.style.webkitTransform = "translate3d(0px,-" + ((mSpin*90)+3) +"px,0px) scale(1)";
  //   //
  //   // secWrapSpin1.style.webkitTransform = "translate3d(0px,-" + ((sSpin*90)+3)+"px,0px) scale(1)";
  //
  //
  //
  //   hourWrapSpin1.style.webkitTransform = "translate3d(0px,-" + hourStartPoint[hSpin-3] +"px,0px) scale(1)";
  //
  //   minWrapSpin1.style.webkitTransform = "translate3d(0px,-" + minStartPoint[mSpin-3] +"px,0px) scale(1)";
  //
  //   secWrapSpin1.style.webkitTransform = "translate3d(0px,-" + secStartPoint[sSpin-2] +"px,0px) scale(1)";
  //
  //
  //
  //
  //
  //
  //
  // 	// numbersHourSpin.style.webkitTransform = "translate3d(0px,-" + hourStartPoint[hSpin-3] +"px,0px) scale(1)";
  //   //
  // 	// numbersMinSpin.style.webkitTransform = "translate3d(0px,-" + minStartPoint[mSpin-3] +"px,0px) scale(1)";
  //   //
  // 	// numbersSpin.style.webkitTransform = "translate3d(0px,-" + secStartPoint[sSpin-2] +"px,0px) scale(1)";
  //
  //   var tSpin = setTimeout(function(){startSpin()},1000);
  //
  //   //startSpin();
  // }
  // // END function startSpin() {
  //
  // startSpin();


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
