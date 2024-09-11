// src/utils.js

export function getFullYear() {
    return new Date().getFullYear();
  }
  
  export function getFooterCopy(isIndex) {
    return isIndex ? "Holberton School" : "Holberton School main dashboard";
  }
  
  // New function to return the latest notification message
  export function getLatestNotification() {
    return "<strong>Urgent requirement</strong> - complete by EOD";
  }
  