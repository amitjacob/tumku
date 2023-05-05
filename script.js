let Menu = document.querySelector('#Menu');
let navbar = document.querySelector('.navbar');

Menu.onclick = () =>{
    Menu.classList.toggle('times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    Menu.classList.remove('times');
    navbar.classList.remove('active');
}

document.querySelector('#search').onclick = () =>{
    document.querySelector('#search-from').classList.toggle('active');
}


document.querySelector('#close').onclick = () =>{
    document.querySelector('#searc-from').classList.remove('active');
}


