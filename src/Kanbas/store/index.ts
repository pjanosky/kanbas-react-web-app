import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/modulesReducer";
import navigationReducer from "../Navigation/navigationReducer";
export interface KanbasState {
  modulesReducer: {
    modules: any[];
    module: any;
  };
  navigationReducer: {
    showSmallNav: boolean;
    showSmallNavButton: boolean;
    title: string;
    subtitle: string;
  };
}
const store = configureStore({
  reducer: {
    modulesReducer,
    navigationReducer,
  },
});

export default store;
