import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 value: [
 {"name":"Papin","firstName":"Mohamed","emails":[{type : 'personnal', email :"PaMo@sfr.fr"}], "phones" :  [{type : "mobile", number:"0626637256"}],"birthday":"2022-12-12T11:18:57.844Z","tags":[{"title":"Série","color":"blue"},{"title":"cuisine","color":"yellow"},{"title":"Développeur","color":"green"},{"title":"loueur","color":"yellow"}],"contactedTimesCounter":{"phoneCounter":3,"smsCounter":8,"emailCounter":16}},
 {"name":"O Neil","firstName":"Josettte","emails":[{type : 'personnal', email : "O Jo@orange.fr"}], "phones" : [{type : "mobile", number :"0754596499"}],"birthday":"2022-12-12T11:18:57.844Z","tags":[{"title":"station","color":"yellow"}],"contactedTimesCounter":{"phoneCounter":2,"smsCounter":12,"emailCounter":6}},
 {"name":"Patulacci","firstName":"Yannick","emails":[{type : 'personnal', email : "Yannick@gmail.com" }],"phones": [{type : 'mobile', number :"0714861783"}],"birthday":"2022-12-12T11:18:57.844Z","tags":[{"title":"Jeu vidéo","color":"orange"}],"contactedTimesCounter":{"phoneCounter":1,"smsCounter":12,"emailCounter":6}}],
};

