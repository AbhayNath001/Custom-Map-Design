let map;

async function initMap() {
  // Wait for the google object to be available
  await new Promise(resolve => {
    const intervalId = setInterval(() => {
      if (typeof google !== 'undefined') {
        clearInterval(intervalId);
        resolve();
      }
    }, 100);
  });

  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 22.579053145666176, lng: 88.4734160209576 },
    zoom: 16,
    mapId: '34102d9aa568715a',
  });

  new google.maps.Marker({
    position: { lat: 22.57865688599386, lng: 88.47184961098893 },
    map,
    title: "Abhay Nath",
    icon: {
        url: "home.png",
        scaledSize: new google.maps.Size(68, 72)
    }
  });
}

initMap();
