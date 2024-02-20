import { createSlice } from "@reduxjs/toolkit";
import db, { Module } from "../../Database";

const initialState: { modules: Module[]; module: Module } = {
  modules: db.modules,
  module: {
    _id: "0",
    name: "New Module 123",
    description: "New Description",
    course: "",
    lessons: [],
  },
};

const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    addModule: (state, action) => {
      const newModule = {
        ...action.payload,
        _id: new Date().getTime().toString(),
      };
      console.log(newModule);
      state.modules = [
        { ...action.payload, _id: new Date().getTime().toString() },
        ...state.modules,
      ];
    },
    deleteModule: (state, action) => {
      state.modules = state.modules.filter(
        (module) => module._id !== action.payload
      );
    },
    updateModule: (state, action) => {
      state.modules = state.modules.map((module) => {
        if (module._id === action.payload._id) {
          return action.payload;
        } else {
          return module;
        }
      });
    },
    setModule: (state, action) => {
      state.module = action.payload;
    },
  },
});

export const { addModule, deleteModule, updateModule, setModule } =
  modulesSlice.actions;
export default modulesSlice.reducer;
