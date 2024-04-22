import { useRef, useEffect } from 'react';
import { Icon, Marker, layerGroup } from 'leaflet';
import { City } from '../../types/city';
import { Offer } from '../../types/offer';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../constants/constants';

import useMap from '../../hooks/use-map';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: City;
  points: Offer[];
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function getIconByIndex(index: number): Icon {
  return index === 0 ? currentCustomIcon : defaultCustomIcon;
}

function Map(props: MapProps): JSX.Element {
  const {city, points} = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      points.forEach((point, index) => {
        const icon = getIconByIndex(index);
        const marker = new Marker({
          lat: point.city.location.latitude,
          lng: point.city.location.longitude
        });

        marker
          .setIcon(icon)
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points]);

  return <div style={{height: '100%'}} ref={mapRef}></div>;
}

export default Map;
