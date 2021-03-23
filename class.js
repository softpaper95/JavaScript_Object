class Person{
    constructor(name, first, second) {
        this.name = name;
        this.first = first;
        this.second = second;
    }
    sum() {
        return this.first+this.second;
    }
}

class PersonPlus extends Person {
    constructor(name, first, second, third) {
        super(name, first, second);
        this.third = third
    }

    sum() {
        return super.sum() + this.third;
    }
    avg() {
        return 'extends:'+((this.first+this.third)/2);
    }
}


Person.prototype.sum_score = function() {
    return "prototype:" + (this.first + this.first);
}


var kim = new PersonPlus('kim', 20, 40, 100);
// kim.sum = function(){
//     return 'this: ' + (this.first+this.second);
// }

console.log(kim.sum()); 