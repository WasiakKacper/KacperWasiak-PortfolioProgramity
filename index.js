function sticky(){
    let head = document.querySelector('header');

    if(scrollY > 0){
        head.classList.add('active');
    }
    else{
        head.classList.remove('active');
    }
}
