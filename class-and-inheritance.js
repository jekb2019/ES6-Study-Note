'use strict';

//Title: creating class in ES6
class Shape{
    //생성자, 클래스 변수, 클래스 함수 정의에는 변수 선언을 위한 키워드 (var, let, const, ...) 를 사용하지 않는다
    static create(x,y){return new Shape(x,y);}
    name = 'Shape';

    constructor(x,y){
        this.move(x,y);
    }
    move(x,y){
        this.x = x;
        this.y = y;
    }
    area(){
        return this.x*this.y;
    }
}

const s = new Shape(0,0);
s.area();
s.move(4, 5);
// console.log(s.area());//20

const s2 = Shape.create(1, 1);
// console.log(s2.area());//1


//Implementing inheritance
class Circle extends Shape{
    constructor(x, y, radius){
        super(x, y);//must call super class' constructor first
        this.radius = radius;
    }
    area(){
        if(this.radius === 0) return super.area();
        return this.radius * this.radius;
    }
}
var c = new Circle(0, 10, 10);
// console.log(c.area());//100


//Note: ES6 does not allow multiple inheritance and interfaces