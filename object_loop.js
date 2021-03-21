var memberArray = ['egoing','graphittie','leeche']

var memberObject = {
    manager: 'egoing',
    developer: 'graphittie',
    designer: 'leeche'
}


// console.group('#1 #2') 를 쓰면 출력 횡단에 #1, #2가 각각 출력된다.
console.group('array loop');
//while 반복문
var i = 0;
while( i < memberArray.length) {
    console.log(i, memberArray[i]);
    i = i + 1;
}
console.groupEnd('array loop');

//for 반복문
console.group('object loop');
for(var name in memberObject ) {
    console.log(name, memberObject[name]);
}
console.groupEnd('object loop');



