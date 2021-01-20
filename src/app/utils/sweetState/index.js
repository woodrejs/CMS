import { createStore, createHook } from "react-sweet-state";

const Store = createStore({
  // value of the store on initialisation
  initialState: {
    deletePopupIsOpen: false,
    addPopupIsOpen: false,
  },
  // actions that trigger store mutation
  actions: {
    toogleDeletePopupIsOpen: () => ({ setState, getState }) => {
      setState({
        deletePopupIsOpen: !getState().deletePopupIsOpen,
      });
    },
    toogleAddPopupIsOpen: () => ({ setState, getState }) => {
      setState({
        addPopupIsOpen: !getState().addPopupIsOpen,
      });
    },
  },
  name: "counter",
});

export const useCounter = createHook(Store);
