// Download the exercise files.
// Alter the stylesheet to hide the contents of the page initially. When the page is loaded, fade in the contents slowly.

var $p = $("p");

$(document).ready(function(){
	$("body").fadeIn();

// Give each paragraph a yellow background only when the mouse is over it.
	$p.on("mouseenter", function() {
		$(this).addClass("old-yeller");
	});

	$p.on("mouseleave", function() {
		$(this).removeClass("old-yeller");
	});

// Set up a click event on every <h2> element that simultaneously fades it to 25 percent opacity while growing its left-hand margin to 20px. Then, when this animation is complete, fade the speech text to 50 percent opacity.

	$("h2").on("click", function(){
		$(this).animate({
			"opacity": "0.25",
			"margin-left": "20px"
		}, 400, "swing", function(){
			$(".speech").animate({
					"opacity": "0.5"
			});
		});

});

// Bonus: Make the style switcher work.

		$("#switcher-default").on("click", function() {
			$("body").css("font-size", "62.5%");

		});

		$("#switcher-large").on("click", function() {
			$("body").css("font-size", "100%");

		});

		$("#switcher-small").on("click", function() {
			$("body").css("font-size", "50%");

		});

});





