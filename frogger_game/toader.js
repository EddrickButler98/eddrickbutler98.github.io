var pane = $('#pane'),
    box = $('#box'),
    car1 = $('#car1'),
    car2 = $('#car2'),
    bike = $('#bike'),
    boat = $('#boat'),
    paneW = pane.width(),
    maxWidth = pane.width() - box.width(),
    maxHeight = pane.height() - box.height(),
    carW = pane.width() - car1.width();
    carX = pane.width() - car2.width();
    bikeY = pane.width() - bike.width();
    boat_X = pane.width() - boat.width();
    keysPressed = {},
    distancePerIteration = 1,
    alertUp = false,
    won = false;

function calculateNewValue(oldValue, keyCode1, keyCode2) {
    var newValue = parseInt(oldValue, 10) -
        (keysPressed[keyCode1] ? distancePerIteration : 0) +
        (keysPressed[keyCode2] ? distancePerIteration : 0);
    if (newValue === 0 && keyCode1 === 38) {
        if (!won) {
            won = true;
            alertUp = true;
            keysPressed = {};
            swal({
                title: "TOAD-A-LY",
                text: "You won!",
                imageUrl: "http://www.clipartkid.com/images/484/jumping-frog-clip-art-clipart-panda-free-clipart-images-Ma6vfB-clipart.png"
            }, function() {
              alertUp = false;
            });

            box.css("left", "235px");
            won = false;
            return 480;
        }
    };
    return newValue < 0 ? 0 : newValue > maxHeight ? maxHeight : newValue;
}

function car_hits_frog(car, frog) {
    var car_top = parseInt(car.position().top, 10);
    var car_bottom = parseInt(car_top + car.height(), 10);
    var car_left = parseInt(car.position().left, 10);
    var car_right = parseInt(car_left + car.width(), 10);

    var cy = (car_top + car_bottom) / 2;
    var cx = (car_left + car_right) / 2;

    var box_top = parseInt(box.position().top, 10);
    var box_bottom = parseInt(box_top + box.height(), 10);
    var box_left = parseInt(box.position().left, 10);
    var box_right = parseInt(box_left + box.width(), 10);

    var by = (box_top + box_bottom) / 2;
    var bx = (box_left + box_right) / 2;

    return Math.abs(cy - by) < 10 && Math.abs(cx - bx) < 10;
}

function move_car(oldValue, distance) {
    var newValue = parseInt(oldValue, 10) + distance;

    var box_top = parseInt(box.position().top, 10);
    var box_bottom = parseInt(box_top + box.height(), 10);
    var box_left = parseInt(box.position().left, 10);
    var box_right = parseInt(box_left + box.width(), 10);

    var car_top = parseInt(car1.position().top, 1);
    var car_bottom = parseInt(car_top + car1.height(), 1);
    var car_left = parseInt(car1.position().left, 1);
    var car_right = parseInt(car_left + car1.width(), 1);

    var car_top = parseInt(car2.position().top, 1);
    var car_bottom = parseInt(car_top + car2.height(), 1);
    var car_left = parseInt(car2.position().right, 1);
    var car_right = parseInt(car_left + car2.width(), 1);

    if (car_hits_frog(car1, box) || car_hits_frog(car2, box)) {
        takeAwayLife();
        takeAwayLife();
        alertUp = true;
        keysPressed = {};
        swal({
            title: "YOU CROAKED",
            text: "How Ribbiting....",
            imageUrl: "http://3kq1ia1xtss81c6fb13n3q6d.wpengine.netdna-cdn.com/wp-content/uploads/2013/07/dead-frog.png"
        }, function() {
          alertUp = false;
        });
        box.css("left", "235px");
        box.css("top", "480px");
        return 0;
    }


    return newValue < 0 ? carW - newValue : newValue > carW ? 0 : newValue;
}

function move_bike(oldValue, distance) {
    var newValue = parseInt(oldValue, 10) + distance;

    var box_top = parseInt(box.position().top, 10);
    var box_bottom = parseInt(box_top + box.height(), 10);
    var box_left = parseInt(box.position().left, 10);
    var box_right = parseInt(box_left + box.width(), 10);

    var bike_top = parseInt(bike.position().top, 10);
    var bike_bottom = parseInt(bike_top + bike.height(), 10);
    var bike_left = parseInt(bike.position().left, 10);
    var bike_right = parseInt(bike_left + bike.width(), 10);

    if (car_hits_frog(bike, box)) {
        takeAwayLife();
        takeAwayLife();
        alertUp = true;
        keysPressed = {};
        swal({
            title: "How'd you BIKE that?",
            text: "Looks like you're having a WHEELIE bad time!",
            imageUrl: "http://1.bp.blogspot.com/_8H7tRK4d-0Y/Sg8y338UEaI/AAAAAAAADTU/9HVhkUONZr8/s320/frog-on-crutches.png"
        }, function() {
          alertUp = false;
        });
        box.css("left", "235px");
        box.css("top", "480px");
        return 0;
    }


    return newValue < 0 ? bikeY - newValue : newValue > bikeY ? 0 : newValue;
}

function move_boat(oldValue, distance) {
    var newValue = parseInt(oldValue, 10) + distance;

    var box_top = parseInt(box.position().top, 10);
    var box_bottom = parseInt(box_top + box.height(), 10);
    var box_left = parseInt(box.position().left, 10);
    var box_right = parseInt(box_left + box.width(), 10);

    var boat_top = parseInt(boat.position().top, 10);
    var boat_bottom = parseInt(boat_top + boat.height(), 10);
    var boat_left = parseInt(boat.position().left, 10);
    var boat_right = parseInt(boat_left + boat.width(), 10);

    if (car_hits_frog(boat, box)) {
        takeAwayLife();
        takeAwayLife();
        alertUp = true;
        keysPressed = {};
        swal({
            title: "YOU'RE DEAD!!",
            text: "How aBOAT it!",
            imageUrl: "http://www.pollywogsworldoffrogs.com/frogs/frog-trans350.png"
        }, function() {
          alertUp = false;
        });
        box.css("left", "235px");
        box.css("top", "480px");
        return 0;
    }


    return newValue < 0 ? boat_X: newValue > boat_X ? boat_X: newValue;
    // return newValue < 0 ? boat_X : newValue;
}

function takeAwayLife() {
    var lives = document.getElementById("heart-container");
    var hearts = lives.childNodes;
    if (hearts.length > 1) {
        lives.removeChild(lives.childNodes[0]);
    }
    else {
        document.getElementById("lives").innerHTML = "GAME OVER!!"
    }
}


$(window).keydown(function(event) {
    if (!alertUp)
        keysPressed[event.which] = true;
});
$(window).keyup(function(event) {
    if (!alertUp)
        keysPressed[event.which] = false;
});

setInterval(function() {
    box.css({
        left: function(index, oldValue) {
            return calculateNewValue(oldValue, 37, 39);
        },
        top: function(index, oldValue) {
            return calculateNewValue(oldValue, 38, 40);
        }
    });
    car1.css({
        left: function(index, oldValue) {
            return move_car(oldValue, 5);
        }
    });

    car2.css({
        left: function(index, oldValue) {
            return move_car(oldValue, -3);
        }
    });

    bike.css({
        left: function(index, oldValue) {
            return move_bike(oldValue, 2)
        }
    });

    boat.css({
        left: function(index, oldValue) {
            return move_boat(oldValue, -0.1)
        }
    });
});
