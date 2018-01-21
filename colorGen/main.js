function getColor() {
    var length = 6;
    var chars = '0123456789ABCDEF';
    var hex = '#';
    while (length--) hex += chars[(Math.random() * 16) | 0];
    return hex;
}
var color = getColor();
document.getElementById('display').innerHTML = color;

console.log(color);