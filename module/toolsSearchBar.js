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

  module.exports = { getAllTags, getTagsCombination,getAssociateTags };