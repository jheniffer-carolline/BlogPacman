let ghost = document.querySelector('.ghost');
let pacman = document.querySelector('.pacman');

let jump = () => {

    ghost.classList.add('jump');

    setTimeout(()=>{

        ghost.classList.remove('jump');

    },500);
}

let loop = setInterval(
    () => {
        let pacmanPosition = pacman.offsetLeft;
        let ghostPosition = +window.getComputedStyle(ghost).bottom.replace('px','');

        console.log(ghostPosition);
        
        if(pacmanPosition <= 120 && pacmanPosition > 0 && ghostPosition < 60){
            pacman.style.animation = `none`;
            pacman.style.left = `${ghostPosition}px`;

            ghost.style.animation = `none`;
            ghost.style.bottom = `${ghostPosition}px`

            ghost.src = './assets/img/ghost-dead';
            ghost.style.width = `75px`;
            ghost.style.margiLeft = `50px`;

            clearInterval(loop);
        }
    },10
);

document.addEventListener('keydown', jump);