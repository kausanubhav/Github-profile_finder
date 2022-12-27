import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

//we will pass an initial state and the action performed to the reducer
//a reducer fn and an initial state is passed
//final state and a dispatch(to dispatch user actions to the reducer) is returned

//dispatch function

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    repos: [],
    user: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  return (
    <GithubContext.Provider
      value={{
        // instead of sending each states like state.users,state.repos.. we can use spread operator
        ...state,
        //instead of passing the functions, we can pass the dispatch
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
