// setup data layer
// Need to track the basket
// Creates like a gobal variable to pass to around app instead of passing from grandparants to parent to child to etc

import React, { createContext, useContext, useReducer } from "react";

//Data Layer
export const StateContext = createContext();

//Build a Provider
export const StateProvider = ({ reducer, initialState, childern }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {childern}
    </StateContext.Provider>
);

//How we use it inside of a component
export const useStateValue = () => useContext(StateContext);