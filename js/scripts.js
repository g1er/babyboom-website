$(window).load(function(){

	$(".thumbs_list").mCustomScrollbar({

		axis:"x",
		theme:"dark-thin",
		autoExpandScrollbar:true,
		autoHideScrollbar:true,
		contentTouchScroll:20,
		advanced:{autoExpandHorizontalScroll:true}
	});

});

// Alternate navbar appear
$(window).scroll(function(){
	var currentPos = window.pageYOffset;
	if(currentPos > 150){
		$('#altTopNav').fadeIn(450).css('display', 'flex');
	};
	if(currentPos < 150){
		$('#altTopNav').fadeOut(450);
	}
})

// Show and hide information "About Us"
function show(){
	$('#show-info').hide();
	$('#hide-info').show();
	$('#hidden-info').show(650, function(){});
};
function hide(){
	$('#show-info').show();
	$('#hide-info').hide();
	$('#hidden-info').hide(650, function(){});
};

// Pre-loading Gallery's big pictures
	var imgArr = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13);
	function listArray(){
		for (i=0; i<imgArr.length; i++){
			imgArr[i] = new Image();
			imgArr[i].src = 'images/gallery/big/' + (i+1) + '.jpg';
	 	}
	 }
	listArray();

// Show Gallery's big picture
	function imageChange(num) {
		var fullImg = document.getElementById('full_img');
		fullImg.innerHTML = "<img src=images/gallery/big/" + num + ".jpg>";
	}

// Setting current year in footer
		var par = document.getElementById('years');

		function setYear(){
			var newYear = new Date();
			var currentYear = newYear.getFullYear();
			par.innerText = "2016-" + currentYear + "г";
		}
