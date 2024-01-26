function getIn(x:number){
    if(x < -1 || x > 1){
        console.log('Значение не удолетворяет условию.');
        return;
    }
    if (x == 1) {
        console.log(0);
        return;
      }
    else{
        let realIn:number = Math.log(1 + x);
        let myIn: number = x;
        for(var i = 2; Math.abs(myIn - realIn) > 0.001; i++){
            myIn -= Math.pow(-1,i) * (Math.pow(x,i) / i );
        }
        console.log(realIn);
        console.log(myIn.toFixed(3));
    }
}

getIn(0.5)