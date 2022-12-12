import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: {name : "", firstName: "", token: "", emailPro: "", emailPerso: "", phonePerso: "", phonePro: "", birthday: null, lastConnection: null},
   };

export const usersSlice = createSlice({
    name: 'users',
   
     initialState,
    reducers: {
updateMailPerso: (state, action) => {
    state.value.emailPerso=action.payload
},

updateMailPro: (state, action) => {
    state.value.emailPro=action.payload
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

updatePhonePerso: (state, action) => {
    state.value.phonePerso=action.payload
},

updatePhonePro: (state, action) => {
    state.value.phonePro=action.payload
},

updateBirthday: (state, action) => {
    state.value.birthday=action.payload
},

updateLastConnection: (state, action) => {
    state.value.lastConnection=action.payload
},

    },
   });

export const {updateMailPerso, updateMailPro, updateName, updateFirstName, updateToken, updatePhonePerso, updatePhonePro, updateBirthday, updateLastConnection} = usersSlice.actions;
export default usersSlice.reducer;
