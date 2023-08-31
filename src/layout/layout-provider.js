import { createContext, useContext, useState } from "react";

const DefaultLayoutContext = createContext({})

export const SIDEBAR_WIDTH = 220;
export function LayoutProvider({...props}) {
    const [openSidebar, setOpenSidebar] = useState(true);
    const [router, setRouter] = useState();
    const [currentUserCode, setCurrentUserCode] = useState("value");

    const onToggleSidebar = () =>{
      setOpenSidebar(!openSidebar);        
    }

    const onChangeRouter = (url) =>{
      setRouter(url ?? "/");
    }

    const OnUpdateCurrentUserCode = (code) =>{
      setCurrentUserCode(code);
    }

  return (
    <DefaultLayoutContext.Provider 
      value={{
        router, onChangeRouter,
        openSidebar, onToggleSidebar,
        currentUserCode, OnUpdateCurrentUserCode
      }}>
      {props.children}
    </DefaultLayoutContext.Provider>
  );
}

export const useDefaultLayoutContext = () => useContext(DefaultLayoutContext);