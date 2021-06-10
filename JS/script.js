// au survole de certain éléments de la souris, une description adapté doit être affiché au bonne endroit

// on va stocké les éléments à survoler et les élement à affiché dans un tableau en leur attribuant un index correspondant
let articles = document.getElementsByTagName("article");

// Target chaque element de la page

// Array.from(articles).forEach(article => {
    
//     Array.from(article.children).forEach(test => {
        
        
//         test.addEventListener('mouseover',event => {
//             // articles[7].lastElementChild.innerHTML = event.target;
//             //test.children = HTMLCOLLECTION of element of article
//             // console.log(test.children);
//         })
//     });
// });

for (let i = 0; i < Array.from(articles).length; i++) {
    const article = Array.from(articles)[i];
    // let art = i;
    
    for (let y = 0; y < Array.from(article.children).length; y++) {
        const element = Array.from(article.children)[y];
        
        for (let z = 0; z < Array.from(element.children).length; z++) {
            const li = Array.from(element.children)[z];
            // console.log(li);
            // let l = z;
            // let resultat = `articleObj.art$[art].l${l}`;
            li.addEventListener('mouseover',event => {
                if(i == 1 || i == 2 || i == 7){
                    li.addEventListener('mouseover',event => {
                        articles[7].lastElementChild.innerHTML = confucius();
                    })
                }else if( i == 3){
                    for (let p = 0; p < Array.from(li.children).length; p++) {
                        const sousUl = Array.from(li.children)[p];
                        for (let r = 0; r < Array.from(sousUl.children).length; r++) {
                            const sousLi = Array.from(sousUl.children)[r];
                            sousLi.addEventListener('mouseover',event => {
                                articles[7].lastElementChild.innerHTML = articleObj2[i][r];
                            })
                        }
                    }
                }else{
                    if(articleObj2[i][z] == undefined){
                        li.addEventListener('mouseover',event => {
                            articles[7].lastElementChild.innerHTML = confucius();
                        })
                    }else{
                        li.addEventListener('mouseover',event => {
                            articles[7].lastElementChild.innerHTML = articleObj2[i][z];
                        })
                    }
                }
            })
        }
    }
}
//faire correspondre chaque article avec la propriété de mon objet
//et chaque li avec la valeur de la proprité de cette meme propriété
