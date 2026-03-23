import React from 'react';

import StaticContentScreen from '../components/StaticContentScreen';

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
