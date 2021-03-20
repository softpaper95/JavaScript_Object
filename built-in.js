//객체 만들기

//method란? Math라는 객체에 포함된 함수 PI를 보고 메소드 라고 지칭한다.
//Math.PI 는 메소드 PI()는 함수
var MyMath = {
    PI:Math.PI,
    random:function() {
        return Math.random();
    },
    floor:function(val){
        return Math.floor(val);
    }
}
console.log(MyMath.PI);
console.log(MyMath.random());
console.log(MyMath.floor(3.4));

//이처럼 MyMath는 하나의 객체, PI,random,floor는 하나의 메소드라고 할 수 있다.