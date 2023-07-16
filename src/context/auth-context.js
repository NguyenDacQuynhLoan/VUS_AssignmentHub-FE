import { createContext } from "react";

const initialState = {
  isAuthenticated: false,
  isLoading: true,
  user: null,
};

const ACTION = {
  INITIALIZE: "INITIALIZE",
  SIGN_IN: "SIGN_IN",
  SIGN_OUT: "SIGN_OUT",
};

const actionHandlers = {
  [ACTION.INITIALIZE]: (state, action) => {
    const actionInfo = action.payload;
    const user = actionInfo
      ? {
          isAuthenticated: false,
          isLoading: true,
          user: actionInfo,
        }
      : {
          isLoading: false,
        };

    return { ...state, ...user };
  },

  [ACTION.SIGN_IN]: (state, action) => {
    const actionInfo = action.payload;
    const user = {
        isAuthenticated:true,
        isLoading: true,
        user: actionInfo,
    }
    return {...state,...user};
  },
  [ACTION.SIGN_OUT]: (state, action) => {
    const actionInfo = action.payload;
    const user = {
        isAuthenticated:false,
        isLoading: false,
        user: null,
    }
    return {...state,...user};
  },
};

const reducer = (state,action) =>{
   return actionHandlers[action.type] ? actionHandlers[action.type](state,action) : state;
}

export const AuthContext = createContext({undefined});

export const AuthProvider = (props) => {
  var {children} = props;
  return (
    <>
      <AuthContext.Provider>
        <div className="contextRoot">
          
        </div>
      </AuthContext.Provider>
    </>
  );
};
