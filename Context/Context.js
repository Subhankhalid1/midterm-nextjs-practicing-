import React, { createContext, useEffect, useState } from "react";
import Data from "./Data.json"
export const GlobalContext = createContext();
const MainContext = ({ children }) => {
   
    const [postDetail, setPostDetail] = useState({});
const [posts, setPosts] = useState();
      useEffect(() => {
        if (typeof window !== "undefined") {
          const store = window?.localStorage.getItem("data");
            var data = JSON.parse(store);
            setPosts(data)
          // const [state, setState] = React.useState({
          //     left: false,
          // })
        }
        //  let storage = [];
        //  storage.push(data);
      }, []);
       
      
        return (
          <GlobalContext.Provider
            value={{
              setPostDetail, postDetail,posts,setPosts
            }}
          >
            {children}
          </GlobalContext.Provider>
        );
}

export default MainContext;