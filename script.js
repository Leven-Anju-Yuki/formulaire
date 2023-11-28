/*
    Prévenez le comportement par défaut du formulaire afin de récupérer 
    les données écrites dans les inputs et les afficher dans les paragraphes 
    correspondants.
*/
const formulaire = document.querySelector('form');

formulaire.addEventListener('submit', function (event) {
    event.preventDefault();

    const prenom = document.getElementById('firstname').value;
    const nom = document.getElementById('lastname').value;

    document.querySelector('.firstname').textContent = 'Votre prénom : ' + prenom;
    document.querySelector('.lastname').textContent = 'Votre nom : ' + nom;
});
