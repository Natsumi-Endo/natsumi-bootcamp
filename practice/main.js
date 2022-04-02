//ダイアログ表示
//alert('hello');
console.log('hello');

//型は３種類。ver, let--上書き可能, const--上書き不可能
//  基本はlet かconstで変数を定義すること
let name1 = 'Tom';
name1 = 'Tim';
console.log('hello ' + name1);

//Number, Atring, Boolean, Undehfined, Null, Symbol設定不要
//自動で型が付く
//動的型付け言語
let variable = 'str';
variable = 12;
variable = false;
variable = undefined;
console.log(typeof variable);

//メソッド
function hello(name2, age) {
    //let name2 = 'Caode Mafia';

    console.log('hello ' + name2 + age);

    return name2 + age;
}

const returnval = hello('Caode Mafia', 10);
console.log(returnval);

hello('Caode Mafia2', 20);

//関数名を持たない関数：無名関数　コールバック関数
//こちらの場合、変数定義もここで行っているため、呼ばれる側より上にある必要あり
// const hello = function(name2, age) {
//     //let name2 = 'Caode Mafia';

//     console.log('hello ' + name2 + age);

//     return name2 + age;
// }

//メソッドとプロパティーー特定の値を保持しているもの
let hello1 = 'hello world';
console.log(hello1.length);//helloはlengthというプロパティを持っている
//プロパティという領域を持っている

console.log(hello1.toUpperCase());//大文字に変換するメソッド
console.log(hello1.substring(0, 5));//0から5番目まで切り取るメソッド
console.log(hello1.slice(0, 5));

console.log(hello1.split(' '));//文字分割 helloとworldで分割され、配列に入る
console.log(hello1.split(''));//一文字ずつ分割され、配列に入る


//配列 constなので再度newはできないが、中身の値は変えられる
// const arry = [1, 2, 3,4, 5, 6, 'moji','false'];
// arry[5] = 8;
// console.log(arry.length);
// arry.push('new item');
// console.log(arry);
// arry.unshift('new item');//一番目の値に入れる
// console.log(arry);
// const val = arry.pop();//最後の値を消す,消した値を表示
// console.log(val);
// console.log(arry);


const person = {
    name1 :['Cade', 'mafia'],
    age :[10],
    gender:'male',
    interest: {
        sports: 'soccer',
        music: 'piano'
    },
    getFullName : function(){
        console.log(this.name1[0] + this.name1[1]);
    }
};
const ageKey ='age';
person[ageKey] = 12;
console.log(person.age);

person.getFullName();

//ループ
const arry1 = [1, 2, 3,4, 5];
for(let i = 0; i < 5; i++) {
    console.log(i, arry1[i]);
}

//for in 添え字わたる
const arry2 = [1, 2, 3,4, 5, 6];
for(let i in arry2) {
    console.log(i, arry2[i]);
}

//for of　値が渡ってくる
const arry3 = [1, 2, 3,4, 5, 6];
for(let v of arry3) {
    console.log(v);
}

//
//1 == '1' データの値が一致しているか？
//1 === '1' データの値と型が一致しているか？
//!= 値
//!==　値と型
if(true) {
    console.log('true ' );
} else if (false) {
    console.log('false ' );
} else {
    console.log('No' );
}

//アロー関数
// const hello2 = function hello2(name4 = 'Tom') {
//     console.log('hello ' + name4);

// }

//const hello2 = name4 => console.log('hello ' + name4);

               //複数引数の場合、かっこが必要
               //処理が二行の場合｛｝が必要
const hello2 = (name4, age) => {
    console.log('hello ' + name4 + age);
    console.log('hello ' + name4 + age);
}
hello2('Tom', 10);
hello2('Tom', 10);

const hello3 = name4 => 40;
const arry = [1, 2, 3, 4, 5, 6];
arry.forEach(value => console.log(value));


//コールバック関数 　メソッドが引数として渡ってくる
function  hello4(callback, lastName ) {
console.log(callback);
console.log('hello  ' + callback(lastName));
}

function getName() {
    return 'Code Mafia';
}

function getFirstName() {
    return 'Code';
}
//JavaScriptはメソッドもオブジェクト（変数）
//として考えているので引数に設定可能
hello4(getFirstName);

//無名関数をコールバック関数に渡す
hello4(function(name5){
    return 'Code1' + name5;
}, 'Mafia');

//アロー関数を渡す
hello4(() => 'Code2');


function dosomethig(a,b, callback) {
    const result = callback(a, b);
    console.log(result);

}

function multiply(a, b) {
    return a * b;
}

function plus(a, b) {
    return a + b;
}

dosomethig(2, 2, multiply);
dosomethig(2, 3, plus);


//コールバック関数とループ
const arry4 = [1,2,3,4,5];

function forEach(ary, callback) {
    for(let i = 0; i < ary.length; i++) {
        callback(ary[i]);
    }
}

function log(val) {
    console.log(val);
}

function double(val) {
    val = val * 2;
    log(val);
}

forEach(arry4, double);


//配列とforEachメソッド
//v：値 i：添え字 ary：配列
const arry5 = [1,2,3,4,5];
arry5.forEach(function(v, i, ary){
    console.log(v, i, ary);
});

//引数１個の場合
arry5.forEach(v => console.log(v));
//バグ防止のためにforよりforEachを使うこと
//記述が少なくて済むため

                     //前の値の和がaccuにわたってくるのがreduceメソッド
                     //currには配列の値が渡ってくる
arry5.reduce(function(accu, curr){
   console.log(accu, curr);
   return accu + curr; 
});

arry5.reduce(function(accu, curr){
    console.log(accu, curr);
    return accu + curr; 
 }, 10);


 const str = 'animation';
 const strArry = str.split('');

 console.log(strArry);

 const result1 = strArry.reduce((accu, curr) => {
    return accu + '<' + curr + '>';
 }, "");//初期値空　　accuは蓄積

 console.log(result1);

///////////////////////////////



function tag(accu, curr) {
    console.log(accu, curr);
    return `${accu}<${curr}>`;
}


function reduce(arry, callback, defaultValue) {
    let accu = defaultValue;
    for(let i = 0; i < arry.length; i++) {
        let curr = arry[i];
        callback(accu, curr);
    }
    return accu;
}
const result2 = reduce(strArry,tag, "");
console.log(result2);

////////////////////////

const btn =document.querySelector('#btn');
const h1 =document.querySelector('h1');
// btn.addEventListener('click', function() {
//     alert('hello');
// });
//ボタンの色変える
function changeColor() {
    this.style.color ='red';
    console.log(this);
}

function changeBgColor() {
    h1.style.backgroundColor ='green';
    h1.style.color ='red';
}

btn.addEventListener('click', changeColor);
btn.addEventListener('click', changeBgColor);