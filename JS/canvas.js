/* 
Animation d'un sprite d'un personnage qui me ressemble.

Le personnage doit être animé et suivre la souris de l'utilisateur (regard ou pivot).
Le personnage doit adapter son comportement en fonction de se que fait l'utilisateur, (click ou inactivité).

*/

//récupération du canvas et MEP de son contexte
const canvas = document.getElementsByTagName('canvas')[0];
const ctx = canvas.getContext("2d");
let ctxWidth = canvas.width;