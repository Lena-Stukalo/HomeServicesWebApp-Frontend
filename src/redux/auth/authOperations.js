import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Notify } from "notiflix/build/notiflix-notify-aio";

axios.defaults.baseURL = "https://diploma-ipy5.onrender.com/api";
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = createAsyncThunk("auth/register", async (credentials) => {
  try {
    const { data } = await axios.post("/auth/register", credentials);
    return data;
  } catch (error) {
    const { response } = error;

    Notify.failure(
      `${response.status}: ${response.data.errors.password.message}`
    );
    throw error;
  }
});
const login = createAsyncThunk("auth/login", async (credentials) => {
  try {
    const { data } = await axios.post("/auth/login", credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    const { response } = error;
    console.log(response);
    Notify.failure(`${response.status}: ${response.statusText}`);
    throw error;
  }
});
const logout = createAsyncThunk("auth/logout", async () => {
  try {
    const { data } = await axios.get("/auth/logout");
    token.unset();
    return data;
  } catch (error) {
    const { response } = error;

    Notify.failure(`${response.status}: ${response.statusText}`);
    throw error;
  }
});
const currentUser = createAsyncThunk("auth/current", async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;
  if (persistedToken === null) {
    return thunkAPI.rejectWithValue();
  }
  token.set(persistedToken);
  try {
    const { data } = await axios.get("/auth/current");
    return data;
  } catch (error) {
    const { response } = error;

    Notify.failure(`${response.status}: ${response.statusText}`);
    throw error;
  }
});
const resetPass = createAsyncThunk(
  "/auth/resetpassword",
  async (credentials) => {
    try {
      await axios.patch("/auth/resetpassword", credentials);
      return { message: "Sucsess" };
    } catch (error) {
      const { response } = error;

      Notify.failure(`${response.status}: ${response.statusText}`);
      throw error;
    }
  }
);
const changePass = createAsyncThunk(
  "/auth/changepassword",
  async (credentials) => {
    try {
      const { data } = await axios.patch("/auth/changepassword", credentials);
      return data;
    } catch (error) {
      const { response } = error;

      Notify.failure(`${response.status}: ${response.statusText}`);
      throw error;
    }
  }
);

const operations = {
  register,
  login,
  logout,
  currentUser,
  changePass,
  resetPass,
};
export default operations;
