$(document).ready(function() {
    $("#button1").click(function() {
        if ($("#input1").val() == "Buick") {
        	var value = parseInt($(".score").text(), 10) + 1;
            $(".score").text(value);
            $("#am1_cropped").fadeOut();
            $("#am2_cropped").fadeIn(3000);
            swal({
                title: "Sweet!",
                text: "Buick Is Correct",
                imageUrl: "car_images/vehicle_images_american/buick1.png"
            });

        } else {
            swal("Nope!", "error")
            var value = parseInt($(".score").text(), 10) - 1;
            $(".score").text(value);
        }
    });

    $("#button2").click(function() {
    	if($("#input2").val() == "Cadillac") {
    		var value = parseInt($(".score").text(), 10) + 1;
    		$(".score").text(value);
    		$("#am2_cropped").fadeOut();
    		$("#am3_cropped").fadeIn(3000);
    		swal({
    			title: "Congrats!",
    			text:"Cadillac Is Correct!",
    			imageUrl: "car_images/vehicle_images_american/cadillac1.png"
    		});

    	} else {
    		swal("No, no, no!", "error")
    		var value = parseInt($(".score").text(), 10) - 1;
    		$(".score").text(value);
    	}
    });

    $("#button3").click(function() {
    	if($("#input3").val() == "Chevrolet") {
    		var value = parseInt($(".score").text(), 10) + 1;
    		$(".score").text(value);
    		$("#am3_cropped").fadeOut();
    		$("#am4_cropped").fadeIn(3000);
    		swal({
    			title: "Excellent!",
    			text: "Chevrolet is Correct!",
    			imageUrl: "car_images/vehicle_images_american/chevrolet1.png"
    		});

    	} else {
    		swal("Um....No, that's wrong!", "error")
    		var value = parseInt($(".score").text(), 10) - 1;
    		$(".score").text(value);
    	}
    });

    $("#button4").click(function() {
        if($("#input4").val() == "Chrysler") {
            var value = parseInt($(".score").text(), 10) + 1;
            $(".score").text(value);
            $("#am4_cropped").fadeOut();
            $("#am5_cropped").fadeIn(3000);
            swal({
                title: "That's Right! ",
                text: "Chrysler Is Correct",
                imageUrl: "car_images/vehicle_images_american/chrysler1.png"
            });

        } else {
            swal("Nope!, Try Again", 'error')
            var value = parseInt($(".score").text(), 10) - 1;
            $(".score").text(value)
        }
    });

    $("#button5").click(function() {
    	if($("#input5").val() == "Dodge") {
    		var value = parseInt($(".score").text(), 10) + 1;
    		$(".score").text(value);
    		$("#am5_cropped").fadeOut();
    		$("#am6_cropped").fadeIn(3000);
    		swal({
    			title: "That's Right, Now Get Outta 'Dodge' ",
    			text: "Dodge Is Correct",
    			imageUrl: "car_images/vehicle_images_american/dodge1.png"
    		});

    	} else {
    		swal("Nope!, Try Again", 'error')
    		var value = parseInt($(".score").text(), 10) - 1;
    		$(".score").text(value)
    	}
    });

    $("#button6").click(function() {
        if($("#input6").val() == "Ford") {
            var value = parseInt($(".score").text(), 10) + 1;
            $(".score").text(value);
            $("#am6_cropped").fadeOut();
            $("#am7_cropped").fadeIn(3000);
            swal({
                title: "Congratulations, Give Henry Ford Some Credit!",
                text: "Ford Is Correct",
                imageUrl: "car_images/vehicle_images_american/ford1.png"
            });

        } else {
            swal("Nope", 'error')
            var value = parseInt($(".score").text(), 10) - 1
            $(".score").text(value)
        }
    });

    $("#button7").click(function() {
        if($("#input7").val() == "Jeep") {
            var value = parseInt($(".score").text(), 10) + 1
            $(".score").text(value)
            $("#am7_cropped").fadeOut();
            $("#am8_cropped").fadeIn(3000);
            swal({
                title: "Excellent!",
                text: "Jeep Is Correct.....For Jeep Equals Extra Predators",
                imageUrl: "car_images/vehicle_images_american/jeep1.png"
            });

        } else {
           swal("Nope", 'error')
            var value = parseInt($(".score").text(), 10) - 1
            $(".score").text(value)
        }
    });

    $("#button8").click(function() {
        if($("#input8").val() == "Lincoln") {
            var value = parseInt($(".score").text(), 10) + 1
            $(".score").text(value)
            $("#am8_cropped").fadeOut();
            $("#am9_cropped").fadeIn(3000);
            swal({
                title: "Excellent!",
                text: "This Is Abe Lincoln's Favorite Car!",
                imageUrl: "car_images/vehicle_images_american/lincoln1.png"
            });

        } else {
           swal("Nope", 'error')
            var value = parseInt($(".score").text(), 10) - 1
            $(".score").text(value)
        }
    });

    $("#button9").click(function() {
        if($("#input9").val() == "Tesla") {
            var value = parseInt($(".score").text(), 10) + 1
            $(".score").text(value)
            $("#am9_cropped").hide();
            swal({
                title: "Excellent!",
                text: "Very Unknown, but rapid-fire fast cars",
                imageUrl: "car_images/vehicle_images_american/tesla1.png"
            });

            $("#points").show(5000);

        } else {
           swal("Nope", 'error')
            var value = parseInt($(".score").text(), 10) - 1
            $(".score").text(value)
        }
    });
});
