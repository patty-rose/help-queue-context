import React, { useState } from "react";
import Header from "./Header";
import TicketControl from "./TicketControl";
import ToggleTheme from "./ToggleTheme";
import { ThemeContext, themes } from "../context/theme-context";


function App(){
  const [theme, setTheme] = useState(themes.light);

  document.body.style.backgroundColor = theme.backgroundColor;//The document object represents the Document Object Model (DOM) for our Help Queue app. The DOM is a Web API.//document.body property represents the <body> tags in the DOM.//document.body.style property represents the <body> tags' style attribute, which sets inline HTML styles.
  document.body.style.color = theme.textColor;

  function toggleTheme() {
    setTheme(theme => theme.textColor === "AntiqueWhite" ? themes.light : themes.dark
    );
  }

  return (
    <ThemeContext.Provider value={theme}>
      <Header />
      <ThemeContext.Consumer>
        {contextTheme => <ToggleTheme theme={contextTheme} toggleTheme={toggleTheme}/>}
      </ThemeContext.Consumer>
      <TicketControl />
    </ThemeContext.Provider>
  );
}
//The contextTheme parameter represents the data that the provider component transmits via its value prop, which is the CSS object for either the light or dark theme. We then use the contextTheme parameter as the value of a prop we call theme, which we'll use to create styles for our button. We also pass in our toggleTheme prop, the same as before.

// Notice that we've added a prop called value to our <ThemeContext.Provider> component. This is how we designate a value for our context provider. The prop must always be called value.

export default App;