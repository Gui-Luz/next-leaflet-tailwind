import React, { useEffect } from 'react';

function GetPos({changeUserPos}) {
  useEffect(() => {
    // Function to handle the success case
    const handleSuccess = (position) => {
      console.log('Coords:', position.coords);
      changeUserPos([position.coords.latitude, position.coords.longitude])
    };

    // Function to handle the error case
    const handleError = (error) => {
      console.error('Error getting position:', error.message);
    };

    // Get the user's current position
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);
};

export default GetPos;
