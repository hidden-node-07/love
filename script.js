var btn = document.querySelector('button');
var body = document.querySelector('body');
var song = document.querySelector('.song');

let i = 0;
btn.addEventListener('click', function() {
        song.innerHTML = "<audio autoplay loop><source src = './assets/song.mp3' >"

        setInterval(() => {
            var r = Math.round(Math.random() * 255);
            var g = Math.round(Math.random() * 255);
            var b = Math.round(Math.random() * 255);
    
            body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            body.style.transition = 'background-color 1s ease-in-out';
        }, 1500);

        setInterval(() => {
            let x = Math.random() * 100 + 'vw';
            let x2 = Math.random() * 100 + 'vw';
            let y = Math.random() * 100 + 'vh';
            let y2 = Math.random() * 100 + 'vh';
            let heart = document.createElement('img');
            let heart2 = document.createElement('img');
            heart.src = './assets/heart.png';
            heart.style.position = 'absolute';
            heart.style.left = x;
            heart.style.top = y;
            heart.style.width = '50px';
            heart.style.height = '50px';
            heart.style.zIndex = '9999';

            heart2.src = './assets/heart.png';
            heart2.style.position = 'absolute';
            heart2.style.left = x2;
            heart2.style.top = y2;
            heart2.style.width = '100px';
            heart2.style.height = '100px';
            heart2.style.zIndex = '9999';
    
    
            body.appendChild(heart);
            body.appendChild(heart2);
      
            heart.animate([
                { transform: 'translateY(0)' +'rotate(0deg)'},
                { transform: 'translateY(-600px)' +'rotate(360deg)'}
            ], {
                duration: 2000,
                easing: 'ease-in-out',
                fill: 'forwards'
            }).onfinish = () => {
                body.removeChild(heart);
            };

            heart2.animate([
                { transform: 'translateY(0)' +'rotate(0deg)'},
                { transform: 'translateY(-600px)' +'rotate(360deg)'}
            ], {
                duration: 2000,
                easing: 'ease-in-out',
                fill: 'forwards'
            }).onfinish = () => {
                body.removeChild(heart2);
            };
            
    }, 300);

})