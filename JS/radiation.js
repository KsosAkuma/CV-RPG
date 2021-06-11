
//Récupération du titre
let firstH1 = document.querySelectorAll('h1');
let titrePrincipal = firstH1[0];
// Variable global de l'animation
let plafondIntervale = 1000 * 4;
let dureeIntervale = 0;
let timeForAnime = 0;
let interrupteur1 = 0;
let stop = false;
//R.A.F
function radiation() {
    if (stop == false) {
        dureeIntervale++;
        if (dureeIntervale < plafondIntervale){
            titrePrincipal.classList.remove("radiation2");
            document.body.classList.remove("radiation");
        
        }else{
            titrePrincipal.classList.add("radiation2");
            document.body.classList.add("radiation");
            timeForAnime++;
            if (timeForAnime > 300) {
                timeForAnime = 0;
                dureeIntervale = 0;
                interrupteur1 == 0 ? 
                (document.body.style.backgroundImage = ('url(/asset/background4.jpg)'), interrupteur1 = 1):
                (document.body.style.backgroundImage = ('url(/asset/background1.jpeg)'), interrupteur1 = 0);
            }
        }
    }
    window.requestAnimationFrame(radiation);
}
const test = window.requestAnimationFrame(radiation);

// cancel anim
const itemAnim = document.getElementsByClassName('itemAnim');
Array.from(itemAnim).forEach(element => {
    element.addEventListener("click",function () {
        // window.cancelAnimationFrame(radiation);
        // const test = window.requestAnimationFrame(radiation);
        // cancelAnimationFrame(test);
        stop = true;
        console.log("eteint");
    })
}); 