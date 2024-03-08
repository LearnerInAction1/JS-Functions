function rectangle(length,width){
    return length * width;
}
var length=8;
var width=6;

let rectanglearea =rectangle(length,width);
console.log("Rectangle Area is:"+rectanglearea);


function circle(radius){
    return Math.PI *radius*radius
}
var radius=6;
let circlearea=circle(radius);
console.log("Circle Area is:"+circlearea);

function triangle(base,height){
    return 0.5* base*height;
}
var base=7;
var height=9;

let trianglearea=triangle(base,height);
console.log("Area of Triangle is:"+trianglearea);

function cel(celsius){
    return  (9/5 *celsius) +32;

}
var celsius =45;
let celciusvalue=cel(celsius);
console.log("Value of Celcius To Farenheit is:"+celciusvalue);


function Farenhit(Farenheit){
    return (Farenheit -32) *5/9;
}

var Farenheit=43;
let Farenheitvalue=Farenhit(Farenheit);
console.log("Value of Farenheit To Celcius is:"+Farenheitvalue);