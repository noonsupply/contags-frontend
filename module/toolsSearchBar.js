// FONCTIONS POUR GERER L'AFFICHAGE DANS LA BARRE DE RECHERCHE

// fonction permettant d'éliminer les doublons dans un tableau
function removeDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

// function permettant de transformer un array d'array en un simple array [[a,b], [a,c]] deviendra [a,b,a,c] (sécurité : on vérifie que les éléments ne sont pas undefined)
function toArray(theArray){
  return theArray.reduce(function (a, b) {
    if(a && b){
      return a.concat(b); 
    }
  }
  )
}

// fonction permettant de récupérer tous les titles des tags dans l'ensemble des contacts
// listContacts contient le tableau des contacts
function getAllTags(listContacts) {
  // sécurité : on vérifie qu'il y a bien des contacts
  if (listContacts && listContacts.length > 0) {
    // récupération des tags de chaque contact en mappant sur les contacts
    const onlyTagsTitle = listContacts.map((eltContact) => {
      if (eltContact.tags && eltContact.tags.length > 0) {
        // s'il y a des tags au contact, on mappe sur ce tableau de tags pour récupérer les titres
        const tagsTitles = eltContact.tags.map((eltTag) => {
            return eltTag.title;
          }); //fin de la map sur le tableau de tags
        return tagsTitles;
      }
    }); // fin de la map sur le tableau de contacts(renvoie un array d'array)

    // transformation en array d'éléments
    const allTags = toArray(onlyTagsTitle);
    
    // sécurité : s'il n'y a pas de tags (=undefined) on renvoit un tableau vide (par défaut) sinon on élimine les doublons (fonction removeDuplicates)
    if(allTags){
      return removeDuplicates(allTags);
    }

  }
  return [];
}

// function permettant de récupérer tous les n° de téléphone (pour la fonction suivante)
function getAllPhones(listContacts) {
  const onlyPhonesNumber = listContacts.map((eltContact) => {
    if (eltContact.phones) {
      const phoneNumb = eltContact.phones.map((eltPhone) => {
        return eltPhone.number;
      });
      return phoneNumb;
    }
    return undefined;
  }); // renvoie un array d'array

  const allNumbers = onlyPhonesNumber.reduce(function (a, b) {
    return a.concat(b);
  });

  return removeDuplicates(allNumbers);
}

// function permettant de récupérer toutes les données cherchables : nom, prénom, téléphones, tags (non utilisé pour l'instant)
function getAllDatas(listContacts) {
  const tagArray = getAllTags(listContacts);
  const lastNameArray = listContacts.map((eltContact) => {
    return eltContact.lastName;
  });
  const firstNameArray = listContacts.map((eltContact) => {
    return eltContact.firstName;
  });
  const phonesArray = getAllPhones(listContacts);
  let result = firstNameArray.concat(lastNameArray);
  result = tagArray.concat(removeDuplicates(result));
  result = phonesArray.concat(result);
  return result;
}


// fonction permettant de vérifier si le tableau de tags d'un contact contient tous les tags cherchés (tableau tagsSearch)
function searchAllTagsInArray(tagsSearch, arrayTagsContact) {
  let findAllTag = true;
  // on parcourt la liste des tagsSearch
  let i = 0;
  while (i < tagsSearch.length && findAllTag) {
    arrayTagsContact.some((eltTag) => eltTag.title.toLowerCase() === tagsSearch[i].toLowerCase())
      ? (findAllTag = true)
      : (findAllTag = false);
    i++;
  }
  return findAllTag;
}


// fonction permettant de trier un tableau selon la lettre rentrée ( paramètre letter) et selon l'ordre alphabétique 
// elle renvoie un tableau avec en 1ere partie les éléments commençant par la lettre (dans l'ordre alphabétique) 
// et en 2e partie les éléments qui ne commencent pas par la lettre (dans l'ordre alphabétique)
function specialSort(arrayToSort, letter) {
  // récupération de chaque partie
  const withLetter = arrayToSort.filter((elt) => elt[0].toLowerCase() === letter.toLowerCase());
  const withoutLetter = arrayToSort.filter((elt) => elt[0].toLowerCase() !== letter.toLowerCase());

  // tri par ordre alphabétique de chaque partie
  const withLetterSort = withLetter.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
  const withoutLetterSort = withoutLetter.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

  return withLetterSort.concat(withoutLetterSort);
}

// fonction handleDisplayMatching permet de trouver les tags qui ont une partie en commun avec le texte entré
// le tableau renvoyé est trié : 1ère partie ceux commençant par la même lettre que le texte, puis ceux contenant une partie du texte
function handleDisplayMatching(arrayTags, textToSearch) {
  // sécurité : on vérifie qu'il y a du text, sinon par défaut on retourne le tableau avec les tags cherchés
  if (textToSearch) {
    const filterArray = arrayTags.filter((elt) => elt.toLowerCase().includes(textToSearch.toLowerCase()));
    return specialSort(filterArray, textToSearch[0]);
  }

  return arrayTags;
}

