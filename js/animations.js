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
    	if($("#input4").val() == "Dodge") {
    		var value = parseInt($(".score").text(), 10) + 1;
    		$(".score").text(value);
    		$("am4_cropped").fadeOut();
    		$("am5_cropped").fadeIn(3000);
    		swal({
    			title: "That's Right, Now Get Outta 'Dodge' ",
    			text: "Dodge Is Correct",
    			imageUrl: "car_images/vehicle_images_american/dodge1.png"
    		});

    	} else {
    		swal("Nope!, Try Again", "error")
    		var value = parseInt($(".score").text(), 10) - 1;
    		$(".score").text(value)
    	}
    })
});
