// Its a constructor for callback api

function init() {
    new google.maps.Map(document.getElementById('map'), {
      center: { lat: 59.325, lng: 18.069 },
      zoom: 15
    });
  }
new google.maps.Map(element, options);

// Instance of marker
function init() {
    const initialPosition = { lat: 59.325, lng: 18.069 };
    const customIcon={ iconUrl:"./car.png"}
    const map = new google.maps.Map(document.getElementById('map'), {
      center: initialPosition,
      zoom: 15,
      
    });
  
    const marker = new google.maps.Marker({ map, position: initialPosition });
    marker.setIcon(customIcon.iconUrl);
    // icon:"./car2.png"
  }
  new google.maps.Marker(options);

// Get User Position

  function init() {
  const initialPosition = { lat: 59.325, lng: 18.069 };

  const map = new google.maps.Map(document.getElementById('map'), {
    center: initialPosition,
    zoom: 15,
    icon:"./car2.png"
  });

  const marker = new google.maps.Marker({ map, position: initialPosition });

// Get user's location
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(
      position => console.log(`Lat: ${position.coords.latitude} Lng: ${position.coords.longitude}`),
      err => alert(`Error (${err.code}): ${err.message}`)
    );
  } else {
    alert('Geolocation is not supported by your browser.');
  }
}

const getPositionErrorMessage = code => {
  switch (code) {
    case 1:
      return 'Permission denied.';
    case 2:
      return 'Position unavailable.';
    case 3:
      return 'Timeout reached.';
  }
}

function init() {

  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(
      position => console.log(`Lat: ${position.coords.latitude} Lng: ${position.coords.longitude}`),
      err => alert(`Error (${err.code}): ${getPositionErrorMessage(err.code)}`)
    );
  } else {
    alert('Geolocation is not supported by your browser.');
  }
}

// New code
function init() {
  const initialPosition = { lat: 59.325, lng: 18.069 };

  const map = new google.maps.Map(document.getElementById('map'), {
    center: initialPosition,
    zoom: 15
  });

  const marker = new google.maps.Marker({ map, position: initialPosition });

 // Get user's location
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(
      position => {
        console.log(`Lat: ${position.coords.latitude} Lng: ${position.coords.longitude}`);

        // Set marker's position.
        marker.setPosition({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });

        // Center map to user's position.
        map.panTo({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
      },
      err => alert(`Error (${err.code}): ${getPositionErrorMessage(err.code)}`)
    );
  } else {
    alert('Geolocation is not supported by your browser.');
  }
}