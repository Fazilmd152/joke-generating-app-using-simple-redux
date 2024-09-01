import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const fetchJoke = createAsyncThunk("Joke", async function (category) {
  return axios(`https://api.chucknorris.io/jokes/random?category=${category}`)
    .then((d) => {
      return d.data.value;
    })
    .catch(() => {
      return `Error 404 : No jokes category \"${category}" found`;
    });
});

const initialState = {
  joke: "Enter the category for Random joke ...",
  loading: false,
};

const jokeSlice = createSlice({
  name: "Joke",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build
      .addCase(fetchJoke.pending, (state, action) => {
        state.loading = true;
        console.log("Loading...");
      })
      .addCase(fetchJoke.fulfilled, (state, action) => {
        state.loading = false;
        state.joke = action.payload;
      })
      .addCase(fetchJoke.rejected, (state, action) => {
        state.loading = false
        state.joke = action.payload;

      });
  },
});

const { changeName } = jokeSlice.actions;
export default jokeSlice;

export { fetchJoke, changeName };
