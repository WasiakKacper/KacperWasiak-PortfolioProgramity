function sticky(){
    let head = document.querySelector('header');

    if(scrollY > 0){
        head.classList.add('active');
    }
    else{
        head.classList.remove('active');
    }
}

function parallax(){
    let tileFirst = document.getElementById('project-tile-first'),
        tileSecound = document.getElementById('project-tile-secound'),
        aboutFirst = document.getElementById('about-tile-first'),
        aboutSecound = document.getElementById('about-tile-secound'),
        aboutThird = document.getElementById('about-tile-third');


    window.addEventListener('scroll', () =>{
        let value = window.scrollY;

        if(value > 400){
            tileFirst.style.translate="100%";
            tileFirst.style.transition="0.5s ease-in-out";
            tileSecound.style.translate="-100%";
            tileSecound.style.transition="0.5s ease-in-out";
        }

        if(value > 1500){
            aboutFirst.style.translate="-100%";
            aboutFirst.style.transition="0.5s ease-in-out";
            aboutSecound.style.translate="100%";
            aboutSecound.style.transition="0.5s ease-in-out";
            aboutThird.style.translate="-100%";
            aboutThird.style.transition="0.5s ease-in-out";
        }

        
    })
}