$(document).ready(function() {
    swal("Before We Begin...", "All State Capitals MUST BE SPELLED CORRECTLY with CORRECT CAPITALIZATION; YOU ANSWER COULD BE WRONG", "warning");
    $("#a1").css("color", "#FF0008").fadeIn(5000);
    $("#a2").css("color", "#1115FF").fadeIn(5000);
    $("#a3").css("color", "#FFCF00").fadeIn(5000);
    $("#a4").css("color", "#0EFF00").fadeIn(5000);
    $("#a5").css("color", "#FF8100").fadeIn(5000);
    $("#a6").css("color", "#6727FF").fadeIn(5000);
    $("#a7").css("color", "#000000").fadeIn(5000);
    $("#a8").css("color", "#5D341E").fadeIn(5000);
    $("#a9").css("color", "#FE49FF").fadeIn(5000);
    $("#a10").css("color", "#6F6AFF").fadeIn(5000);
    $("#a11").css("color", "#BB5A36").fadeIn(5000);
    $("#a12").css("color", "#6D5DBB").fadeIn(5000);
    $("#a13").css("color", "#FF0008").fadeIn(5000);
    $("#a14").css("color", "#1115FF").fadeIn(5000);
    $("#a15").css("color", "#FFCF00").fadeIn(5000);
    $("#a16").css("color", "#FF0008").fadeIn(5000);
    $("#a17").css("color", "#FF0008").fadeIn(5000);
    $("#a18").css("color", "#FF0008").fadeIn(5000);
    $("#a19").css("color", "#FF0008").fadeIn(5000);
    $("#a20").css("color", "#FF0008").fadeIn(5000);
    $("#a21").css("color", "#FF0008").fadeIn(5000);
    $("#a22").css("color", "#FF0008").fadeIn(5000);
    $("#a23").css("color", "#FF0008").fadeIn(5000);
    $("#a24").css("color", "#FF0008").fadeIn(5000);
    $("#a25").css("color", "#FF0008").fadeIn(5000);
    $("#a26").css("color", "#FF0008").fadeIn(5000);
    $("#a27").css("color", "#FF0008").fadeIn(5000);
    $("#a28").css("color", "#FF0008").fadeIn(5000);
    $("#a29").css("color", "#FF0008").fadeIn(5000);
    $("#a30").css("color", "#FF0008").fadeIn(5000);
    $("#a31").css("color", "#FF0008").fadeIn(5000);
    $("#a32").css("color", "#FF0008").fadeIn(5000);
    $("#a33").css("color", "#FF0008").fadeIn(5000);
    $("#a34").css("color", "#FF0008").fadeIn(5000);
    $("#a35").css("color", "#FF0008").fadeIn(5000);
    $("#a36").css("color", "#FF0008").fadeIn(5000);
    $("#a37").css("color", "#FF0008").fadeIn(5000);
    $("#a38").css("color", "#FF0008").fadeIn(5000);
    $("#a39").css("color", "#FF0008").fadeIn(5000);
    $("#a40").css("color", "#FF0008").fadeIn(5000);
    $("#a41").css("color", "#FF0008").fadeIn(5000);
    $("#a42").css("color", "#FF0008").fadeIn(5000);
    $("#a43").css("color", "#FF0008").fadeIn(5000);
    $("#a44").css("color", "#FF0008").fadeIn(5000);
    $("#a45").css("color", "#FF0008").fadeIn(5000);
    $("#a46").css("color", "#FF0008").fadeIn(5000);
    $("#a47").css("color", "#FF0008").fadeIn(5000);
    $("#a48").css("color", "#FF0008").fadeIn(5000);
    $("#a49").css("color", "#FF0008").fadeIn(5000);
    $("#a50").css("color", "#FF0008").fadeIn(5000);
    $("#lights_off").click(function() {
        $("body").css({
            "background-color": "black"
        });
        $("h1").css({
            "color": "white"
        });
    });

    $("#lights_on").click(function() {
        $("body").css({
            "background-color": "white"
        });
        $("h1").css({
            "color": "black"
        });
    });

    // Button, State Picture, and Input Field for the State of Alaska
    $("#button0").click(function() {
        var pointAlaska = 50;
        if ($("input").val() == "Juneau" && "juneau") {
            $("#score").append(pointAlaska);
            $.playSound('mp3_capitals/correct');
            swal("Correct", "Continue To the Next One", "success");
            $("#space0").fadeOut();
            $("#space1").fadeIn(3000);
        } else {
            $.playSound('mp3_capitals/TPIR');
            swal("Incorrect", "Try Again", "error");
            $("#score").remove(pointAlaska);
        }

        if ($("input").val() == false ){
            swal("The Text Field Has No Data In It!", "", "warning");
        }


        // Button, State Picture, and Input Field for the State of Colorado
    });
    $("#button1").click(function() {
        var pointColorado = 25;
        var pointTotal = pointColorado + pointAlaska;
        if ($("#input1").val() == "Denver") {
            $("#score").remove()
            $("#score").append(pointTotal);
            $.playSound('mp3_capitals/correct');
            swal("Colorect", "Let's Move To Denver", "success");
            $("#space1").fadeOut();
            $("#space2").fadeIn(3000);
        } else {
            $.playSound('mp3_capitals/WOF');
            swal("Nope", "Go Again", "error");
        }
    });

    // Button, State Picture, and Input Field for the State of Georgia
    $("#button2").click(function() {
        if ($("#input2").val() == "Atlanta") {
            $.playSound('mp3_capitals/correct');
            swal("Excellent", "Lets Fly To Atlanta", "success");
            $("#space2").fadeOut();
            $("#space3").fadeIn(3000);
        } else {
            $.playSound('mp3_capitals/fail')
            swal("Ehhhh!", "Wrong Answer, Doc!", "error");
        }
    });

    // Button, State Picture, and Input Field for the State of Alabama
    $("#button3").click(function() {
        if ($("#input3").val() == "Montgomery") {
            $.playSound('mp3_capitals/correct');
            swal("Hooray", "Goin' Down South!", "success");
            $("#space3").fadeOut();
            $("#space4").fadeIn(3000);
        } else {
            $.playSound('mp3_capitals/TPIR')
            swal("Ehhhh!", "Wrong Answer, Doc!", "error");
        }
    });

    // Button, State Picture, and Input Field for the State of Kentucky
    $("#button4").click(function() {
        if ($("#input4").val() == "Frankfort") {
            $.playSound('mp3_capitals/correct');
            swal("Awesome"," ", "success");
            $("#space4").fadeOut();
            $("#space5").fadeIn(3000);
        } else {
            $.playSound('mp3_capitals/WOF')
            swal("Ehhhh!", "Wrong Answer, Doc!", "error");
        }
    });

    // Button, State Picture, and Input Field for the State of Florida
    $("#button5").click(function() {
        if ($("#input5").val() == "Tallahassee") {
            $.playSound('mp3_capitals/correct');
            swal("Awesome"," ", "success");
            $("#space5").fadeOut();
            $("#space6").fadeIn(3000);
        } else {
            $.playSound('mp3_capitals/fail')
            swal("Ehhhh!", "Wrong Answer, Doc!", "error");
        }
    });

    // Button, State Picture, and Input Field for the State of Connecticut
    $("#button6").click(function() {
        if ($("#input6").val() == "Hartford") {
            $.playSound('mp3_capitals/correct');
            swal("Nice!", " ", "success");
            $("#space6").fadeOut();
            $("#space7").fadeIn(3000);
        } else {
            $.playSound('mp3_capitals/TPIR')
            swal("Ehhhh!", "Wrong Answer, Doc!", "error");
        }
    });

    // Button, State Picture, and Input Field for the State of Maine
    $("#button7").click(function() {
        if ($("#input7").val() == "Augusta") {
            $.playSound('mp3_capitals/correct');
            swal("Spectacular!"," ", "success");
            $("#space7").fadeOut();
            $("#space8").fadeIn(3000);
        } else {
            $.playSound('mp3_capitals/WOF')
            swal("NO, NO, NO!", "Wrong Answer, Doc!", "error");
        }
    });

    // Button, State Picture, and Input Field for the State of Louisiana
    $("#button8").click(function() {
        if ($("#input8").val() == "Baton Rouge") {
            $.playSound('mp3_capitals/correct');
            swal("Tremendous Job!"," ", "success");
            $("#space8").fadeOut();
            $("#space9").fadeIn(3000);
        } else {
            $.playSound('mp3_capitals/fail')
            swal("Ehhhh!", "Wrong Answer, Doc!", "error");
        }
    });

    // Button, State Picture, and Input Field for the State of Wyoming
    $("#button9").click(function() {
        if ($("#input9").val() == "Cheyenne") {
            $.playSound('mp3_capitals/correct');
            swal("Awesome"," ", "success");
            $("#space9").fadeOut();
            $("#space10").fadeIn(3000);
        } else {
            $.playSound('mp3_capitals/WOF')
            swal("Ehhhh!", "Wrong Answer, Doc!", "error");
        }
    });

    // Button, State Picture, and Input Field for the State of Maryland
    $("#button10").click(function() {
        if ($("#input10").val() == "Annapolis") {
            $.playSound('mp3_capitals/correct');
            swal("Cool!"," ", "success");
            $("#space10").fadeOut();
            $("#space11").fadeIn(3000);
        } else {
            $.playSound('mp3_capitals/fail')
            swal("Ehhhh!", "Wrong Answer, Doc!", "error");
        }
    });

    // Button, State Picture, and Input Field for the State of Vermont
    $("#button11").click(function() {
        if ($("#input11").val() == "Montpeiler") {
            $.playSound('mp3_capitals/correct');
            swal("Awesome"," ", "success");
            $("#space11").fadeOut();
            $("#space12").fadeIn(3000);
        } else {
            $.playSound('mp3_capitals/TPIR')
            swal("Ehhhh!", "Wrong Answer, Doc!", "error");
        }
    });

    // Button, State Picture, and Input Field for the State of Arizona
    $("#button12").click(function() {
        if ($("#input12").val() == "Phoenix") {
            $.playSound('mp3_capitals/correct');
            swal("Awesome"," ", "success");
            $("#space12").fadeOut();
            $("#space13").fadeIn(3000);
        } else {
            $.playSound('mp3_capitals/WOF')
            swal("Ehhhh!", "Wrong Answer, Doc!", "error");
        }
    });

    // Button, State Picture, and Input Field for the State of Mississippi
    $("#button13").click(function() {
        if ($("#input13").val() == "Jackson") {
            $.playSound('mp3_capitals/correct');
            swal("Awesome"," ", "success");
            $("#space13").fadeOut();
            $("#space14").fadeIn(3000);
        } else {
            $.playSound('mp3_capitals/fail')
            swal("Ehhhh!", "Wrong Answer, Doc!", "error");
        }
    });

    // Button, State Picture, and Input Field for the State of Hawaii
    $("#button14").click(function() {
        if ($("#input14").val() == "Honolulu") {
            $.playSound('mp3_capitals/correct');
            swal("Awesome"," ", "success");
            $("#space14").fadeOut();
            $("#space15").fadeIn(3000);
        } else {
            $.playSound('mp3_capitals/TPIR')
            swal("Ehhhh!", "Wrong Answer, Doc!", "error");
        }
    });

    // Button, State Picture, and Input Field for the State of Missouri
    $("#button15").click(function() {
        if ($("#input15").val() == "St. Louis") {
            $.playSound('mp3_capitals/correct');
            swal("Awesome"," ", "success");
            $("#space15").fadeOut();
            $("#space16").fadeIn(3000);
         } else {
            $.playSound('mp3_capitals/TPIR')
            swal("Ehhhh!", "Wrong Answer, Doc!", "error");
        }
    });

    // Button, State Picture, and Input Field for the State of Texas
    $("#button16").click(function() {
        if ($("#input16").val() == "Austin") {
            $.playSound('mp3_capitals/correct');
            swal("Awesome"," ", "success");
            $("#space16").fadeOut();
            $("#space17").fadeIn(3000);
         } else {
            $.playSound('mp3_capitals/TPIR')
            swal("Ehhhh!", "Wrong Answer, Doc!", "error");
        }
    });

    // Button, State Picture, and Input Field for the State of Ohio
    $("#button17").click(function() {
        if ($("#input17").val() == "Columbus") {
            $.playSound('mp3_capitals/correct');
            swal("Awesome"," ", "success");
            $("#space17").fadeOut();
            $("#space18").fadeIn(3000);
         } else {
            $.playSound('mp3_capitals/TPIR')
            swal("Ehhhh!", "Wrong Answer, Doc!", "error");
        }
    });

    // Button, State Picture, and Input Field for the State of Montana
    $("#button18").click(function() {
        if ($("#input18").val() == "Helena") {
            $.playSound('mp3_capitals/correct');
            swal("Awesome"," ", "success");
            $("#space18").fadeOut();
            $("#space19").fadeIn(3000);
         } else {
            $.playSound('mp3_capitals/TPIR')
            swal("Ehhhh!", "Wrong Answer, Doc!", "error");
        }
    });

    // Button, State Picture, and Input Field for the State of Arkansas
    $("#button19").click(function() {
        if ($("#input19").val() == "Little Rock") {
            $.playSound('mp3_capitals/correct');
            swal("Awesome"," ", "success");
            $("#space19").fadeOut();
            $("#space20").fadeIn(3000);
         } else {
            $.playSound('mp3_capitals/TPIR')
            swal("Ehhhh!", "Wrong Answer, Doc!", "error");
        }
    });

    // Button, State Picture, and Input Field for the State of Oklahoma
    $("#button20").click(function() {
        if ($("#input20").val() == "Oklahoma City") {
            $.playSound('mp3_capitals/correct');
            swal("Awesome"," ", "success");
            $("#space20").fadeOut();
            $("#space21").fadeIn(3000);
         } else {
            $.playSound('mp3_capitals/TPIR')
            swal("Ehhhh!", "Wrong Answer, Doc!", "error");
        }
    });

    // Button, State Picture, and Input Field for the State of Washington
    $("#button21").click(function() {
        if ($("#input21").val() == "Seattle") {
            $.playSound('mp3_capitals/correct');
            swal("Awesome"," ", "success");
            $("#space21").fadeOut();
            $("#space22").fadeIn(3000);
         } else {
            $.playSound('mp3_capitals/TPIR')
            swal("Ehhhh!", "Wrong Answer, Doc!", "error");
        }
    });

    // Button, State Picture, and Input Field for the State of Minnesota
    $("#button22").click(function() {
        if ($("#input22").val() == "Saint Paul") {
            $.playSound('mp3_capitals/correct');
            swal("Awesome"," ", "success");
            $("#space22").fadeOut();
            $("#space23").fadeIn(3000);
         } else {
            $.playSound('mp3_capitals/TPIR')
            swal("Ehhhh!", "Wrong Answer, Doc!", "error");
        }
    });

    // Button, State Picture, and Input Field for the State of South Dakota
    $("#button23").click(function() {
        if ($("#input23").val() == "Pierre") {
            $.playSound('mp3_capitals/correct');
            swal("Awesome"," ", "success");
            $("#space23").fadeOut();
            $("#space24").fadeIn(3000);
         } else {
            $.playSound('mp3_capitals/TPIR')
            swal("Ehhhh!", "Wrong Answer, Doc!", "error");
        }
    });

    // Button, State Picture, and Input Field for the State of Idaho
    $("#button24").click(function() {
        if ($("#input24").val() == "Boise") {
            $.playSound('mp3_capitals/correct');
            swal("Awesome"," ", "success");
            $("#space24").fadeOut();
            $("#space25").fadeIn(3000);
         } else {
            $.playSound('mp3_capitals/TPIR')
            swal("Ehhhh!", "Wrong Answer, Doc!", "error");
        }
    });

    // Button, State Picture, and Input Field for the State of Nebraska
    $("#button25").click(function() {
        if ($("#input25").val() == "Lincoln") {
            $.playSound('mp3_capitals/correct');
            swal("Awesome"," ", "success");
            $("#space25").fadeOut();
            $("#space26").fadeIn(3000);
         } else {
            $.playSound('mp3_capitals/TPIR')
            swal("Ehhhh!", "Wrong Answer, Doc!", "error");
        }
    });

    // Button, State Picture, and Input Field for the State of Utah
    $("#button26").click(function() {
        if ($("#input26").val() == "Salt Lake City") {
            $.playSound('mp3_capitals/correct');
            swal("Awesome"," ", "success");
            $("#space26").fadeOut();
            $("#space27").fadeIn(3000);
         } else {
            $.playSound('mp3_capitals/TPIR')
            swal("Ehhhh!", "Wrong Answer, Doc!", "error");
        }
    });

    // Button, State Picture, and Input Field for the State of Tennessee
    $("#button27").click(function() {
        if ($("#input27").val() == "Nashville") {
            $.playSound('mp3_capitals/correct');
            swal("Awesome"," ", "success");
            $("#space27").fadeOut();
            $("#space28").fadeIn(3000);
         } else {
            $.playSound('mp3_capitals/TPIR')
            swal("Ehhhh!", "Wrong Answer, Doc!", "error");
        }
    });

    // Button, State Picture, and Input Field for the State of Massachusetts
    $("#button28").click(function() {
        if ($("#input28").val() == "Boston") {
            $.playSound('mp3_capitals/correct');
            swal("Awesome"," ", "success");
            $("#space28").fadeOut();
            $("#space29").fadeIn(3000);
         } else {
            $.playSound('mp3_capitals/TPIR')
            swal("Ehhhh!", "Wrong Answer, Doc!", "error");
        }
    });

    // Button, State Picture, and Input Field for the State of West Virginia
    $("#button29").click(function() {
        if ($("#input29").val() == "Charleston") {
            $.playSound('mp3_capitals/correct');
            swal("Awesome"," ", "success");
            $("#space29").fadeOut();
            $("#space30").fadeIn(3000);
         } else {
            $.playSound('mp3_capitals/TPIR')
            swal("Ehhhh!", "Wrong Answer, Doc!", "error");
        }
    });

    // Button, State Picture, and Input Field for the State of Delaware
    $("#button30").click(function() {
        if ($("#input30").val() == "Dover") {
            $.playSound('mp3_capitals/correct');
            swal("Awesome"," ", "success");
            $("#space30").fadeOut();
            $("#space31").fadeIn(3000);
         } else {
            $.playSound('mp3_capitals/TPIR')
            swal("Ehhhh!", "Wrong Answer, Doc!", "error");
        }
    });

    // Button, State Picture, and Input Field for the State of Iowa
    $("#button31").click(function() {
        if ($("#input31").val() == "Des Moines") {
            $.playSound('mp3_capitals/correct');
            swal("Awesome"," ", "success");
            $("#space31").fadeOut();
            $("#space32").fadeIn(3000);
         } else {
            $.playSound('mp3_capitals/TPIR')
            swal("Ehhhh!", "Wrong Answer, Doc!", "error");
        }
    });

    // Button, State Picture, and Input Field for the State of Nevada
    $("#button32").click(function() {
        if ($("#input32").val() == "Carson City") {
            $.playSound('mp3_capitals/correct');
            swal("Awesome"," ", "success");
            $("#space32").fadeOut();
            $("#space33").fadeIn(3000);
         } else {
            $.playSound('mp3_capitals/TPIR')
            swal("Ehhhh!", "Wrong Answer, Doc!", "error");
        }
    });

    // Button, State Picture, and Input Field for the State of Pennsylvania
    $("#button33").click(function() {
        if ($("#input33").val() == "Harrisburg") {
            $.playSound('mp3_capitals/correct');
            swal("Awesome"," ", "success");
            $("#space33").fadeOut();
            $("#space34").fadeIn(3000);
         } else {
            $.playSound('mp3_capitals/TPIR')
            swal("Ehhhh!", "Wrong Answer, Doc!", "error");
        }
    });

    // Button, State Picture, and Input Field for the State of Kansas
    $("#button34").click(function() {
        if ($("#input34").val() == "Topeka") {
            $.playSound('mp3_capitals/correct');
            swal("Awesome"," ", "success");
            $("#space34").fadeOut();
            $("#space35").fadeIn(3000);
         } else {
            $.playSound('mp3_capitals/TPIR')
            swal("Ehhhh!", "Wrong Answer, Doc!", "error");
        }
    });

    // Button, State Picture, and Input Field for the State of California
    $("#button35").click(function() {
        if ($("#input35").val() == "Sacramento") {
            $.playSound('mp3_capitals/correct');
            swal("Awesome"," ", "success");
            $("#space35").fadeOut();
            $("#space36").fadeIn(3000);
         } else {
            $.playSound('mp3_capitals/TPIR')
            swal("Ehhhh!", "Wrong Answer, Doc!", "error");
        }
    });

    // Button, State Picture, and Input Field for the State of Michigan
    $("#button36").click(function() {
        if ($("#input36").val() == "Detroit") {
            $.playSound('mp3_capitals/correct');
            swal("Awesome"," ", "success");
            $("#space36").fadeOut();
            $("#space37").fadeIn(3000);
         } else {
            $.playSound('mp3_capitals/TPIR')
            swal("Ehhhh!", "Wrong Answer, Doc!", "error");
        }
    });

    // Button, State Picture, and Input Field for the State of Illinois
    $("#button37").click(function() {
        if ($("#input37").val() == "Chicago") {
            $.playSound('mp3_capitals/correct');
            swal("Awesome"," ", "success");
            $("#space37").fadeOut();
            $("#space38").fadeIn(3000);
         } else {
            $.playSound('mp3_capitals/TPIR')
            swal("Ehhhh!", "Wrong Answer, Doc!", "error");
        }
    });

    // Button, State Picture, and Input Field for the State of Virginia
    $("#button38").click(function() {
        if ($("#input38").val() == "Richmond") {
            $.playSound('mp3_capitals/correct');
            swal("Awesome"," ", "success");
            $("#space38").fadeOut();
            $("#space39").fadeIn(3000);
         } else {
            $.playSound('mp3_capitals/TPIR')
            swal("Ehhhh!", "Wrong Answer, Doc!", "error");
        }
    });

    // Button, State Picture, and Input Field for the State of Rhode Island
    $("#button39").click(function() {
        if ($("#input39").val() == "Providence") {
            $.playSound('mp3_capitals/correct');
            swal("Awesome"," ", "success");
            $("#space39").fadeOut();
            $("#space40").fadeIn(3000);
         } else {
            $.playSound('mp3_capitals/TPIR')
            swal("Ehhhh!", "Wrong Answer, Doc!", "error");
        }
    });

    // Button, State Picture, and Input Field for the State of Oregon
    $("#button40").click(function() {
        if ($("#input40").val() == "Salem") {
            $.playSound('mp3_capitals/correct');
            swal("Awesome"," ", "success");
            $("#space40").fadeOut();
            $("#space41").fadeIn(3000);
         } else {
            $.playSound('mp3_capitals/TPIR')
            swal("Ehhhh!", "Wrong Answer, Doc!", "error");
        }
    });

    // Button, State Picture, and Input Field for the State of Indiana
    $("#button41").click(function() {
        if ($("#input41").val() == "Indianapolis") {
            $.playSound('mp3_capitals/correct');
            swal("Awesome"," ", "success");
            $("#space41").fadeOut();
            $("#space42").fadeIn(3000);
         } else {
            $.playSound('mp3_capitals/TPIR')
            swal("Ehhhh!", "Wrong Answer, Doc!", "error");
        }
    });

    // Button, State Picture, and Input Field for the State of New Jersey
    $("#button42").click(function() {
        if ($("#input42").val() == "Trenton") {
            $.playSound('mp3_capitals/correct');
            swal("Awesome"," ", "success");
            $("#space42").fadeOut();
            $("#space43").fadeIn(3000);
         } else {
            $.playSound('mp3_capitals/TPIR')
            swal("Ehhhh!", "Wrong Answer, Doc!", "error");
        }
    });

    // Button, State Picture, and Input Field for the State of Wisconsin
    $("#button43").click(function() {
        if ($("#input43").val() == "Madison") {
            $.playSound('mp3_capitals/correct');
            swal("Awesome"," ", "success");
            $("#space43").fadeOut();
            $("#space44").fadeIn(3000);
         } else {
            $.playSound('mp3_capitals/TPIR')
            swal("Ehhhh!", "Wrong Answer, Doc!", "error");
        }
    });

    // Button, State Picture, and Input Field for the State of North Carolina
    $("#button44").click(function() {
        if ($("#input44").val() == "Raleigh") {
            $.playSound('mp3_capitals/correct');
            swal("Awesome"," ", "success");
            $("#space44").fadeOut();
            $("#space45").fadeIn(3000);
         } else {
            $.playSound('mp3_capitals/TPIR')
            swal("Ehhhh!", "Wrong Answer, Doc!", "error");
        }
    });

    // Button, State Picture, and Input Field for the State of New Hampshire
    $("#button45").click(function() {
        if ($("#input45").val() == "Concord") {
            $.playSound('mp3_capitals/correct');
            swal("Awesome"," ", "success");
            $("#space45").fadeOut();
            $("#space46").fadeIn(3000);
         } else {
            $.playSound('mp3_capitals/TPIR')
            swal("Ehhhh!", "Wrong Answer, Doc!", "error");
        }
    });

    // Button, State Picture, and Input Field for the State of New York
    $("#button46").click(function() {
        if ($("#input46").val() == "Albany") {
            swal("Awesome"," ", "success");
            $("#space46").fadeOut();
            $("#space47").fadeIn(3000);
         } else {
            $.playSound('mp3_capitals/TPIR')
            swal("Ehhhh!", "Wrong Answer, Doc!", "error");
        }
    });

    // Button, State Picture, and Input Field for the State of South Carolina
    $("#button47").click(function() {
        if ($("#input47").val() == "Columbia") {
            swal("Awesome"," ", "success");
            $("#space47").fadeOut();
            $("#space48").fadeIn(3000);
         } else {
            $.playSound('mp3_capitals/TPIR')
            swal("Ehhhh!", "Wrong Answer, Doc!", "error");
        }
    });

    // Button, State Picture, and Input Field for the State of North Dakota
    $("#button48").click(function() {
        if ($("#input48").val() == "Bismarck") {
            swal("Awesome"," ", "success");
            $("#space48").fadeOut();
            $("#space49").fadeIn(3000);
         } else {
            $.playSound('mp3_capitals/TPIR')
            swal("Ehhhh!", "Wrong Answer, Doc!", "error");
        }
    });

    // Button, State Picture, and Input Field for the State of New Mexico
    $("#button49").click(function() {
        if ($("#input49").val() == "Santa Fe") {
            swal("Splendid", "success");
            $("#space49").fadeOut();
        } else {
            swal("Wah, wah, wah!", "Wrong", "error");
        }
    });

    $("#exit").click(function() {
        swal({
                title: "Are you sure?",
                text: "This page will be refreshed and you will lose your progress!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, Leave",
                closeOnConfirm: false
            },
            function() {
                swal("Thanks for Playing!!!", "To Play Again, For Mac: Type 'Command + R',  For Windows: Type 'fn + F5'")
            });
    });

    $("#hint").click(function() {
        swal("Hint:", "Nickname: 'The Last Frontier'", "warning");
    });

});
