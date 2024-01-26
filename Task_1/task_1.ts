const startPointX: number = 1.6;
const startPointY: number = 1.6;
const radius: number = 0.8;
 
function getIntoCircle(x:number,y:number):boolean{
    if(Math.pow((x - startPointX),2)+ Math.pow(y - startPointY,2) <= Math.pow(radius,2))
        return true;
    else
        return false;
}
console.log(getIntoCircle(3, 3)); 