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

    updateName: (state, action) => {
      state.value.name = action.payload;
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
  },
});

export const {
  updateEmailMain,
  addEmail,
  updateName,
  updateFirstName,
  updateToken,
  addPhone,
  updateDateOfBirth,
  updateLastConnection,
} = usersSlice.actions;
export default usersSlice.reducer;
