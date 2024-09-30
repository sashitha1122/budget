import { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return{
                ...state,
                expenses: [...state.expenses, action.payload],
            };
        case 'DELETE_EXPENSE':
            return{
                ...state,
                expenses: state.expenses.filter(
                    (expense) => expense.id !== action.payload
                ), 
            };
        default:
            return state;
    }
};

const initialState = {
    budget: 12000,
    expenses: [
        { id:12, name: 'Shopping', cost: 500 },
        { id:13, name: 'Holiday', cost: 400 },
        { id:14, name: 'Breakfast', cost: 150 },
        { id:15, name: 'Lunch', cost: 200 },
    ],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return(<AppContext.Provider value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
    }}

    >
        {props.children}
       </AppContext.Provider>
    );
};