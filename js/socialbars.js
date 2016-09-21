$(document).ready(function() {
	
	// ["Label" , "website link" , "bar color" , "bar image"]
	var social = [
	 ["facebook", 	"https://www.facebook.com/joao.bonfa", 	"#3B5998", "icons/facebook.jpg"],
	 ["google+", 	"https://plus.google.com/u/0/108392042668031237457", "#dd4b39", "icons/google_plus.jpg"],
	 ["linkedin", 	"www.linkedin.com/in/joaopaulobonfa2016","#0e76a8", "icons/linkedin.jpg"],
	 ["skype", 		"http://www.skype.com", 	"#00aff0", "icons/skype.jpg"],
	 ["twitter", 	"https://twitter.com/joaopaulobonfa", 	"#55acee", "icons/twitter.jpg"],
	 ["youtube", 	"https://www.youtube.com/channel/UCZinh4loNqRxsV2kwIhXkRA", "#c4302b", "icons/youtube.jpg"],
	 ["soundcloud", 	"https://soundcloud.com/joaobonfa", 	"#dd4b39", "icons/soundcloud.jpg"]
	 ];

////////////////////////////////////////////////	
//// DO NOT EDIT ANYTHING BELOW THIS LINE! /////
////////////////////////////////////////////////
		
	$("#socialside").append('<ul class="mainul"></ul>');
	
	/// generating bars
	for(var i=0;i<social.length;i++){
	$(".mainul").append("<li>" + '<ul class="scli" style="background-color:' + social[i][2] + '">' +
						'<li>' + social[i][0] + '<img src="' + social[i][3] + '"/></li></ul></li>');
	 				}
	
	/// bar click event
	$(".scli").click(function(){
		var link = $(this).text();		
		for(var i=0;i<social.length;i++){
			if(social[i][0] == link){
				window.open(social[i][1]);
			}
		}		
	});
	
	/// mouse hover event
	$(".scli").mouseenter(function() {	
		$(this).stop(true);	
		$(this).clearQueue();
			$(this).animate({
				left : "140px"
			}, 300);
				
	});

	/// mouse out event
	$(".scli").mouseleave(function(){
		$(this).animate({
			left:"0px"
		},700,'easeOutBounce');
	});

});
