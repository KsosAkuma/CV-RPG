
//Récupération du titre
let firstH2 = document.querySelectorAll('h2');
let titrePrincipal = firstH2[1];
// Variable global de l'animation
let plafondIntervale = 1000 * 4;
let dureeIntervale = 0;
let timeForAnime = 0;
let interrupteur1 = 0;
let radia;
//R.A.F
function radiation() {
    dureeIntervale++;
    if (dureeIntervale < plafondIntervale){
        titrePrincipal.classList.remove("radiation2");
        // Array.from(articles).forEach(article => {
        //     article.style.animation = ("none")
        //     // article.classList.remove("radiation")
        // });
        document.body.classList.remove("radiation");
       
    }else{
        titrePrincipal.classList.add("radiation2");

        // Array.from(articles).forEach(article => {
        //     article.style.animation = ('glitch 0.1s ease-out alternate-reverse');
        //     article.style.animationIterationCount = ('3');
        //     // article.classList.add("radiation");
            
        // });
        document.body.classList.add("radiation");
        
        timeForAnime++;
        if (timeForAnime > 300) {
            timeForAnime = 0;
            dureeIntervale = 0;
            interrupteur1 == 0 ? 
            (document.body.style.backgroundImage = ('url(/asset/background4.webp)'), interrupteur1 = 1):
            (document.body.style.backgroundImage = ('url(/asset/background1.jpeg)'), interrupteur1 = 0);
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
        const test = window.requestAnimationFrame(radiation);
        cancelAnimationFrame(test);
        console.log("eteint");
    })
}); 