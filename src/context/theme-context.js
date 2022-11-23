import React from 'react';

export const themes = {
  light: {
    backgroundColor: "AntiqueWhite",
    textColor: "DarkSlateGrey",
    buttonBackground: "Lavender", 
    inputBackground: "Gainsboro"
  },
  dark: {
    backgroundColor: "DarkSlateGrey",
    textColor: "AntiqueWhite",
    buttonBackground: "#232b3c",
    inputBackground: "#45516d"
  }
};

export const ThemeContext = React.createContext();//create a new context with React's creatContext() method:
//Provider components provide data to a section of the (or entire) component tree
//Consumer components enable individual components to use the data that the provider component exposes.np
//these two components are generated from the createContext() method, and they are the mechanism by which context works: