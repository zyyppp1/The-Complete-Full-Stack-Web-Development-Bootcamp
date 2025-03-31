function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
        
        //Write your code here:
        while (n===1){
            return [0]
        }   
        if (n===2){
            return [0,1]
        var list=[0,1]
        while (list.length < n){
            list.push(list[list.length-1]+list[list.length-2])
        }
        return list
        
        
        
        //Return an array of fibonacci numbers starting from 0.
        
    //Do NOT change any of the code below 👇
    }
    fibonacciGenerator(10);
    console.log(fibonacciGenerator(10))