import { createContext, useContext, useState } from "react";

const DefaultLayoutContext = createContext({})
export const sideBarWidth = 240;

export function DefaultLayoutProvider({...props}) {
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
        value={
            {
                openSidebar,
                onToggleSidebar,
                router,
                onChangeRouter,
                sideBarWidth
            }
        }>
      {props.children}
    </DefaultLayoutContext.Provider>
  );
}

export const useDefaultLayoutContext = () => useContext(DefaultLayoutContext);