# project related to DOM 

## project link 
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution code 

## project 1  COLOR CHANGE  solution code

```javascript 

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (ff) {
    //this is event of clicl of mouse all the actions taking by our side is an event so here we add click
    console.log(ff);
    console.log(ff.target);
    const color = ff.target.id;
    switch (ff.target.id) {
      case 'grey':
        body.style.backgroundColor = ff.target.id;

        break;
      case 'white':
        body.style.backgroundColor = ff.target.id;

        break;

      case 'blue':
        body.style.backgroundColor = ff.target.id;

        break;

      case 'yellow':
        body.style.backgroundColor = ff.target.id;

        break;
    }
  });
});


```

## project 2  BMI calculator solution code  

```javascript 
const form = document.querySelector('form');

//this usecase (means agr event ke pehele declare krenge to empty value store hpogi voh nhi chaiye ) will give you a empty value
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (ff) {
  ff.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a valid weight ${weight}`;
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2); //formula for BMI calculating it is the mathemetical part

    if (BMI < 18.6) {
      results.innerHTML = ` your BMI  ${BMI} <br>is in under weight `;
    } else if (BMI >= 18.6 && BMI <= 24.9) {
      results.innerHTML = ` your BMI is ${BMI}<br> in normal range  `;
    } else if (BMI > 24.9) {
      results.innerHTML = ` your BMI is ${BMI} <br>in over weight  `;
    } else {
      results.innerHTML = `<span>${BMI}</span>`;
    }
  }
});



```


## project 3 DIGITAL CLOCK solution code 

``` javascript 
const clock = document.getElementById('clock')
// use can use any method both are same 
// const clock = document.querySelector('#clock')
let date  = new Date();
console.log(date.toLocaleTimeString())


// set interval function hota hai javascript ka jo hr event ko bar bar chlata hai jab tak ham kuch or na kre chlata rhega jese ki time chlta rhega 
// 100 means one second 2000 means 2 second what you need 
setInterval(function (){
  let date  = new Date();
// console.log(date.toLocaleTimeString())
clock.innerHTML = date.toLocaleTimeString();

},1000)


```

## project 4 GUESS THE NUMBER solution code 
 
 ```javascript

let  randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess =
  []; /*jo number voh bhrta jeyage usko ham array mai store krva denge taki voh vohi number dubara try na kre and pta bhi ho konsa hogya  */
let numGuess = 1;

let playGame = true; //yeah hr game me use hooga hamko btayega ki ham game khel skte hai

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  //mtlb user koi 1 se less to ni dal rha no. ya fir koi variabbble abc vgera ya fir 100 se jada here we validate the guess
  if (isNaN(guess)) {
    alert('please enter a vaalid number ');
  } else if (guess < 1) {
    alert('please enter a number  more than 1 ');
  } else if (guess > 100) {
    alert('please enter a number  less than 100  ');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`game over your random number is ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  // iske andr ham krenge random no. check ki voh uske equal to nhi hai guess kr to display me pprint krwadenge ya ir low hai ya high
  if (guess === randomNumber) {
    displayMessage(` you won you guessed it right `);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(` your number is TOOO low `);
  } else if (guess > randomNumber) {
    displayMessage(`your number is too high `);
  }
}

function displayGuess(guess) {
  //update krega kitne guess reh gye or text inout clear krega or previous guess ko bhi bdlega
  userInput.value = '';
  guessSlot.innerHTML += `${guess},  `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = ` <h2>${message}</h2>`;
}

function endGame() {
  userInput.innerHTML = '';
  userInput.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML = ` <h2 id = "newGame">start new game </h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();

}
function newGame() {
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click', function(e){
    randomNumber =  parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled')
    startOver.removeChild(p);
    playGame = true 

  })  
}



 ```

## project 5 magic keyboard solution code 

```javascript
const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <div class = 'color'>
  <table>
  <tr>
    <th>key</th>
    <th>keycode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'space': e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
  
</table>
  </div>
  `
})

```

## project 6 Color change solution code 

```javascript

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

console.log(randomColor());
let intervalId;
const startChangingColor = function(){

  if(!intervalId){
    intervalId = setInterval(changeColor,1000)

  }

  function changeColor(){
    document.body.style.backgroundColor = randomColor();

  }

}

const stopChangingColor = function(){
  clearInterval(intervalId)
  intervalId = null;
}

document.querySelector("#start").addEventListener('click' , startChangingColor)

document.querySelector("#stop").addEventListener('click' , stopChangingColor)


```


