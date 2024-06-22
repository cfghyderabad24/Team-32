import React from 'react';
import './Notifications.css'
const NotificationsPage = () => {
  // Example array of notification objects
  const notifications = [
    {
      headline: 'New crop pricing updates',
      paragraph: 'Check out the latest prices for various crops in your region.',
    },
    {
      headline: 'Weather alert',
      paragraph: 'Heavy rainfall expected next week. Prepare accordingly and protect your crops.',
    },
    {
      headline: 'Reminder: Farmer\'s market',
      paragraph: 'Don\'t forget to visit the Farmer\'s market this weekend. Fresh produce awaits!',
    }
    // Add more notifications as needed
  ];

  return (
    <div className="notifications-container">
      {notifications.map((notification, index) => (
        <div key={index} className="notification-item">
          <h2>{notification.headline}</h2>
      
          <p>{notification.paragraph}</p>
          <hr /> {/* Optional: Adds a horizontal line between notifications */}
        </div>
      ))}
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <NotificationsPage />
    </div>
  );
};

export default App;