// 3.1 객체의 기본
var memberArray = ['egoing','graphittie','leeche']
console.log("memberArray[2]", memberArray[2]);
// 배열의 접근은 오직 []를 이용해서만 접근할 수 있다.

var memberObject = {
    manager: 'egoing',
    developer: 'graphittie',
    designer: 'leeche'
}

//객체의 변환 방법
memberObject.designer = 'leezche';
// 객체의 접근은 .으로도 접근할 수 있고 []를 이용해서 접근 할 수도 있다.
console.log(memberObject.designer);
console.log(memberObject['designer']);
// delete 연산자를 통해서 객체의 요소를 지울 수 있다.
delete memberObject.manager
console.log(memberObject.manager) // #undefind


//3.2 객체와 반복문

