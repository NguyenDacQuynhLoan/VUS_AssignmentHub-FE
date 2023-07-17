import { createContext, useContext, useState } from "react";

const DefaultLayoutContext = createContext({})

export const SIDEBAR_WIDTH = 220;

export function LayoutProvider({...props}) {
    const [openSidebar, setOpenSidebar] = useState(true);
    const [router, setRouter] = useState();

    const onToggleSidebar = () =>{
      setOpenSidebar(!openSidebar);        
    }
    const onChangeRouter = (url) =>{
      setRouter(url ?? "/");
    }
  return (
    <DefaultLayoutContext.Provider 
      value={{
        router, onChangeRouter,
        openSidebar, onToggleSidebar,
        SIDEBAR_WIDTH
      }}>
      {props.children}
    </DefaultLayoutContext.Provider>
  );
}

export const useDefaultLayoutContext = () => useContext(DefaultLayoutContext);