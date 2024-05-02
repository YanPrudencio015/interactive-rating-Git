

import React, { createContext, useState } from "react";


export  const switchCardContext = createContext()




 export function SwitchCardprovider(props){

    const [turnBack, setturnback] = useState(false)
    const[feedBackValue,setFeedBackValue] = useState(0)


    return(

        <switchCardContext.Provider value={[turnBack,setturnback,feedBackValue,setFeedBackValue]} >
            {props.children}
        </switchCardContext.Provider>

    )

 }








