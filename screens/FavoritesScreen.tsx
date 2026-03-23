import React from 'react';

import StaticContentScreen from '../components/StaticContentScreen';

function FavoritesScreen() {
  // Zustand here.
  return (
    <StaticContentScreen
      title="Favorites"
      description="This tab is a placeholder"
      highlights={[
        'Placeholder tab only for navigation layout',
        
      ]}
    />
  );
}

export default FavoritesScreen;
