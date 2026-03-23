import React from 'react';

import StaticContentScreen from '../components/StaticContentScreen';

function ContactUsScreen() {
  return (
    <StaticContentScreen
      title="Contact Us"
      description="We would love to hear from you."
      highlights={[
        'Email: support@jacketgallery.ca',
        'Phone: +1 (444) 555-0000',
    
      ]}
    />
  );
}

export default ContactUsScreen;
