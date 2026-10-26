// Données de départ fournies. Aucun comportement n’est encore implémenté.
let produits = [
  { id: 1, nom: "Jus d’orange", prix: 12 },
  { id: 2, nom: "Biscuits", prix: 8 }
];
let prochainId = 3;

function afficherproduits () {
  const container = document.querySelector('#liste-produits');
  container.replaceChildren();
  produits.forEach((produit) => {
  const article = document.createElement('article');
  article.textContent = produit
  const h2 = document.createElement('h2');
  h2.textContent = produit.nom;
  const p = document.createElement('p');
  p.textContent = `Prix : ${produit.prix}`;
  } 
)
}
produits.forEach((produit) => {
  afficherproduits(produit)
}
)








// À vous de jouer :
// 1. Afficher les produits du tableau au chargement.
// 2. Gérer l’ajout depuis le formulaire.
// 3. Gérer le retrait du produit cliqué.
// 4. Bonus : compteur, état vide et total.