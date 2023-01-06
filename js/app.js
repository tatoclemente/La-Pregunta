function bubbles(){
    let count = 200;
    let header = document.querySelector('header')
    for(let i=0; i<count; i++){
        let bubble = document.createElement('i');
        let x = Math.floor(Math.random()*window.innerWidth);
        let y = Math.floor(Math.random()*window.innerHeight);

        let size = Math.random() * 8;
        bubble.className='bubble';
        bubble.style.left= x+'px';
        bubble.style.top= y+'px';
        bubble.style.width= 1 + size + 'px';
        bubble.style.height= 1 + size + 'px';
        bubble.style.animationDuration= 5 + size + 's';
        bubble.style.animationDelay= -size + 's';
        header.appendChild(bubble);
    }
}

bubbles()