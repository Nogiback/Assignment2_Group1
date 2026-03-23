import React from 'react';

import StaticContentScreen from '../components/StaticContentScreen';

function ProfileScreen() {
  // Connect Zustand store here
  // should be reused across tabs or drawer screens.
  return (
    <StaticContentScreen
      title="Profile"
      description="This is a placeholder tab."
      highlights={[
        'This is a placeholder',
       
      ]}
    />
  );
}

export default ProfileScreen;
