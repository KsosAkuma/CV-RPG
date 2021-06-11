var defaut = [
    "Exige beaucoup de toi-même et attends peu des autres. Ainsi beaucoup d'ennuis te seront épargnés.",
    "Choisissez un travail que vous aimez et vous n'aurez pas à travailler un seul jour de votre vie.",
    "Je ne cherche pas à connaître les réponses, je cherche à comprendre les questions.",
    "Notre plus grande gloire n'est point de tomber, mais de savoir nous relever chaque fois que nous tombons.",
    "Nulle pierre ne peut être polie sans friction, nul homme ne peut parfaire son expérience sans épreuve.",
    "Pas trop d'isolement , pas trop de relations , le juste milieu, voilà la sagesse.",
    "Ne vous souciez pas de n'être pas remarqué, cherchez plutôt à faire quelque chose de remarquable.",
    "L'expérience est une lanterne attachée dans notre dos, qui n'éclaire que le chemin parcouru.",
    "Celui qui ne progresse pas chaque jour, recule chaque jour.",
    "Une petite impatience ruine un grand projet.",
    "Ne vous souciez pas d'être sans emploi, souciez-vous plutôt d'être digne d'un emploi.",
    "Ne parlez jamais de vous, ni en bien, car on ne vous croirait pas, ni en mal car on ne vous croirait que trop."
];

function confucius(){
    let citRandom = Math.floor(Math.random() * defaut.length);
    return (`${defaut[citRandom]} <br><br> <strong>Confucius</strong> `);
}

//////////////////////////////////////////
const articleObj2 = [
    // COORDONNEES  i 0
    [
        "La ville de Nice se situe sur la côte d'azur en France, il fait bon vivre.",
    ],
    //titre i 1
    [confucius()],
    //inventaire i 2
    [confucius()],
    // HARDSKILL i 3
    [
        // l1:
         "Ne l'ayant utilisé qu'une fois lors d'un prototypage d'application IOS, j'ai adoré le concept, le language d'Apple et son framework.",
        // l2:
         "Bonnes connaissances, bien que je ne connaisse pas toutes les balises",
        // l3:
         "Bonne utilisation de CSS, j'apprécie principalement l'outil \"grid\" et je vais bientôt level Up avec des animations plus poussées!",
        // l4:
         "J'ai commencé à apprendre la programmation avec ce language, il me plaît beaucoup, mais il me reste encore du chemin à parcourir.",
        // l4:
         "Bien que titulaire d'un certificat d'apprentissage je possède actuellement très peu d'expérience pratique sur ce language.",
        // l5:
         "Amateur de Jeux vidéo en 2D, j'ai un attrait particulier pour cette API.",
        // l6:
         "Notion de base, expérience à venir.",
        // l7:
         "Notion de base, expérience à venir.",
        // l8:
         "Notion de base, expérience à venir.",
        // l9:
         "Notion de base, expérience à venir.",
        // l10:
         "Notion de base, expérience à venir.",
        // l12:
         "Ne l'ayant utilisé qu'une fois lors d'un prototypage d'application IOS, j'ai adoré "
    ],
    //SOFTSKILL i 4
    [
        // l1:
         "Observation, déduction et même intuition, ces trois qualitées réunies m'aident à comprendre la source du problème ou à le démasquer sous forme d'anticipation.",
        // l2:
         "J'aime optimiser mon temps de travail, ou le produit proposé, j'ai souvent des idées et je les proposes si je suis en équipe sinon je les appliques directement.",
        // l3:
         "Etant saisonnier de ma première profession j'ai acquis une facilité à m'adapter à un nouvelle environnement.",
        // l4:
         "Quelle que soit l'activité, du moment qu'elle est en équipe, la Communication est la clef du succès ! Et j'aime le succès.",
        // l4:
         "Etant chef de rang de ma première profession, j'avais l'habitude de bien présenter le plat servis et de bien renseigner le client sur ces choix.",
        // l5:
         "Etant chef de rang de ma première profession, être à l'écoute et savoir accueillir est essentiel à un bon serveur, c'est la base d'un métier de service.",
        // l6:
         "A la recherche constante d'une éternelle progression, je me dois de prendre l'initiative pour progresser et améliorer ce qui est déja établis (si cela est possible)."
    ],
    // FORMATION i 5
    [
        // l1:
         "Formation de sept mois auprès de l'école SIMPLON.co sur le métier de Developpeur Web et Web mobile. Formation diplômante suite à une présentation devant un jury.",
        // l2:
         "Formation intensive de quatre semaines auprès de l'école SIMPLON.co, présentation devant jury d'un prototype d'application IOS. Apprentissage de l'UX design, swift et swiftUI. (Projet dans mon portfolio)",
        // l3:
         "Formation interne du Club Meditérannée suite à une promotion au poste d'assistant manager.",
        // l4:
         "Résultat de mes annéees de lycée.",
        // l5:
         "Résultat de mes annéees de collège."
    ],
    //EXPERIENCES i 6
    [
        // l1:
        "Récupération et revalorisation de mobilier abîmé avant de les vendres.",
        "Récupération et revalorisation de mobilier abîmé avant de les vendres.",
        // l2:
        "Saison d'été dans une brasserie réputée de Nice, cette saison très rythmée ma permis de venir m'installer sur la côte d'Azur.", 
        "Saison d'été dans une brasserie réputée de Nice, cette saison très rythmée ma permis de venir m'installer sur la côte d'Azur.",
        // l3:
        "Saison d'hiver dans un petit coin de paradis, sports d'hiver et piscine couverte avec vue sur les pistes.",
         "Saison d'hiver dans un petit coin de paradis, sports d'hiver et piscine couverte avec vue sur les pistes.",
        // l4:
        "Deux saisons en temps qu'assistant manager, une super expérience malgrès le salaire...",
         "Deux saisons en temps qu'assistant manager, une super expérience malgrès le salaire...",
        // l5:
        "Super expérience le Club Med, multiculturel et organisé, j'ai appris énormement.",
        "Super expérience le Club Med, multiculturel et organisé, j'ai appris énormement.",
        // l6:
        "Club Med, mélanger le travail d'équipe, une phrase pour résumé \"La performance est individuelle mais le succès est collectif\".",
        "Club Med, mélanger le travail d'équipe, une phrase pour résumé \"La performance est individuelle mais le succès est collectif\".",
        // l7:
        "Mon premier travail, contrat etudiant, je travaillais le weekend et les vacances scolaire. Vente de pizza à emporter, j'ai créer la bas les bases de mon relationnel avec les clients.",
        "Mon premier travail, contrat etudiant, je travaillais le weekend et les vacances scolaire. Vente de pizza à emporter, j'ai créer la bas les bases de mon relationnel avec les clients."
    ],

    // description i 7
    // [confucius()]
]
console.log(articleObj2);