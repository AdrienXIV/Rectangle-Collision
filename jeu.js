var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var texte = document.getElementById('texte');
var texte1 = document.getElementById('texte1');
canvas.height = 500;
canvas.width = 500;
canvas.widthLine = 6;

function object(x, y, width, height, color) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.color = color;

    this.update = () => {
        this.draw();
    }

    this.draw = () => {
        context.beginPath();
        context.rect(this.x, this.y, this.width, this.height);
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
    }
}
var obj_1 = new object(50, 225, 50, 50, 'blue');
var obj_2 = new object(50, 225, 50, 50, 'red');

var cnv = {
    gauche:0,
    droit:500,
    haut:0,
    bas:500
};
var compteur = true;
function animate() {
    var animation_frame = requestAnimationFrame(animate); //rafraichissement page 60* /s
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    obj_1.update();
   // obj_2.update();
    rebond(obj_1.x, obj_1.y);
   // rebond(obj_2.x, obj_2.y);

   if (reb == 2) {
    obj_1.x -= 2.5;
    obj_1.y += 2.5;
    compteur=false;

} else if (reb == 4) {
    obj_1.x -= 2.5;
    obj_1.y -= 2.5;

} else if (reb == 1) {
    obj_1.x += 2.5;
    obj_1.y -= 2.5;

} else if (reb == 3) {
    obj_1.x += 2.5;
    obj_1.y += 2.5;

} else obj_1.x += 2.5;
    
}
animate();

var reb = 0;

function rebond(x, y) {
    
    if (x == 0) return reb = 1;
    else if (x == 500 - 50) return reb = 2;
    else if (y == 0) return reb = 3;
    else if (y == 500 - 50) return reb = 4;

    /*if (obj_1.x == cnv.droit - obj_1.width) {
        obj_1.x -= 2.5;
        obj_1.y += 2.5;
        compteur=false;

    } else if (obj_1.y == cnv.bas - obj_1.height) {
        obj_1.x -= 2.5;
        obj_1.y -= 2.5;

    } else if (obj_1.x == cnv.gauche) {
        obj_1.x += 2.5;
        obj_1.y -= 2.5;

    } else if (obj_1.y == cnv.haut) {
        obj_1.x += 2.5;
        obj_1.y += 2.5;

    } else obj_1.x += 2.5;*/
}