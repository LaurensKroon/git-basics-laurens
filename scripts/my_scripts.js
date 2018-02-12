$(document).ready(function(){

	kruip();
	octoKruip();

});

function kruip(){
	$("#gerrit").animate({
				  	left: "+=10px",
				  	width: "210px"
			  	}, 600)
				.animate({
					left: "+=10px",
				  	width: "200px"
			  	}, 600);
	

	setTimeout("kruip()", 1200);
}

function octoKruip(){
$("#octo").animate({
					left:"-=10px",
					width:"128px"
				}, 600)
			.animate({
					left:"-=10px",
					width: "122px"
			}, 600);
	
	setTimeout("octoKruip()", 1200);
	}
