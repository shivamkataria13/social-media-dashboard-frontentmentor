const toggle = document.querySelector('#darkmodetoggle')
const whitetext = document.querySelectorAll('.colorwhite')
const bluetext =document.querySelectorAll('.desatblue')

toggle.addEventListener("click", ()=> {


    if(document.body.classList.contains("darktheme")){    
        document.body.classList.remove("darktheme");
        bluetext[1].style.color = "grey"
        whitetext[5].style.color = "grey"}

    else{
        document.body.classList.add("darktheme");
        bluetext[1].style.color = "white"
        whitetext[5].style.color = "white"
    }
})