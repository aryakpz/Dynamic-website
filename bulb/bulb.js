
const rowel = document.getElementById('rows');
const timeel = document.getElementById('time');
const colorel = document.getElementById('color');
const startel = document.querySelector('.start');
const stopel = document.querySelector('.stop');
const display = document.querySelector('.display');

let color; 


startel.addEventListener('click', () => {
    const row = parseInt(rowel.value);
    const delay = parseInt(timeel.value) * 100; 
    const clr= colorel.value;
    console.log(clr)

    display.innerHTML = ''; 
    rowel.innerHTML='';
    timeel.innerHTML=''; 

    
    for (let i = 1; i <= row; i++) {
        let lines = document.createElement('div');
        lines.className = 'row'; 

       
        for (let j = 1; j <= 2 * i - 1; j++) {
            const circle = document.createElement('div');
            circle.className = 'circle';
            lines.appendChild(circle);
        }

        display.appendChild(lines);
    }
    const rows = document.querySelectorAll('.row'); 

    let count = 0;

    color = setInterval(() => {
       
        rows.forEach(item => {
            item.querySelectorAll('.circle').forEach(circle => {
                circle.style.backgroundColor = 'white';
                     
            });
        });
        rows[count].querySelectorAll('.circle').forEach(circle => {

            circle.style.backgroundColor =clr
     
        });

        count= (count + 1) 
        if(count == rows.length)
            {
                count=0;
            }
    
    }, delay);

});

stopel.addEventListener('click', () => {
    clearInterval(color); 
});
