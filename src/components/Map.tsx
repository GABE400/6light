import type React from "react";
import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface Shop {
  id: string;
  name: string;
  coordinates: [number, number];
}

interface MapProps {
  shops: Shop[];
  selectedShop: Shop | null;
}

const Map: React.FC<MapProps> = ({ shops, selectedShop }) => {
  const mapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<{ [key: string]: L.Marker }>({});

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = L.map("map").setView([-15.3875, 28.3228], 12);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapRef.current);
    }

    shops.forEach((shop) => {
      if (!markersRef.current[shop.id]) {
        const marker = L.marker(shop.coordinates)
          .addTo(mapRef.current!)
          .bindPopup(shop.name);
        markersRef.current[shop.id] = marker;
      }
    });

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [shops]);

  useEffect(() => {
    if (selectedShop && mapRef.current) {
      mapRef.current.setView(selectedShop.coordinates, 15);
      markersRef.current[selectedShop.id].openPopup();
    }
  }, [selectedShop]);

  return <div id="map" style={{ height: "100%", width: "100%" }} />;
};

export default Map;
