$(function(){
	var carouselList = $("#carousel ul");
		setInterval(changeSlide, 7000);
			function changeSlide (){
				carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
			}

			function moveFirstSlide () {
						var firstItem = carouselList.find("li:first"),
							lastItem = carouselList.find("li:last");
							lastItem.after(firstItem);
							carouselList.css({marginLeft:0});
					}
					
	var carouselControlLeft = $("#left"),
		carouselControlRight = $("#right");
			carouselControlLeft.click(function(){
				carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
			})

			carouselControlRight.click(function(){
				carouselList.animate({'marginLeft':400}, 500, moveFirstSlide);
			})


});

