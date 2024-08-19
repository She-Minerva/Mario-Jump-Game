const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const gameOverElement = document.querySelector('.game-over'); 

const jump = () => {
    if (!mario.classList.contains('jump')) { 
        mario.classList.add('jump');
        
        setTimeout(() => {
            mario.classList.remove('jump');
        }, 1000);
    }
};

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = parseInt(window.getComputedStyle(mario).bottom, 10);
    
    
    if (pipePosition <= 110 && pipePosition > 0 && marioPosition < 90) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`; 

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './imagens/game-over.gif';
        gameOverElement.style.display = 'block';
        clearInterval(loop); 
    }
}, 10);

document.addEventListener('keydown', jump);
