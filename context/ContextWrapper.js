"use client";
import React, { useState } from "react";
import FileContext from "./Context";

const ContextWrapper = ({children}) => {
  const [file, setFile] = useState();
  return (
    <>
      <FileContext.Provider value={{ file, setFile }}>
        {children}
      </FileContext.Provider>
    </>
  );
};

export default ContextWrapper;