export const contactsSlice = createSlice({
 name: 'contacts',

 initialState,
 reducers: {
  // addContact permet d'ajouter un contact dans ce reducer qui est un tableau représentant l'ensemble des contacts
  // action.payload sera un objet contact
   addContact: (state, action) => {
    state.value.push(action.payload);
   },

   // replaceAllTags permet de remplacer le tableau de tags à un contact : 
   //action.payload doit être de la forme {contact : obj_contact, tags: tableau_tags}
   replaceAllTags: (state, action) => {
      // on recherche le contact dans le tableau des contacts selon 2 critères : name, firstname (considère que l'utilisateur enregistre sur des noms différents)
    const indexContact = state.value.findIndex(elt => elt.name === action.payload.contact.name && elt.firstName === action.payload.contact.firstName);
    if(indexContact !== -1){
        state.value[indexContact].tags = action.payload.tags;
    }else{
        console.log('error in replaceAllTags : contact not find')
    }
    },

    // addOneTag permet d'ajouter un tag au tableau de tag d'un contact
    // action.payload doit être de la forme {contact : obj_contact, tag : objet_tag}
    addOneTag: (state, action) => {
        // on recherche le contact dans le tableau des contacts selon 2 critères : name, firstname (considère que l'utilisateur enregistre sur des noms différents)
        const indexContact = state.value.findIndex(elt => elt.name === action.payload.contact.name && elt.firstName === action.payload.contact.firstName);
        if(indexContact !== -1){
            state.value[indexContact].tags.push(action.payload.tag);
        }else{
            console.log('error in addOneTag : contact not find')
        }
    },

    //updateTags permet de fusionner le tableau de tags d'un contact avec un nouveau tableau de tag
    //action.payload doit être de la forme {contact : obj_contact, tags: tableau_tags}
    updateTags: (state, action) => {
         // on recherche le contact dans le tableau des contacts selon 2 critères : name, firstname (considère que l'utilisateur enregistre sur des noms différents)
        const indexContact = state.value.findIndex(elt => elt.name === action.payload.contact.name && elt.firstName === action.payload.contact.firstName);
        
        if(indexContact !== -1){
            // on parcourt le tableau de tags des contacts : si on trouve un tag avec le même titre on le remplace sinon on le rajoute
            for(let oneTag of action.payload.tags){
                const searchTag = state.value[indexContact].tags.findIndex(elt => elt.title === oneTag.title);
                if(searchTag !== -1){
                    state.value[indexContact].tags[searchTag] = oneTag;
                }else{
                    state.value[indexContact].tags.push(oneTag)
                }
            }
        }else{
            console.log('error in addOneTag : contact not find')
        }
    },

    //updateContact permet de modifier les données d'un contact
    //action.payload doit être de la forme {contact : obj_contact, newDatas: obj_donnee_à_changer}
    // la donnée à changer doit être du bon format tableau avec le bon type d'objet dedans...
    updateContact: (state, action) => {
        // on recherche le contact dans le tableau des contacts selon 2 critères : name, firstname (considère que l'utilisateur enregistre sur des noms différents)
        const indexContact = state.value.findIndex(elt => elt.name === action.payload.contact.name && elt.firstName === action.payload.contact.firstName);
        if(indexContact !== -1){
            // on parcourt les keys à changer
            for(let theKey in action.payload.newDatas){
                state.value[indexContact][theKey] = action.payload.newDatas[theKey];
            }
        }else{
            console.log('error in updateContact : contact not find')
        }
    },

    //addEmail permet d'ajouter un email à  un contact
    //action.payload doit être de la forme {contact : obj_contact, email: obj_email}
    addEmail : (state, action) => {
        // on recherche le contact dans le tableau des contacts selon 2 critères : name, firstname (considère que l'utilisateur enregistre sur des noms différents)
        const indexContact = state.value.findIndex(elt => elt.name === action.payload.contact.name && elt.firstName === action.payload.contact.firstName);
        if(indexContact !== -1){
            state.value[indexContact].emails.push(action.payload.email)
        }else{
            console.log('error in addEmail : contact not find')
        }
    },

    //updateEmail permet de modifier un email selon son type
    //action.payload doit être de la forme {contact : obj_contact, email :obj_email}
    updateEmail : (state, action) => {
        // on recherche le contact dans le tableau des contacts selon 2 critères : name, firstname (considère que l'utilisateur enregistre sur des noms différents)
        const indexContact = state.value.findIndex(elt => elt.name === action.payload.contact.name && elt.firstName === action.payload.contact.firstName);
        if(indexContact !== -1){
            state.value[indexContact].emails= state.value[indexContact].emails.map((elt,index)=>{
                if(elt.type === action.payload.email.type){
                    return action.payload.email
                }
                return elt;
            })
        }else{
            console.log('error in updateEmail : contact not find')
        }
    },

    //addPhone permet d'ajouter un email à  un contact
    //action.payload doit être de la forme {contact : obj_contact, phone : obj_phone}
    addPhone : (state, action) => {
        // on recherche le contact dans le tableau des contacts selon 2 critères : name, firstname (considère que l'utilisateur enregistre sur des noms différents)
        const indexContact = state.value.findIndex(elt => elt.name === action.payload.contact.name && elt.firstName === action.payload.contact.firstName);
        if(indexContact !== -1){
            state.value[indexContact].phones.push(action.payload.phone)
        }else{
            console.log('error in addPhone : contact not find')
        }
    },

    //updatePhone permet de modifier un objet téléphone (numéro et/ou country, et/ou area) selon son type
    //action.payload doit être de la forme {contact : obj_contact, phone :obj_phone}
    updatePhone : (state, action) => {
        // on recherche le contact dans le tableau des contacts selon 2 critères : name, firstname (considère que l'utilisateur enregistre sur des noms différents)
        const indexContact = state.value.findIndex(elt => elt.name === action.payload.contact.name && elt.firstName === action.payload.contact.firstName);
        if(indexContact !== -1){
            state.value[indexContact].phones= state.value[indexContact].phones.map((elt,index)=>{
                if(elt.type === action.payload.phone.type){
                    return action.payload.phone
                }
                return elt;
            })
        }else{
            console.log('error in updatePhone : contact not find')
        }
    },

 },
});

export const { addContact,  replaceAllTags, addOneTag , updateContact, addEmail, addPhone, updatePhone, updateEmail, updateTags } = contactsSlice.actions;
export default contactsSlice.reducer;