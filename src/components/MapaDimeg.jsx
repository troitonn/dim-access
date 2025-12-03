import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Correção dos ícones no Vite
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: new URL("leaflet/dist/images/marker-icon-2x.png", import.meta.url).href,
  iconUrl: new URL("leaflet/dist/images/marker-icon.png", import.meta.url).href,
  shadowUrl: new URL("leaflet/dist/images/marker-shadow.png", import.meta.url).href,
});

const MapaDimeg = () => {
  useEffect(() => {
    const map = L.map("mapa-dimeg").setView([-23.5329, -46.7911], 11);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
    }).addTo(map);

    const unidades = [
      {
        nome: "Unidade Osasco",
        endereco: "Rua João Crudo, 120 – Centro, Osasco",
        coord: [-23.5329, -46.7911],
      },
      {
        nome: "Unidade Itapevi",
        endereco: "Rua Leopoldina de Camargo, 190 – Centro, Itapevi",
        coord: [-23.5487, -46.9349],
      },
      {
        nome: "Unidade Cajamar",
        endereco: "Rua Silvério Augusto Tavares, 5 – Polvilho, Cajamar",
        coord: [-23.3607, -46.8767],
      },
    ];

    unidades.forEach((u) => {
      L.marker(u.coord)
        .addTo(map)
        .bindPopup(`<b>${u.nome}</b><br>${u.endereco}`);
    });
  }, []);

  return (
    <div
      id="mapa-dimeg"
      style={{ width: "100%", height: "500px", borderRadius: "20px" }}
    ></div>
  );
};

export default MapaDimeg;
