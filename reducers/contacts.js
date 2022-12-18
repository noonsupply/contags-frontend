import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 value: [{"lastName":"Colucci","firstName":"Yvon","emails":[{"emailType":"personnal","email":"Colucci.Yvon@hotmail.com"}],"phones":[{"phoneType":"perosnnal","number":"0789659298","country":"France","areaCode":"+33"}],"dob":"2022-12-16T21:17:46.182Z","tags":[{"title":"Jeu vidéo","color":"lightgray","border":"none"}],"contactedTimesCounter":{"phoneCounter":4,"smsCounter":10,"emailCounter":13}},{"lastName":"Brown","firstName":"Patrice","emails":[{"emailType":"personnal","email":"Patrice@orange.fr"}],"phones":[{"phoneType":"perosnnal","number":"0733236379","country":"France","areaCode":"+33"}],"dob":"2022-12-16T21:17:46.182Z","tags":[{"title":"basket-ball","color":"orange","border":"none"},{"title":"cuisine","color":"orange","border":"none"},{"title":"pote","color":"green","border":"none"}],"contactedTimesCounter":{"phoneCounter":4,"smsCounter":13,"emailCounter":0}},{"lastName":"Lennon","firstName":"Paul","emails":[{"emailType":"personnal","email":"LePa@capsule.fr"}],"phones":[{"phoneType":"perosnnal","number":"0671023311","country":"France","areaCode":"+33"}],"dob":"2022-12-16T21:17:46.182Z","tags":[{"title":"cours de soutien","color":"green","border":"none"},{"title":"loueur","color":"green","border":"none"}],"contactedTimesCounter":{"phoneCounter":2,"smsCounter":14,"emailCounter":15}},{"lastName":"Rimbault","firstName":"Penny","emails":[{"emailType":"personnal","email":"RiPe@gmail.com"}],"phones":[{"phoneType":"perosnnal","number":"0714773138","country":"France","areaCode":"+33"}],"dob":"2022-12-16T21:17:46.182Z","tags":[{"title":"station","color":"lightgray","border":"none"},{"title":"arts","color":"blue","border":"none"},{"title":"football","color":"green","border":"none"},{"title":"technicien","color":"blue","border":"none"}],"contactedTimesCounter":{"phoneCounter":3,"smsCounter":0,"emailCounter":1}},{"lastName":"Papin","firstName":"Méwen","emails":[{"emailType":"personnal","email":"PaMé@sfr.fr"}],"phones":[{"phoneType":"perosnnal","number":"0662038824","country":"France","areaCode":"+33"}],"dob":"2022-12-16T21:17:46.182Z","tags":[{"title":"comics","color":"green","border":"none"}],"contactedTimesCounter":{"phoneCounter":4,"smsCounter":9,"emailCounter":2}},{"lastName":"Giroud","firstName":"Mathieu","emails":[{"emailType":"personnal","email":"Mathieu@orange.fr"}],"phones":[{"phoneType":"perosnnal","number":"0708951888","country":"France","areaCode":"+33"}],"dob":"2022-12-16T21:17:46.182Z","tags":[{"title":"musique","color":"blue","border":"none"}],"contactedTimesCounter":{"phoneCounter":0,"smsCounter":18,"emailCounter":18}},{"lastName":"Deray","firstName":"Dora","emails":[{"emailType":"personnal","email":"DeDo@hotmail.com"}],"phones":[{"phoneType":"perosnnal","number":"0684381494","country":"France","areaCode":"+33"}],"dob":"2022-12-16T21:17:46.182Z","tags":[{"title":"loueur","color":"lightgray","border":"none"},{"title":"fleurs","color":"blue","border":"none"},{"title":"famille","color":"lightgray","border":"none"},{"title":"loueur","color":"blue","border":"none"}],"contactedTimesCounter":{"phoneCounter":4,"smsCounter":5,"emailCounter":4}},{"lastName":"Camus","firstName":"Yvon","emails":[{"emailType":"personnal","email":"Yvon@capsule.com"}],"phones":[{"phoneType":"perosnnal","number":"0754449465","country":"France","areaCode":"+33"}],"dob":"2022-12-16T21:17:46.182Z","tags":[{"title":"football","color":"green","border":"none"},{"title":"technicien","color":"orange","border":"none"},{"title":"Développeur","color":"yellow","border":"none"}],"contactedTimesCounter":{"phoneCounter":1,"smsCounter":12,"emailCounter":2}},{"lastName":"Papin","firstName":"Alexandre","emails":[{"emailType":"personnal","email":"Papin.Alexandre@caramail.com"}],"phones":[{"phoneType":"perosnnal","number":"0779374815","country":"France","areaCode":"+33"}],"dob":"2022-12-16T21:17:46.182Z","tags":[{"title":"voyages","color":"lightgray","border":"none"}],"contactedTimesCounter":{"phoneCounter":2,"smsCounter":5,"emailCounter":11}},{"lastName":"Karamasov","firstName":"Odile","emails":[{"emailType":"personnal","email":"Karamasov.Odile@gmail.com"}],"phones":[{"phoneType":"perosnnal","number":"0648434050","country":"France","areaCode":"+33"}],"dob":"2022-12-16T21:17:46.182Z","tags":[{"title":"Star Wars","color":"orange","border":"none"},{"title":"station","color":"orange","border":"none"},{"title":"technicien","color":"green","border":"none"},{"title":"Javascript","color":"blue","border":"none"}],"contactedTimesCounter":{"phoneCounter":4,"smsCounter":16,"emailCounter":5}},{"lastName":"Papin","firstName":"Sandra","emails":[{"emailType":"personnal","email":"Sandra@orange.fr"}],"phones":[{"phoneType":"perosnnal","number":"0758018574","country":"France","areaCode":"+33"}],"dob":"2022-12-16T21:17:46.182Z","tags":[{"title":"réparateur","color":"yellow","border":"none"},{"title":"station","color":"red","border":"none"},{"title":"loueur","color":"blue","border":"none"}],"contactedTimesCounter":{"phoneCounter":0,"smsCounter":19,"emailCounter":4}},{"lastName":"Dupont","firstName":"Olivier","emails":[{"emailType":"personnal","email":"Olivier@capsule.com"}],"phones":[{"phoneType":"perosnnal","number":"0655178007","country":"France","areaCode":"+33"}],"dob":"2022-12-16T21:17:46.182Z","tags":[{"title":"cours de soutien","color":"blue","border":"none"}],"contactedTimesCounter":{"phoneCounter":2,"smsCounter":14,"emailCounter":0}},{"lastName":"Poirot","firstName":"Julien","emails":[{"emailType":"personnal","email":"PoJu@capsule.fr"}],"phones":[{"phoneType":"perosnnal","number":"0699770816","country":"France","areaCode":"+33"}],"dob":"2022-12-16T21:17:46.182Z","tags":[{"title":"musique","color":"green","border":"none"},{"title":"The Big Bang Theory","color":"lightgray","border":"none"}],"contactedTimesCounter":{"phoneCounter":0,"smsCounter":10,"emailCounter":13}},{"lastName":"Poirot","firstName":"Luc","emails":[{"emailType":"personnal","email":"Luc@hotmail.com"}],"phones":[{"phoneType":"perosnnal","number":"0750520929","country":"France","areaCode":"+33"}],"dob":"2022-12-16T21:17:46.182Z","tags":[{"title":"Série","color":"yellow","border":"none"},{"title":"ski","color":"yellow","border":"none"},{"title":"pote","color":"yellow","border":"none"}],"contactedTimesCounter":{"phoneCounter":3,"smsCounter":9,"emailCounter":13}},{"lastName":"Al-Khwarizmi","firstName":"Odile","emails":[{"emailType":"personnal","email":"Odile@orange.fr"}],"phones":[{"phoneType":"perosnnal","number":"0668948306","country":"France","areaCode":"+33"}],"dob":"2022-12-16T21:17:46.182Z","tags":[{"title":"football","color":"orange","border":"none"},{"title":"fleurs","color":"blue","border":"none"},{"title":"football","color":"orange","border":"none"}],"contactedTimesCounter":{"phoneCounter":0,"smsCounter":3,"emailCounter":7}},{"lastName":"Asimov","firstName":"Josettte","emails":[{"emailType":"personnal","email":"AsJo@orange.fr"}],"phones":[{"phoneType":"perosnnal","number":"0647689792","country":"France","areaCode":"+33"}],"dob":"2022-12-16T21:17:46.182Z","tags":[{"title":"The Big Bang Theory","color":"yellow","border":"none"},{"title":"arts","color":"lightgray","border":"none"},{"title":"Star Wars","color":"yellow","border":"none"},{"title":"Javascript","color":"red","border":"none"}],"contactedTimesCounter":{"phoneCounter":2,"smsCounter":6,"emailCounter":4}},{"lastName":"Lecter","firstName":"Walter","emails":[{"emailType":"personnal","email":"Walter@sfr.fr"}],"phones":[{"phoneType":"perosnnal","number":"0656363918","country":"France","areaCode":"+33"}],"dob":"2022-12-16T21:17:46.182Z","tags":[{"title":"football","color":"lightgray","border":"none"},{"title":"football","color":"blue","border":"none"},{"title":"musique","color":"orange","border":"none"}],"contactedTimesCounter":{"phoneCounter":1,"smsCounter":4,"emailCounter":19}},{"lastName":"Mc Fly","firstName":"Mohamed","emails":[{"emailType":"personnal","email":"Mc Fly.Mohamed@caramail.com"}],"phones":[{"phoneType":"perosnnal","number":"0665901014","country":"France","areaCode":"+33"}],"dob":"2022-12-16T21:17:46.182Z","tags":[{"title":"Cinéma","color":"green","border":"none"}],"contactedTimesCounter":{"phoneCounter":2,"smsCounter":5,"emailCounter":10}},{"lastName":"Poirot","firstName":"Thomas","emails":[{"emailType":"personnal","email":"Poirot.Thomas@orange.fr"}],"phones":[{"phoneType":"perosnnal","number":"0794296061","country":"France","areaCode":"+33"}],"dob":"2022-12-16T21:17:46.182Z","tags":[{"title":"The Big Bang Theory","color":"orange","border":"none"}],"contactedTimesCounter":{"phoneCounter":1,"smsCounter":10,"emailCounter":19}},{"lastName":"Durden","firstName":"Catherine","emails":[{"emailType":"personnal","email":"Durden.Catherine@orange.fr"}],"phones":[{"phoneType":"perosnnal","number":"0632154028","country":"France","areaCode":"+33"}],"dob":"2022-12-16T21:17:46.182Z","tags":[{"title":"The Big Bang Theory","color":"red","border":"none"}],"contactedTimesCounter":{"phoneCounter":1,"smsCounter":5,"emailCounter":19}},{"lastName":"Curry","firstName":"Bob","emails":[{"emailType":"personnal","email":"Curry.Bob@capsule.fr"}],"phones":[{"phoneType":"perosnnal","number":"0619550622","country":"France","areaCode":"+33"}],"dob":"2022-12-16T21:17:46.182Z","tags":[{"title":"The Big Bang Theory","color":"blue","border":"none"},{"title":"ski","color":"red","border":"none"},{"title":"réparateur","color":"orange","border":"none"}],"contactedTimesCounter":{"phoneCounter":1,"smsCounter":7,"emailCounter":19}},{"lastName":"White","firstName":"Thomas","emails":[{"emailType":"personnal","email":"WhTh@capsule.fr"}],"phones":[{"phoneType":"perosnnal","number":"0754475279","country":"France","areaCode":"+33"}],"dob":"2022-12-16T21:17:46.182Z","tags":[{"title":"Star Wars","color":"lightgray","border":"none"}],"contactedTimesCounter":{"phoneCounter":2,"smsCounter":18,"emailCounter":9}},{"lastName":"Lebowski","firstName":"Walter","emails":[{"emailType":"personnal","email":"LeWa@yahoo.fr"}],"phones":[{"phoneType":"perosnnal","number":"0602880683","country":"France","areaCode":"+33"}],"dob":"2022-12-16T21:17:46.182Z","tags":[{"title":"concert","color":"lightgray","border":"none"},{"title":"voyages","color":"red","border":"none"},{"title":"arts","color":"green","border":"none"},{"title":"pote","color":"orange","border":"none"}],"contactedTimesCounter":{"phoneCounter":2,"smsCounter":19,"emailCounter":1}},{"lastName":"Giroud","firstName":"Ryan","emails":[{"emailType":"personnal","email":"GiRy@sfr.fr"}],"phones":[{"phoneType":"perosnnal","number":"0626048225","country":"France","areaCode":"+33"}],"dob":"2022-12-16T21:17:46.182Z","tags":[{"title":"Cinéma","color":"green","border":"none"},{"title":"famille","color":"blue","border":"none"},{"title":"station","color":"yellow","border":"none"},{"title":"Série","color":"yellow","border":"none"}],"contactedTimesCounter":{"phoneCounter":0,"smsCounter":8,"emailCounter":4}},{"lastName":"O Neil","firstName":"Bob","emails":[{"emailType":"personnal","email":"Bob@gmail.com"}],"phones":[{"phoneType":"perosnnal","number":"0748162507","country":"France","areaCode":"+33"}],"dob":"2022-12-16T21:17:46.182Z","tags":[{"title":"cours de soutien","color":"yellow","border":"none"},{"title":"arts","color":"green","border":"none"},{"title":"station","color":"orange","border":"none"},{"title":"comics","color":"orange","border":"none"}],"contactedTimesCounter":{"phoneCounter":2,"smsCounter":4,"emailCounter":18}},{"lastName":"Asimov","firstName":"Ryan","emails":[{"emailType":"personnal","email":"Asimov.Ryan@gmail.com"}],"phones":[{"phoneType":"perosnnal","number":"0678753370","country":"France","areaCode":"+33"}],"dob":"2022-12-16T21:17:46.182Z","tags":[{"title":"concert","color":"lightgray","border":"none"},{"title":"Cinéma","color":"orange","border":"none"},{"title":"famille","color":"red","border":"none"}],"contactedTimesCounter":{"phoneCounter":2,"smsCounter":14,"emailCounter":7}},{"lastName":"Green","firstName":"Yvon","emails":[{"emailType":"personnal","email":"Green.Yvon@orange.fr"}],"phones":[{"phoneType":"perosnnal","number":"0694503052","country":"France","areaCode":"+33"}],"dob":"2022-12-16T21:17:46.182Z","tags":[{"title":"Javascript","color":"lightgray","border":"none"},{"title":"fleurs","color":"yellow","border":"none"}],"contactedTimesCounter":{"phoneCounter":2,"smsCounter":11,"emailCounter":11}},{"lastName":"Dupont","firstName":"Penny","emails":[{"emailType":"personnal","email":"Dupont.Penny@capsule.com"}],"phones":[{"phoneType":"perosnnal","number":"0701876673","country":"France","areaCode":"+33"}],"dob":"2022-12-16T21:17:46.182Z","tags":[{"title":"ski","color":"lightgray","border":"none"},{"title":"réparateur","color":"orange","border":"none"}],"contactedTimesCounter":{"phoneCounter":0,"smsCounter":0,"emailCounter":3}},{"lastName":"Jones","firstName":"Lucette","emails":[{"emailType":"personnal","email":"Lucette@orange.fr"}],"phones":[{"phoneType":"perosnnal","number":"0712698989","country":"France","areaCode":"+33"}],"dob":"2022-12-16T21:17:46.182Z","tags":[{"title":"musique","color":"red","border":"none"},{"title":"Développeur","color":"green","border":"none"},{"title":"The Big Bang Theory","color":"orange","border":"none"}],"contactedTimesCounter":{"phoneCounter":1,"smsCounter":9,"emailCounter":5}},{"lastName":"Marple","firstName":"Julien","emails":[{"emailType":"personnal","email":"Julien@yahoo.fr"}],"phones":[{"phoneType":"perosnnal","number":"0769853824","country":"France","areaCode":"+33"}],"dob":"2022-12-16T21:17:46.182Z","tags":[{"title":"vélo","color":"lightgray","border":"none"},{"title":"ski","color":"blue","border":"none"}],"contactedTimesCounter":{"phoneCounter":2,"smsCounter":5,"emailCounter":8}},{"lastName":"Turing","firstName":"Mathieu","emails":[{"emailType":"personnal","email":"TuMa@hotmail.com"}],"phones":[{"phoneType":"perosnnal","number":"0654951878","country":"France","areaCode":"+33"}],"dob":"2022-12-16T21:17:46.182Z","tags":[{"title":"Star Wars","color":"green","border":"none"}],"contactedTimesCounter":{"phoneCounter":3,"smsCounter":13,"emailCounter":11}}],
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