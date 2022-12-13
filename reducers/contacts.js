import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 value: [{"name":"O Neil","firstName":"Josettte","emailPro":"","emailPerso":"O Jo@orange.fr","phonePerso":"0754596499","phonePro":"","birthday":"2022-12-12T11:18:57.844Z","tags":[{"title":"station","color":"yellow"}],"contactedTimesCounter":{"phoneCounter":2,"smsCounter":12,"emailCounter":6}},{"name":"Papin","firstName":"Mohamed","emailPro":"","emailPerso":"PaMo@sfr.fr","phonePerso":"0626637256","phonePro":"","birthday":"2022-12-12T11:18:57.844Z","tags":[{"title":"Série","color":"blue"},{"title":"cuisine","color":"yellow"},{"title":"Développeur","color":"green"},{"title":"loueur","color":"yellow"}],"contactedTimesCounter":{"phoneCounter":3,"smsCounter":8,"emailCounter":16}},{"name":"Patulacci","firstName":"Yannick","emailPro":"","emailPerso":"Yannick@gmail.com","phonePerso":"0714861783","phonePro":"","birthday":"2022-12-12T11:18:57.844Z","tags":[{"title":"Jeu vidéo","color":"orange"}],"contactedTimesCounter":{"phoneCounter":1,"smsCounter":12,"emailCounter":6}}],
};

export const contactsSlice = createSlice({
 name: 'contacts',

  initialState,
 reducers: {
  // addContact permet d'ajouter un contact dans ce reducer qui est un tableau représentant l'ensemble des contacts
  // action.payload sera un objet contact
   addContact: (state, action) => {
    state.value.push(action.payload);
    console.log(state.value)
   },
   // addTags permet d'ajouter un tableau de tags à un contact : action.payload doit être de la forme {contact : obj_contact, tags: tableau_tags}
   addTags: (state, action) => {
      // on recherche le contact dans le tableau des contacts

  },
 },
});

export const { addContact, addTags } = contactsSlice.actions;
export default contactsSlice.reducer;