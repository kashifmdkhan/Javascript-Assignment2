function factorialOfPrime(low,high){
    for(let i = low;i<=high;i++){
        if(isPrime(i)){
            factorial(i);
        }
    }
}

function isPrime(i){
    for(let j =2;j<=i/2;j++){
        if(i%j==0)
            return false;
    }
    return true;
}

function factorial(num)
{
    let fact=1;
    for(let i = num; i>=1; i--){
        fact *= i;
    }
    console.log("factorial of "+num+" is "+fact);
}

factorialOfPrime(5,15);