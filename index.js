const index = window.location.pathname
console.log(index);
const navlink = document.querySelectorAll('.navbar a')
console.log(navlink);
navlink.forEach(link =>{
    console.log(link);
    if(link.href.includes(`${index}`)){
        link.classList.add('active')
    }
})


