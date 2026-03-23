import React from 'react';
import StaticContentScreen from '../components/StaticContentScreen';

// This screen uses the StaticContentScreen component to display information about the app.
function AboutAppScreen() {
  return (
    <StaticContentScreen
      title="About App"
      description="This is winter jackets app"
      highlights={[
        'Browse our Jackets in a clean mobile app from Peter, Harlie and Bowale.',
      ]}
    />
  );
}

export default AboutAppScreen;
