//이 constructor에서 객체를 하나 만들어 낼 때마다 sum_score함수를 만들어 내고 있다.
//이는 계속해서 컴퓨터 메모리에 할당 되므로 비효율적이다.
// 그러므로 우리는 prototype을 이용한다.
function person(name, first_score, second_score) {
    this.name = name
    this.first_score = first_score
    this.second_score = second_score
   
}


//이렇게 prototye함수를 coonstuctor로부터 밖으로 빼주면 모든 객체에 적용되지 않는다.
// 즉, 원하는 객체에만 적용이 되므로 훨씬 효율적이다.
person.prototype.sum_score = function() {
    return "prototype:" + (this.first_score + this.second_score);
}

var kim = new person('kim', 10, 20);
kim.sum_score = function() {
    return 'kims_sum_score:' + (this.first_score *2);
}

console.log(kim.sum_score());

//그렇다면 kim의 sum_score만 함수내용을 다르게 하고 싶으면 어떻게 할까?
//var kim 이후에 kim.sum_score라고 함수를 정의 하면된다.
//javaScript는 객체(kim)에 해당하는 메소드를 먼저 찾은뒤에 constructor에 메소드를 찾기때문이다.
//즉, kim.sum_score를 먼저 찾은뒤 실행하기 때문에 person.prototype.sum_score은 적용되지 않는다.
