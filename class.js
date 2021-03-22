class Person{
    constructor(name, first, second) {
        this.name = name;
        this.first = first;
        this.second = second;
    }
    sum() {
        return 'prototype: ' +(this.first+this.second);
    }
}

class PersonPlus extends Person {
    avg() {
        return 'extends:'+((this.first+this.second)/2);
    }
}
//상속기능이 필요한 이유

Person.prototype.sum_score = function() {
    return "prototype:" + (this.first + this.first);
}


var kim = new PersonPlus('kim', 20, 30);
// kim.sum = function(){
//     return 'this: ' + (this.first+this.second);
// }

console.log(kim.avg()); 