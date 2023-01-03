import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    lastName: "",
    firstName: "",
    token: "",
    emailMain: "",
    emails: [],
    phones: [],
    dob: null,
    lastConnection: null,
    tagsPerso: [],
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

    updateDateOfBirth: (state, action) => {
      state.value.dob = action.payload;
    },

    updateLastConnection: (state, action) => {
      state.value.lastConnection = action.payload;
    },

    updateTagsPerso: (state, action) => {
      state.value.tagsPerso = action.payload;
    },

    logout: (state) => {
      state.value = initialState.value;
    },

    setUser:(state, action) => {
      state.value = action.payload;
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
  updateDateOfBirth,
  updateLastConnection,
  updateTagsPerso,
  logout,
  setUser,
} = usersSlice.actions;
export default usersSlice.reducer;