// fonction permettant de filtrer un tableau pour éliminer les elt en commun dans les deux tableaux
function arrayFilter(arrayWithElt, arrayToFilter) {
  return arrayToFilter.filter((elt) =>!arrayWithElt.some((item) => item.toLowerCase() === elt.toLowerCase()));
}

// fonction permettant de récupérer les tags (dans les contact) qui sont en combinaison avec un tableau de tag donné
// le tableau renvoyé est filtré : il ne contient pas les élts cherchés
function getAssociateTags(arrayTags, listContacts) {
  const tagsFindArray = [];
  // on parcourt le tableau des contacts et on vérifie si la personne possède les tags cherchés
  for (let itemContact of listContacts) {
    if (searchAllTagsInArray(arrayTags, itemContact.tags)) {
      tagsFindArray.push(itemContact.tags.map((elt) => elt.title));
    }
  }
  // on vérifie que le tableau de tableau n'est pas vide avant de le transformer en tableau d'éléments
  let tagsFind = [];
  if (tagsFindArray.length > 0) {
        // on transforme en tableau d'éléments, on élimine les doublons et on filtre pour ne plus avoir les éléments cherchés 
    tagsFind = toArray(tagsFindArray);
    tagsFind = removeDuplicates(tagsFind);
    tagsFind = arrayFilter(arrayTags, tagsFind);
  }
  // on renvoit le tableau trié par ordre alphabétique
  return tagsFind.sort((a, b) =>
    a.toLowerCase().localeCompare(b.toLowerCase())
  );
}

// fonction pour grouper les tags par deux pour l'affichage dans la FlatList
function groupByThree(arrayOfTags) {
  //affichage des tags
  const groupData = [];
  // recherche de la fin de l'itération 
  const endIteration = Math.ceil(arrayOfTags.length / 3);

  for (let i = 0; i < endIteration; i++) {
    groupData.push({
      first: arrayOfTags[3 * i],
      second: arrayOfTags[3 * i + 1],
      third: arrayOfTags[3 * i + 2],
    });
  }
  return groupData;
}
/*************************************
  FONCTIONS POUR GERER LA RECHERCHE
**************************************/

// fonction cherchant si un tableau contient le tag cherché
function searchTagInArray(TitleTagSearch, arrayTags) {
  return arrayTags.some((eltTag) => eltTag.title.toLowerCase() === TitleTagSearch.toLowerCase());
}

// fonction permettant de récupérer les tags cherchés (titlesTagsSearch) en commun avec ceux d'un tableau de tags (arrayTags)
function getCommonTags(titlesTagsSearch, arrayTags) {
  const matchTags = [];
  // on parcourt la liste des tags cherchés
  for (let itemTitleTag of titlesTagsSearch) {
    if (searchTagInArray(itemTitleTag, arrayTags)) {
      matchTags.push(itemTitleTag);
    }
  }
  return matchTags;
}

// fonction permettant de récupérer les contacts ayant les tags cherchés
// tagsSearch est un tableau d'objet tags et allContacts le tableau
// cette fonction renvoie un objet avec comme 1er élt le tableau des contacts contenant tous les tags 
// et en second élt le tableau des contact qui possède au moins un des tags cherchés
function getContactsWithTagsSearching(titlesTagsSearch, allContacts) {
  const contactsWithAtLeastOneTag = [];
  const contactsWithAllTags = [];

  // sécurité : vérification qu'on a des données
  if (!allContacts || allContacts.length === 0) {
    return { contactsMatchAllTags: [], contactsAnyTags: [] };
  }
  if (!titlesTagsSearch || titlesTagsSearch.length === 0) {
    return { contactsMatchAllTags: [], contactsAnyTags: [] };
  }

  //on parcourt le tableau de contact 
  for (let itemContact of allContacts) {
    // sécurité on vérifie que le contact possède un tableau de tag
    if(itemContact.tags){
      // on cherche les tags en commun dans le tableau de tag du contact
      const commonTags = getCommonTags(titlesTagsSearch, itemContact.tags);
    
      // cas où le contact contient tous les tags cherchés : on l'ajoute au deux tableaux
      if (commonTags.length > 0 && commonTags.length === titlesTagsSearch.length) {
      contactsWithAllTags.push(itemContact);
      contactsWithAtLeastOneTag.push({contact: itemContact,tags: commonTags});
      }

      // cas où le contact contient certains tags mais pas tous : on l'ajoute qu'au second tableau
      if (commonTags.length > 0 && commonTags.length !== titlesTagsSearch.length) {
        contactsWithAtLeastOneTag.push({contact: itemContact,tags: commonTags,});
      }
    }
    
  } // fin de l'itération sur le tableau de contact

  return {
    contactsMatchAllTags: contactsWithAllTags,
    contactsAnyTags: contactsWithAtLeastOneTag,
  };
}


module.exports = {
  getAllTags,
  getAssociateTags,
  searchTagInArray,
  searchAllTagsInArray,
  getCommonTags,
  getContactsWithTagsSearching,
  handleDisplayMatching,
  arrayFilter,
  groupByThree,
  getAllDatas,
};
