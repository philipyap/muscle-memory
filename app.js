const sentence = ['I am Philip'];
console.log(sentence);


var num = [18];
console.log(num)

const cars = ['honda', 'toyota', 'lexus'];
console.log(cars);

let number = true
    console.log(number);


const things = { 
    pet:'dog', 
    age: 12,
    options: ['a','b','c'], 
    rule: 'true'
}
console.log(things);



function printArray(array){

    let result = [];

    for(let i = 0; i < array.length; i++){

        let cars = array[i];

        if(num.length> 8){
            result.push(cars);
        }
     
    }  
    return result;
}
//console.log(cars);

function printArrayAgain(callback, array){
    let result = callback(array);
    console.log(result);
}
printArrayAgain(printArray, cars);

function printSentence(string){
    console.log(string);
}
printSentence(sentence);
printSentence(name);

function printOptions(object){
    console.log(object.options);
}
printOptions(things);

function printEachOption(object){
    object.options.forEach(eachOption =>{
        console.log(eachOption);
    })
}
printEachOption(things);

function doesThisReallyWork(boolean){
    if (boolean){
        console.log('this work');

    }else {
        console.log('This doesn');
    }
}
doesThisReallyWork(num);

const section = document.getElementById('section');
console.log(section);
const section2 = document.getElementById('section2');
console.log(section2);
const section3 = document.querySelector('#section3');
console.log(section3);
const section4 = document.querySelector('#section4');
console.log(section4);
const section5 = document.querySelector('#section5');
console.log(section5);

section.textContent = 'things'; //textContent is to print on html
section2.textContent = 'num';
section3.textContent = 'cars';
section4.textContent = 'options';
section5.textContent = 'name';

const para =document.querySelector('.paragraph');
console.log(para);
para.tectContent = 'Lebron James';

const para2 = document.querySelector('.paragraph2');
para2.textContent = 'Steph Curry';

const para3 = document.querySelector('.paragraph3');
para3.textContent = 'Kemba Walker';

const para4 = document.querySelector('.paragraph4');
para4.textContent = 'Kyrie Irving';

const para5 = document.querySelector('.paragraph5');
para5.textContent = 'Damien Lillard';

// create new div

const container6 = document.createElement('div');
container6.classList.add('containet6');
console.log(container6);

const section6 = document.createElement('h2');
section6.setAttribute('id', 'section6');
section6.textContent = 'Rocket';
console.log(section6);

const para6 = document.createElement('p');
para6.classList.add('paragraph6');
para6.textContent = 'James Harden';
console.log(para6);

const body = document.querySelector('body')
console.log(body);

body.appendChild(container6);
container6.appendChild(section6);
container6.appendChild(para6);


// container 7

const container7 = document.createElement('div');
container7.classList.add('container7');
console.log(container7);

const section7 = document.createElement('h2');
section7.setAttribute('id', 'section7');
section7.textContent = 'Fire';
console.log(section7);

const para7 = document.createElement('p');
para7.classList.add('paragraph7');
para7.textContent = 'Philip Yap';
console.log(para7);

body.appendChild(container7);
container7.appendChild(section7);
container7.appendChild(para7);




