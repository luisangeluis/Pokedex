import { createSlice } from '@reduxjs/toolkit';

export const userNameSlice = createSlice({
  name: 'userName',
  initialState: '',
  //funciones que trabajan con nuestro estado
  reducers: {
    setUserName: (state, action) => action.payload,
  },
});
export const { setUserName } = userNameSlice.actions;
export default userNameSlice.reducer;
