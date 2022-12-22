// fonction permettant de concatener deux tableaux d'objets Tags
function updateArrayTags(initialArray, newDatas) {
  if (initialArray && initialArray.length > 0) {
    const newArray = initialArray.map((eltTag) => eltTag);
    for (let oneTag of newDatas) {
      const searchTag = newArray.findIndex((elt) => elt.title === oneTag.title);

      if (searchTag !== -1) {
        newArray[searchTag] = oneTag;
      } else {
        newArray.unshift(oneTag);
      }
    }

    return newArray;
  }

  return newDatas;
}

// fonction permettant de mettre à jour le tableau des contacts avec un nouveau contact
// initialContacts contient l'ensemble des contacts, contactToChange contient les données pour rechercher un contact
function updateArrayContacts(initialContacts, contactToChange, newDatas){
    if(initialContacts && initialContacts.length>0){
        const newArray = initialContacts.map(elt => elt);
        const indexContact = initialContacts.findIndex(elt => elt.lastName === contactToChange.lastName && elt.firstName === contactToChange.firstName);
        if(indexContact !== -1){
            // on parcourt les keys à changer
            // for(let theKey in newDatas){
            //     newArray[indexContact][theKey] = newDatas[theKey];
            // }
            newArray[indexContact] = newDatas;
        }
        return newArray;
    }
  return [newDatas];
}

module.exports = { updateArrayTags, updateArrayContacts };
