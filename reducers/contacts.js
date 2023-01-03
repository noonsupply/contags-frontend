import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: []
};

export const contactsSlice = createSlice({
  name: "contacts",

  initialState,
  reducers: {
    // addContact permet d'ajouter un contact dans ce reducer qui est un tableau représentant l'ensemble des contacts
    // action.payload sera un objet contact
    addContact: (state, action) => {
      state.value.push(action.payload);
      //console.log(action.payload)
    },
    // setTags permet de remplacer le tableau de tags d'un contact
    //action.payload doit être de la forme {indexContact : index_du_contact, tags: tableau_tags}
    setTags: (state, action) => {
      state.value[action.payload.indexContact].tags = action.payload.tags;
    },
    // addOneTag permet d'ajouter un tag au tableau de tag d'un contact
    // action.payload doit être de la forme {indexContact : index_du_contact, tag : objet_tag}
    addOneTag: (state, action) => {
      state.value[action.payload.indexContact].tags.push(action.payload.tag);
    },

    //updateContact permet de modifier les données d'un contact
    //action.payload doit être de la forme {indexContact : index_du_contact, newDatas: obj_contact}
    updateContact: (state, action) => {
      state.value[action.payload.indexContact] = action.payload.newDatas;
    },

    //addEmail permet d'ajouter un email à  un contact
    //action.payload doit être de la forme {contact : obj_contact, email: obj_email}
    addEmail: (state, action) => {
      // on recherche le contact dans le tableau des contacts selon 2 critères : name, firstname (considère que l'utilisateur enregistre sur des noms différents)
      const indexContact = state.value.findIndex(
        (elt) =>
          elt.name === action.payload.contact.name &&
          elt.firstName === action.payload.contact.firstName
      );
      if (indexContact !== -1) {
        state.value[indexContact].emails.push(action.payload.email);
      } else {
        console.log("error in addEmail : contact not find");
      }
    },

    //updateEmail permet de modifier un email selon son type
    //action.payload doit être de la forme {contact : obj_contact, email :obj_email}
    updateEmail: (state, action) => {
      // on recherche le contact dans le tableau des contacts selon 2 critères : name, firstname (considère que l'utilisateur enregistre sur des noms différents)
      const indexContact = state.value.findIndex(
        (elt) =>
          elt.name === action.payload.contact.name &&
          elt.firstName === action.payload.contact.firstName
      );
      if (indexContact !== -1) {
        state.value[indexContact].emails = state.value[indexContact].emails.map(
          (elt, index) => {
            if (elt.type === action.payload.email.type) {
              return action.payload.email;
            }
            return elt;
          }
        );
      } else {
        console.log("error in updateEmail : contact not find");
      }
    },

    //addPhone permet d'ajouter un email à  un contact
    //action.payload doit être de la forme {contact : obj_contact, phone : obj_phone}
    addPhone: (state, action) => {
      // on recherche le contact dans le tableau des contacts selon 2 critères : name, firstname (considère que l'utilisateur enregistre sur des noms différents)
      const indexContact = state.value.findIndex(
        (elt) =>
          elt.name === action.payload.contact.name &&
          elt.firstName === action.payload.contact.firstName
      );
      if (indexContact !== -1) {
        state.value[indexContact].phones.push(action.payload.phone);
      } else {
        console.log("error in addPhone : contact not find");
      }
    },

    //updatePhone permet de modifier un objet téléphone (numéro et/ou country, et/ou area) selon son type
    //action.payload doit être de la forme {contact : obj_contact, phone :obj_phone}
    updatePhone: (state, action) => {
      // on recherche le contact dans le tableau des contacts selon 2 critères : name, firstname (considère que l'utilisateur enregistre sur des noms différents)
      const indexContact = state.value.findIndex(
        (elt) =>
          elt.name === action.payload.contact.name &&
          elt.firstName === action.payload.contact.firstName
      );
      if (indexContact !== -1) {
        state.value[indexContact].phones = state.value[indexContact].phones.map(
          (elt, index) => {
            if (elt.type === action.payload.phone.type) {
              return action.payload.phone;
            }
            return elt;
          }
        );
      } else {
        console.log("error in updatePhone : contact not find");
      }
    },

    setContact: (state, action) => {
      state.value = action.payload;
    },

    logoutContact: (state) => {
      state.value = initialState.value;
    },
  },
});

export const {
  addContact,
  setTags,
  addOneTag,
  updateContact,
  addEmail,
  addPhone,
  updatePhone,
  updateEmail,
  updateTags,
  setContact,
  logoutContact,
} = contactsSlice.actions;

export default contactsSlice.reducer;
