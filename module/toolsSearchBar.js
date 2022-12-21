// fonction permettant d'éliminer les doublons dans un tableau
function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
  }

// fonction permettant de récupérer tous les titles des tags dans les contacts
// listContacts contient le tableau des contacts
function getAllTags(listContacts) {
    const onlyTagsTitle = listContacts.map(eltContact => {
                const tagsTitles = eltContact.tags.map(eltTag =>{ return eltTag.title})
                return tagsTitles
                                                        }); // renvoie un array d'array
    
    const allTags = onlyTagsTitle.reduce(function(a, b) {return a.concat(b);});

    return removeDuplicates(allTags);
  }

  // fonction permettant de récupérer les titles des tags de chaque contact
// listContacts contient le tableau des contacts
function getTagsCombination(listContacts) {
    const combineTagsTitle = listContacts.map(eltContact => {
                    const tagsTitles = eltContact.tags.map(eltTag =>{ return eltTag.title})
            return tagsTitles
                                                        }); 
    return combineTagsTitle;
  }

  // fonction permettant de récupérer les tags en combinaison avec un tag donné
  function getAssociateTags(theTag,listContacts){
        const combinations =  getTagsCombination(listContacts).filter(eltCombine => eltCombine.some(elt => elt === theTag))
        const onlyTags = combinations.reduce(function(a, b) {return a.concat(b);});
    return removeDuplicates(onlyTags).filter(elt=> elt !== theTag);
  } 

  // fonction cherchant si un tableau contient le tag cherché
  function searchTagInArray(tagSearch, arrayTags){
      return arrayTags.some(eltTag => eltTag.title === tagSearch.title)
  }

 // fonction permettant de vérifier si un tableau contient tous les tags 
 function searchAllTagsInArray(tagsSearch, arrayTags){
    let findAllTag = true;
    // on parcourt la liste des tagsSearch
    let i=0;
    while(i<tagsSearch.length && findAllTag){
      searchTagInArray(tagsSearch[i], arrayTags)? findAllTag = true : findAllTag = false;
      i++
    }
    return findAllTag;
 } 

  // fonction permettant de récupérer les contacts ayant les tags cherchés
  // tagsSearch est un tableau d'objet tags et allContacts le tableau 
  function getContactsWithTags(tagsSearch, allContacts){
      const contactsWithOneTag = [];
      const contactsWithAllTags = [];
      
      // vérification qu'on a des données
      if(allContacts || allContacts.length === 0 ){
        return {}
      }

      if(!tagsSearch || tagsSearch.length ===0){
        return {}
      }

      //on parcourt le tableau de contact
      for(let itemContact of allContacts){  
          // on parcourt le tableau de tags
            for(let itemTag of tagsSearch){
                // on vérifie si ce contact possède bien le tag
                if(searchTagInArray(itemTag, itemContact.tags)){
                      // on vérifie si ce contact possède tous les tags
                      if(searchAllTagsInArray(tagsSearch,itemContact.tags)){
                        contactsWithAllTags.push(itemContact)
                      }else{
                        contactsWithOneTag.push(itemContact);
                      }
                }
            }
      }
        
    return {}
  }

  module.exports = { getAllTags, getTagsCombination,getAssociateTags, searchTagInArray, searchAllTagsInArray };