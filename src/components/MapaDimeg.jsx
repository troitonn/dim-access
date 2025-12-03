import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const MapaDimeg = () => {
  useEffect(() => {
    // Corrige problema do ícone padrão do Leaflet
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
      shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    });

    // Coordenadas das unidades
    const locais = [
      {
        nome: "Unidade Osasco",
        endereco: "Rua João Crudo, 120 – Centro, Osasco",
        coords: [-23.532236, -46.791156],
      },
      {
        nome: "Unidade Itapevi",
        endereco: "Rua Leopoldina de Camargo, 190 – Centro, Itapevi",
        coords: [-23.548712, -46.933642],
      },
      {
        nome: "Unidade Cajamar",
        endereco: "Rua Silvério Augusto Tavares, 5 – Polvilho, Cajamar",
        coords: [-23.363857, -46.758502],
      },
    ];

    // Inicializa mapa
    const map = L.map("mapa-dimeg", {
      zoomControl: false,
      scrollWheelZoom: true,
    }).setView([-23.47, -46.85], 11);

    // Mapa visual bonito (Carto)
    L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
      maxZoom: 19,
    }).addTo(map);

    L.control.zoom({ position: "bottomright" }).addTo(map);

    // Adiciona marcadores
    locais.forEach((loc) => {
      const marker = L.marker(loc.coords).addTo(map);

      marker.bindPopup(`
        <div style="font-size: 16px; font-weight: bold; color: #003087;">
          ${loc.nome}
        </div>
        <div style="margin-top: 4px; font-size: 14px; color: #333;">
          ${loc.endereco}
        </div>
        <a 
          href="https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
            loc.endereco
          )}" 
          target="_blank"
          style="
            display: inline-block;
            margin-top: 10px;
            background: #003087;
            color: white;
            padding: 6px 12px;
            border-radius: 6px;
            text-decoration: none;
            font-size: 14px;
          "
        >
          Traçar rota
        </a>
      `);
    });

    return () => map.remove();
  }, []);

  return (
    <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-lg border border-primary/20" id="mapa-dimeg"></div>
  );
};

export default MapaDimeg;
