function triangleType(a,b,c){
    if(a==b && b==c)
        return "Equialateral Triangle";
    if(a==b || b==c || a==c)
        return "Isosceles Triangle";
    return "Scalene Triangle";
}

console.log(triangleType(5,5,5));// Euilateral Triangle
console.log(triangleType(10,5,10));// Isosceles Triangle
console.log(triangleType(5,6,7));// Scalene Triangle