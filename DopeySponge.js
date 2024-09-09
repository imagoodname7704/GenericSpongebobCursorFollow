draw = function() {
    var body = 100;
    var pantsx = body * 4/5;
    var pantsy = body * 1/5;
    var bodyx = body * 4/5;
    var bodyy = body;
    var X = mouseX;
    var Y = mouseY;
    
    background(172, 201, 230);
    
    fill(234, 252, 73);
    rect(X, Y, bodyx, bodyy);
    fill(255, 221, 0);
    arc(X+50, Y+50, 50, 10, 0, 320);
    fill(224, 142, 61);
    rect(X, Y + 100, pantsx, pantsy);
    rect(X-35, Y+90, 40, 10);
    rect(X+80, Y+90, 40, 10);
    fill(255, 255, 255);
    ellipse(X+20, Y+25, 25, 25);
    ellipse(X+60, Y+25, 25, 25);
    fill(0, 0, 0);
    rect(X+25, Y+24, 5, 5);
    rect(X+65, Y+24, 5, 5);
    fill(255, 255, 255);
    arc(X+40, Y+70, 60, 40, 0, 180);
    rect(X+25, Y+70, 15, 10);
    rect(X+42, Y+70, 15, 10);
    rect(X+20, Y+120, 10, 25);
    rect(X+50, Y+120, 10, 25);
    fill(0, 0, 0);
    ellipse(X+32, Y+145, 25, 10);
    ellipse(X+62, Y+145, 25, 10);
};
