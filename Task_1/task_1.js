var startPointX = 1.6;
var startPointY = 1.6;
var radius = 0.8;
function getIntoCircle(x, y) {
    if (Math.pow((x - startPointX), 2) + Math.pow(y - startPointY, 2) <= Math.pow(radius, 2))
        return true;
    else
        return false;
}
console.log(getIntoCircle(3, 3));
