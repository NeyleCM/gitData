import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: null,
  username: null,
  followers: 0,
  public_repos: 0,
  avatar_url: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      const { name, login, followers, public_repos, avatar_url } = action.payload;
      state.name = name || 'No disponible';
      state.username = login;
      state.followers = followers;
      state.public_repos = public_repos;
      state.imagen = avatar_url;
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;