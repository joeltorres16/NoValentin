const alternatives = [
    {text:"", images:"images/saludo.webp"},
	{text:"Que cosaaaa!!??", images:"images/reaccion1.webp"},
    {text:"Oe te calmas?", images:"images/reaccion2.webp"},
    {text:"Te daré otra oportunidad, piensalo bien...", images:"images/reaccion3.webp"},
    {text:"Uhmmmmm, que hago contigo caray", images:"images/reaccion4.webp"},
    {text:"Luego no te quejes ahhhhh", images:"images/reaccion5.webp"}
];
const ohyes = {text:"Obvio, imposible que le digas NO a tu tilín", images:"images/afirmativo.webp"};
const title = document.querySelector('.title');
const text = document.querySelector('.text');
const cat = document.querySelector('.cat');
const buttons = document.querySelectorAll('.button');
const errorButton = document.querySelector('.button__error');

let count = 0;
function updateDisplay(item) {
    console.log(item);
    cat.src = item.images;
    text.innerHTML = item.text;
}

errorButton.addEventListener('click', () => {
    count = 0;
    updateDisplay(alternatives[count]);
    buttons.forEach(btn => btn.style.display = 'inline-block');
    errorButton.style.display = 'none';
});

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if(button.textContent === 'OBVII'){
            updateDisplay(ohyes);
            buttons.forEach(btn => btn.style.display = 'none');
        }
        if (button.textContent === 'NELL'){
            count++;
            if(count < alternatives.length){
                updateDisplay(alternatives[count]);
            } else {
                buttons.forEach(btn => btn.style.display = 'none');
                errorButton.style.display = 'inline-block';
            }
        }
    });
});