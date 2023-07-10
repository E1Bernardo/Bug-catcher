var countTapBags = 0;
var maxAreaX = document.getElementById('area').clientWidth;
var maxAreaY = document.getElementById('area').clientHeight;

var counter = setInterval(() =>{
    if(countTapBags == 5){
        alert('Вы выйграли!!!')
        countTapBags++;
    }
});

movePng1 = setInterval((pg) => {startBags(pg);}, 600, png1);
movePng2 = setInterval((pg) => {startBags(pg);}, 600, png2);
movePng3 = setInterval((pg) => {startBags(pg);}, 600, png3);
movePng4 = setInterval((pg) => {startBags(pg);}, 600, png4);
movePng5 = setInterval((pg) => {startBags(pg);}, 600, png5);

restart.addEventListener('click', () =>{
    countTapBags = 0;
    png1.style.display = 'block';
    png2.style.display = 'block';
    png3.style.display = 'block';
    png4.style.display = 'block';
    png5.style.display = 'block';

    movePng1 = setInterval((pg) => {startBags(pg);}, 600, png1);
    movePng2 = setInterval((pg) => {startBags(pg);}, 600, png2);
    movePng3 = setInterval((pg) => {startBags(pg);}, 600, png3);
    movePng4 = setInterval((pg) => {startBags(pg);}, 600, png4);
    movePng5 = setInterval((pg) => {startBags(pg);}, 600, png5);
});

png1.addEventListener('click', () =>{
    png1.style.display = 'none';
    clearInterval(movePng1);
    countTapBags++;
});

png2.addEventListener('click', () =>{
    png2.style.display = 'none';
    clearInterval(movePng2);
    countTapBags++;
});

png3.addEventListener('click', () =>{
    png3.style.display = 'none';
    clearInterval(movePng3);
    countTapBags++;
});

png4.addEventListener('click', () =>{
    png4.style.display = 'none';
    clearInterval(movePng4);
    countTapBags++;
});

png5.addEventListener('click', () =>{
    png5.style.display = 'none';
    clearInterval(movePng5);
    countTapBags++;
});

function startBags(pg){
    let x = 0,y = 0;
    x = Math.round(Math.random() * (maxAreaX - pg.offsetWidth));
    y = Math.round(Math.random() * (maxAreaY - pg.offsetHeight));
    pg.style.left = x +'px';
    pg.style.top = y +'px';
}