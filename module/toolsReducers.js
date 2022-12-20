// fonction permettant de concatener deux tableaux d'objets Tags
function updateArrayTags(initialArray, newDatas) {
    if(initialArray.length >0){
        const newArray = initialArray.map(eltTag => eltTag);

        for(let oneTag of newDatas){
            const searchTag = newArray.findIndex(elt => elt.title === oneTag.title);

            if(searchTag !== -1){
                newArray[searchTag] = oneTag;
            }else{
                newArray.push(oneTag)
            }
        }

        return newArray;
    }
    
    return newDatas
  }
  

  module.exports = { updateArrayTags };