var kim = {name:'kim', first:10, second:20};
var lee = {name:'lee', first:10, second:10};
function sum() {
    return (this.first+this.second);
}

console.log(sum.call(kim));

// call은 사용될때 마다 this를 바꾸는 형식이다.
// 그렇다면 내부적으로 this를 고정시키고 사용하는 방법은 무엇일까?
// 바로 bind이다. 
// bind는 새로운 힘수를 만들어 this값을 고정시킨다.
var kimSum = sum.bind(kim);
console.log('kimSum:', kimSum());
// 이때 sum은 바뀌지 않는다.