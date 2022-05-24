



/* menu a tendina paesi*/
document.getElementById("toggle").addEventListener("click",openMenu);

function openMenu ()
{
    document.getElementById("men").classList.remove("active");
    document.getElementById("me").classList.remove("active");
    document.getElementById("m").classList.remove("active");
document.getElementById("menu").classList.toggle("active");
   
    
}



document.getElementById("toggl").addEventListener("click",openMen);

function openMen ()
{
    
    document.getElementById("menu").classList.remove("active");
    document.getElementById("me").classList.remove("active");
    document.getElementById("m").classList.remove("active");
    document.getElementById("men").classList.toggle("active");
}


document.getElementById("togg").addEventListener("click",openMe);

function openMe ()
{
    document.getElementById("men").classList.remove("active");
    document.getElementById("m").classList.remove("active");
    document.getElementById("menu").classList.remove("active");
    document.getElementById("me").classList.toggle("active");
}


document.getElementById("tog").addEventListener("click",openM);

function openM ()
{
    
    document.getElementById("menu").classList.remove("active");
    document.getElementById("men").classList.remove("active");
    document.getElementById("me").classList.remove("active");
    document.getElementById("m").classList.toggle("active");
}

