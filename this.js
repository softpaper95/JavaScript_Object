var kim = {
    name:'kim',
    first_score:10,
    second_score:20,
    sum_score: function() {
        return kim.first_score + kim.second_score;
    }
}
//이것의 문제: 객체 kim의 이름을 바꾸면 kim.first_score + kim.second_score의 kim도 
//바꾸어 주어야 한다.

var kim = {
    name:'kim',
    first_score:10,
    second_score:20,
    sum_score: function() {
        return this.first_score + this.second_score;
    }
}
//이처럼 this를 이용하면 이 객체 내에서 요소에 접근한다는 의미이다.
//즉, this.first_score 이 객체 내에서의 first_score 요소를 사용한다는 의미이다.

console.log(kim.sum_score());