/* menu a tendina home */

/*

document.getElementById("immagine").addEventListener("click", openTendina);
function openTendina ()
{

    document.getElementById("menuTendina").classList.toggle("attivato");


}
*/

var n_img=4;
var corrente=1;


function succ()
{
    corrente++;
if(corrente>n_img)
corrente=1;



for (var i=n_img;i>0;i--)

{
    document.querySelector("#immagineHomeFiglio img:nth-child("+i+")").style.display="none";
    
}

document.querySelector("#immagineHomeFiglio img:nth-child("+corrente+")").style.display="block";
}

function prec()

{
    corrente--;
if(corrente==0)
corrente=n_img;



for (var i=n_img;i>0;i--)

{
    document.querySelector("#immagineHomeFiglio img:nth-child("+i+")").style.display="none";
    
}

document.querySelector("#immagineHomeFiglio img:nth-child("+corrente+")").style.display="block";
}
setInterval(succ,3000);