# project related to DOM 

## project link 
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution code 

## project 1 

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