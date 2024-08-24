// Initialize and add the map
let map;

async function initMap() {
  // The location of Weissenkirchen
  const position = { lat: 48.400889, lng: 15.463743 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Weissenkirchen
  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Weissenkirchen
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Weissenkirchen",
  });
}

initMap();