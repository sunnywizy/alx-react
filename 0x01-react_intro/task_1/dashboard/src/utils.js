// src/utils.js

// Returns the current year
export function getFullYear() {
    return new Date().getFullYear();
}
  
// Returns a footer string based on the boolean argument isIndex
export function getFooterCopy(isIndex) {
    if (isIndex) {
      return "Holberton School";
    } else {
      return "Holberton School main dashboard";
    }
}
  