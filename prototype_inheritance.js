var superObj = {superVal:'super'}
// var subObj = {subVal:'sub'}

// prototype_link를 걸면 쉽게 부모 객체로 연결할 수 있다.
// __proto__는 prototype_link를 의미한다.
// subObj.__proto__ = superObj;
//link로 연결된 자식객체는 부모객체의 요소들을 이용할 수 있다.
// console.log(subObj.superVal);


var subObj = Object.create(superObj);

subObj.subVal = 'sub';



//그렇다면 부모객체의 요소값을 자식객체를 통해서 바꿀 수 있을까?
//결과는 바꿀 수 없다.
//자식객체에서 작동해서 바꿀수는 있어도 부모객체 원형은 자식객체를 통해서는 바꿀 수 없다.
// subObj.superVal = 'sub';
console.log(subObj.superVal);
console.log(superObj.superVal);

