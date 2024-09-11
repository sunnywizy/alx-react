// src/Notifications.js
import React from 'react';
import './Notifications.css'; // Import the CSS file for basic styling
import closeIcon from './close-icon.png'; // Import the close icon
import { getLatestNotification } from './utils'; // Import the utility function

function Notifications() {
  // Handle the close button click
  const handleCloseClick = () => {
    console.log("Close button has been clicked");
  };

  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>

      {/* Close Button with inline styling */}
      <button
        style={{
          position: 'absolute',
          top: 10,
          right: 10,
          border: 'none',
          background: 'transparent',
          cursor: 'pointer'
        }}
        aria-label="Close"
        onClick={handleCloseClick} // Log to the console when clicked
      >
        {/* Image for the button */}
        <img src={closeIcon} alt="Close" style={{ width: '10px', height: '10px' }} />
      </button>

      {/* Unordered list of notifications */}
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li
          data-priority="urgent"
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        />
      </ul>
    </div>
  );
}

export default Notifications;
