import React, { ReactNode } from 'react'
type Type = {
    pass: string;
    children?: ReactNode; // Add children prop
  }
export default function FunctionOne({pass,children}:Type) {
  return (
    <>
    
    
    <div>{pass}</div>
    <div>{children}</div>
    </>
   
    

  )
}
