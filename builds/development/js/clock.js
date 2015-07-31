
var Clock = Clock || (function(domObject){

  console.log('NEW CLOCK OBJECT CREATED +++++++++++++++++++++++++++++++ domObject = ' + domObject);


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
