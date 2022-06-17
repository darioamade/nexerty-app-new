export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiZGFyaW9hbWFkZSIsImEiOiJja25vZGtsM3MxZHRuMnFwbmx2MnQ0b2t6In0.1wSeWxxyZYKSsAg6wjeAKg';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/darioamade/cknoe6z6y38iy18nzobyqoayo',
    scrollZoom: false,
    //   style: 'mapbox://styles/darioamade/cknoe9yo454zk17mpnj1yegjp',
    //   center: [-0.0198942, 51.5034523],
    // zoom: 1,
    //   interactive: false,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    // Create Marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add Marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);
    // popup
    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>${loc.description}</p>`)
      .addTo(map);

    //Extends map bounds to include the current location
    bounds.extend(loc.coordinates);
  });
  map.fitBounds(bounds, {
    padding: {
      top: 200,
      left: 100,
      right: 100,
      bottom: 200,
    },
    zoom: 16,
  });
};
