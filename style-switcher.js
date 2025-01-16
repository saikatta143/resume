/*-- toggle style switcher----*/
const styleswitchertoggle = document.querySelector(".style-switcher-toggler");
styleswitchertoggle.addEventListener("click",() =>{
    document.querySelector(".style-switcher").classList.toggle("open");
})
//hide style switcheron scroll
window.addEventListener("scroll",()=>{
    if(document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.remove("open");
    }
})

/* ---- theme colors----*/
const alternateStyles= document.querySelectorAll(".alternate-style");
function setActiveStyle(color){
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled","true");
        }
    })
}

/* theme light--*/
const darkmode = document.querySelector(".day-night");
darkmode.addEventListener("click",()=>{
    darkmode.querySelector("i").classList.toggle("fa-sun")
    darkmode.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark")
})
window.addEventListener("load", ()=>{
    if(document.body.classList.contains("dark")){
        darkmode.querySelector("i").classList.add("fa-sun");
    }
    else{
        darkmode.querySelector("i").classList.add("fa-moon");
    }
})
