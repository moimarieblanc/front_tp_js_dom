// Créez un objet avec une propriété de votre choix
// Ajoutez dans un second temps une propriété de type booléen
// Retournez l'objet
function createObject() {
	myObject = {
		monParam1: '456',
		monParam2: 'bonjour',
		myBool: true
	}
	return myObject;
}

console.log(createObject());

// Retournez un objet avec trois propriétés :
// - val1: la valeur du paramètre v1
// - absVal2: la valeur absolue du paramètre v2
// - somme de v1 et v2
function additionObject(v1, v2) {
	myObject = {
		val1 : v1,
		absVal2 : Math.abs(v2),
		somme : v1+v2
	}
	return myObject;
}

console.log(additionObject(2, 6));
console.log(additionObject(-5, -10));

// Retournez un tableau avec uniquement des nombres impairs supérieurs à 0
// Si le tab passé en paramètre est null, retournez un tableau vide
function removeEvenNumbers(tab) {

	function isNotEven (number){
		return(number%2 !=0);
	}

	if (tab != null) {
		let tabImpairs = tab.filter(isNotEven);
		return tabImpairs;
	} else {
		return [];
	}
}

console.log(removeEvenNumbers([]));
console.log(removeEvenNumbers(null));
console.log(removeEvenNumbers([-1, 1, 2, 0, 3, 4, 12, 11]));

// Complétez la fonction testNumNeg qui retourne vrai si au
// moins un élément du tableau en entrée est un nombre et
// qu'il a une valeur négative
function testNumNeg(tab) {
	const isNUmNeg = (currentValue) => currentValue < 0;
	return tab.some(isNUmNeg);
}

console.log(testNumNeg([2, "kiwi", true, -2]));
console.log(testNumNeg([0, "orange", false]));
console.log(testNumNeg([0, 4, 8]));


// Complétez la fonction ci-dessous pour retourner un
// tableau contenant la table de multiplication (jusqu'à 10 inclus)
// du nombre passé en paramètre, par exemple :
// n = 5 : [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
function multTable(n) {
	myTab=[];
	for (i=0; i<=10; i++){
		myTab.push(i*n);
	}
	return myTab;
}

console.log("Table de multiplication de 1", multTable(1));
console.log("Table de multiplication de 5", multTable(5));

// En utilisant une boucle et la fonction précédente,
// retournez un tableau contenant toutes les tables de multiplication
// (jusqu'à 10 inclus) pour les nombres allant de 0 à la valeur d'un
// paramètre max (inclus)
function multTables(max) {
	myFullTab = [];
	for(j=1; j<=5 ; j++) {
		myFullTab.push(multTable(j)) ;
	}
	return myFullTab;
}

console.log(multTables(5));

const products = [
	{
		model: "Xiaomi Mi 9",
		size: "74.7 mm X 157.5 mm X 7.6 mm",
		weight: "173"
	},
	{
		model: "Samsung Galaxy A21",
		size: "75.3 mm X 163.7 mm X 9.0 mm",
		weight: "192"
	}
];

// Modifiez la fonction pour qu'elle compte le nombre de caractères
// de chaque string contenu dans l'objet passé en paramètre (excluez les espaces)
// Remplacez chaque chaîne par sa taille uniquement dans le contexte de la fonction
// Le console.log suivant l'appel à la fonction howLongIsIt fonction doit toujours
// afficher l'objet de base
// Vous ne devez pas créer d'objet à l'intérieur de la fonction,
// ni utiliser de variable globale
function howLongIsIt(obj) {
	// votre code
}

// Vous devriez avoir à modifier cette ligne...
let newProduct0 = howLongIsIt(products[0]);
console.log(products[0]);
/* doit afficher :
{
	model: "Xiaomi Mi 9",
	size: "74.7 mm X 157.5 mm X 7.6 mm",
	weight: "173"	
}
*/
console.log(newProduct0);
/* doit afficher :
{
	model: 11,
	size: 27,
	weight: 3
}
*/

// Complétez votre code avec une fonction transformant tous les objets
// compris dans le tableau passé en paramètre de la même manière que précédemment
function howLongIsItTab(tab) {
	// votre code
}

// Vous devriez avoir à modifier cette ligne...
let newProducts = howLongIsItTab(products);
console.log(products);
console.log(newProducts);



