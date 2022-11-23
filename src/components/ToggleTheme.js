import React from "react";
import PropTypes from "prop-types";

function ToggleTheme(props) {
  const { theme, toggleTheme } = props;

  if (!theme) {
    throw new Error("ThemeContext must be used within a ThemeContext.Provider!");
  }
  
  const styles = { //create a new CSS object based on the styles that are relevant to the button. apply to button attributes.
    backgroundColor: theme.buttonBackground, 
    color: theme.textColor 
  }

  return (
    <React.Fragment>
      <button style={styles} onClick={toggleTheme}>
      {theme.textColor === "AntiqueWhite" ? "toggle light theme" : "toggle dark theme"}
      </button>
      <hr/>
    </React.Fragment>
  );
}

ToggleTheme.propTypes = {
  toggleTheme: PropTypes.func,
  theme: PropTypes.object
}

export default ToggleTheme;