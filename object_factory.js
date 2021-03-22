// constructor가 무엇인가?
// consytuvtor는 객체를 만들어 내는 공자이라고 생각하면 된다.

var kim = {
    name:'kim',
    first_score:10,
    second_score:20,
    sum_score: function() {
        return this.first_score + this.second_score;
    }
}
var kim = {
    name:'kim',
    first_score:10,
    second_score:20,
    sum_score: function() {
        return this.first_score + this.second_score;
    }
}

function person(name, first_score, second_score) {
    this.name = name
    this.first_score = first_score
    this.second_score = second_score
    this.sum_score = function() {
        return this.first_score + this.second_score;
    }
}

var kim = new person("kim", 10, 20)

console.log(kim.sum_score());