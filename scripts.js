$(function(){
	var CONSTANTS = {
		DIRECTION: {
			LEFT: 'left',
			RIGHT: 'right'
		},
		INTERVAL: 2000,
		SPEED_ANIMATION: 800,
		OFFSET: 400,
	};

	function getCurrentOffset(direction, offset) {
		// wycinamy px z pobranej wartości
		var currentOffset = +carouselList.css('marginLeft').slice(0, -2);

		switch (direction) {
			case CONSTANTS.DIRECTION.LEFT: 
				currentOffset -= offset;
				break;
			case CONSTANTS.DIRECTION.RIGHT: 
				currentOffset += offset;
				break;
		}

		return currentOffset;
	}

	function changeSlide() {
		carouselList.animate({
			'marginLeft': getCurrentOffset(CONSTANTS.DIRECTION.LEFT, CONSTANTS.OFFSET),
		}, CONSTANTS.SPEED_ANIMATION);
	}

	/* START APP */
	var carouselList = $("#carousel ul")
		carouselInterval = setInterval(changeSlide, CONSTANTS.INTERVAL),
		carouselControlLeft = $("#left"),
		carouselControlRight = $("#right");

	carouselControlLeft.click(function() {
		clearInterval(carouselInterval);

		carouselList.animate({
			'marginLeft': getCurrentOffset(CONSTANTS.DIRECTION.LEFT, CONSTANTS.OFFSET),
		}, CONSTANTS.SPEED_ANIMATION);
	});

	carouselControlRight.click(function() {
		clearInterval(carouselInterval);

		carouselList.animate({
			'marginLeft': getCurrentOffset(CONSTANTS.DIRECTION.RIGHT, CONSTANTS.OFFSET),
		}, CONSTANTS.SPEED_ANIMATION);
	});
});