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