// import React from "react"

import React, { ComponentProps } from "react";

//Way 1
// type CopomentTypeProps = {
//     name : string
// }


// export const ComponentTyping : React.FC<CopomentTypeProps> = ({name}) => {
//   return (
//     <div>
//         ComponentTyping
//         <h3>This is an Hellow from {name}</h3>
//     </div>
//   )
// }


// export function ComponentTyping ( { firstName } : { firstName : string ;} ) {
//     return (
//         <div>
//             This is another Hellow from { firstName }
//         </div>
//     )
// }

type Colors =  "red" | "green" | "yellow" 

type ComponentTypingProps = {
    firstName : string;
    lastName? : string; //Making the props optional 
    color? :  "red" | "green" | "yellow" ;//Enums / Union Type
    backgroundColor? : Colors;
    padding? : number[] //It will be an array of numbers 
    names? : string[] //Array of strings 
    classAge? : [number , number , number , string] //Tupples 
    borderRadius? : Record<string , number> //Key type will be string and value will be an number 
    onClick? : (test : number ) => number;
    children? : React.ReactNode; 
    // children? : JSX.Element; 
}

//I can also pass Componet props 
export type ButtonProps = ComponentProps<"button">

//Extends using & 
export type ButtonPropsWithOtherOptions = ComponentProps<"button"> & {
    variant? : "primary" | "secondary";
}

export type SuperButtonProps = ButtonPropsWithOtherOptions & {
    test? : string;
}


export type User = {
    name : string ;
    sessionId : string;
}

export type Guest = Omit<User , 'name'>


export const ComponentTyping = ({ firstName , ...rest } : ComponentTypingProps) =>{
    console.log(rest)
    return(
        <div>
            This is another hello from {firstName} 
        </div>
    )
}