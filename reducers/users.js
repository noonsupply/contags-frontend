import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    lastName: "",
    firstName: "",
    token: "",
    emailMain: "gabin.subri@gmail.com",
    emails: [],
    phones: [],
    birthday: null,
    lastConnection: null,
  },
};

export const usersSlice = createSlice({
  name: "users",

  initialState,
  reducers: {
    updateEmailMain: (state, action) => {
      state.value.emailMain = action.payload;
    },

    addEmail: (state, action) => {
      state.value.emails.push(action.payload);
    },

    updateLastName: (state, action) => {
      state.value.lastName = action.payload;
    },

    updateFirstName: (state, action) => {
      state.value.firstName = action.payload;
    },

    updateToken: (state, action) => {
      state.value.token = action.payload;
    },

    addPhone: (state, action) => {
      state.value.phones.push(action.payload);
    },

    updateBirthday: (state, action) => {
      state.value.birthday = action.payload;
    },

    updateLastConnection: (state, action) => {
      state.value.lastConnection = action.payload;
    },
  },
});

export const {
  updateEmailMain,
  addEmail,
  updateLastName,
  updateFirstName,
  updateToken,
  addPhone,
  updateBirthday,
  updateLastConnection,
} = usersSlice.actions;
export default usersSlice.reducer;
