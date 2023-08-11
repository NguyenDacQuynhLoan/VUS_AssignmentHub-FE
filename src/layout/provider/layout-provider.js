import { createContext, useContext, useState } from "react";

const DefaultLayoutContext = createContext({})

export const SIDEBAR_WIDTH = 220;

export function LayoutProvider({...props}) {
    const [openSidebar, setOpenSidebar] = useState(true);
    const [router, setRouter] = useState();
    const [CurrentEmail, setCurrentEmail] = useState("ad");

    const onToggleSidebar = () =>{
      setOpenSidebar(!openSidebar);        
    }

    const onChangeRouter = (url) =>{
      setRouter(url ?? "/");
    }

    const onStoreCurrentEmail = (email) =>{
      console.log("provider email " + email);
      setCurrentEmail(email);
    }

  return (
    <DefaultLayoutContext.Provider 
      value={{
        router, onChangeRouter,
        openSidebar, onToggleSidebar,
        CurrentEmail,onStoreCurrentEmail,
        SIDEBAR_WIDTH
      }}>
      {props.children}
    </DefaultLayoutContext.Provider>
  );
}

export const useDefaultLayoutContext = () => useContext(DefaultLayoutContext);