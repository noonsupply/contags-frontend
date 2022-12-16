import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: {name : "", firstName: "", token: "", emailMain: "", emails: [], phones: [], birthday: null, lastConnection: null, tagsPerso :[]},
   };

export const usersSlice = createSlice({
    name: 'users',
   
     initialState,
    reducers: {
updateEmailMain: (state, action) => {
    state.value.emailPrincipal=action.payload
},

addEmail: (state, action) => {
    state.value.emails.push(action.payload);
},

updateName: (state, action) => {
    state.value.name=action.payload
},

updateFirstName: (state, action) => {
    state.value.firstName=action.payload
},

updateToken: (state, action) => {
    state.value.token=action.payload
},

addPhone: (state, action) => {
    state.value.phones.push(action.payload);
},

updateBirthday: (state, action) => {
    state.value.birthday=action.payload
},

updateLastConnection: (state, action) => {
    state.value.lastConnection=action.payload
},

//updateTags permet de fusionner le tableau de tags du user avec un nouveau tableau de tag
    //action.payload doit être de la forme {tagsPerso: tableau_tags}
updateTagsPerso: (state, action) => {
    // console.log("start",state.value.tagsPerso)
    // if(state.value.tagsPerso && state.value.tagsPerso.length>0){
        // on parcourt le tableau de tags des contacts : si on trouve un tag avec le même titre on le remplace sinon on le rajoute
        for(let oneTag of action.payload.tagsPerso){
            const searchTag = state.value.tagsPerso.findIndex(elt => elt.title === oneTag.title);
            if(searchTag !== -1){
                state.value.tagsPerso[searchTag] = oneTag;
            }else{
                state.value.tagsPerso.push(oneTag)
            }
        }
//     }else{
//         // il n'y avait pas de tags, on ajoute directement tous les tags
//         state.value.tagsPerso = action.payload.tagsPerso ;
//     }
//     console.log("start",state.value.tagsPerso)
    },

    },
   });

export const {updateEmailMain, addEmail, updateName, updateFirstName, updateToken, addPhone, updateBirthday, updateLastConnection, updateTagsPerso} = usersSlice.actions;
export default usersSlice.reducer;
