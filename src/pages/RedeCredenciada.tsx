import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin } from "lucide-react";
import { useEffect } from "react";

// Apple-like glow marker style
const markerStyle = {
  background: "linear-gradient(135deg, #00c6fb, #005bea)",
  width: "18px",
  height: "18px",
  borderRadius: "50%",
  boxShadow: "0 0 18px rgba(0, 140, 255, 0.9)",
  border: "3px solid white",
};

const units = [
  {
    name: "Unidade Osasco",
    address: "Rua João Crudo, 120 – Centro, Osasco",
    lat: -23.5315621,
    lng: -46.7919575,
  },
  {
    name: "Unidade Itapevi",
    address: "Rua Leopoldina de Camargo, 190 – Centro, Itapevi",
    lat: -23.551527,
    lng: -46.934444,
  },
  {
    name: "Unidade Cajamar",
    address: "Rua Silvério Augusto Tavares, 5 – Polvilho, Cajamar",
    lat: -23.353736,
    lng: -46.806626,
  },
];

const RedeCredenciada = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=marker`;
    script.async = true;
    script.onload = initMap;
    document.body.appendChild(script);
  }, []);

  function initMap() {
    const map = new window.google.maps.Map(document.getElementById("appleMap"), {
      center: { lat: -23.50, lng: -46.85 },
      zoom: 11,
      disableDefaultUI: true,
      styles: [
        {
          featureType: "all",
          elementType: "geometry.fill",
          stylers: [{ weight: "2.00" }],
        },
        {
          featureType: "all",
          elementType: "labels.text.fill",
          stylers: [{ color: "#727272" }],
        },
        {
          featureType: "landscape",
          elementType: "all",
          stylers: [{ color: "#f5f5f5" }],
        },
        {
          featureType: "road",
          elementType: "all",
          stylers: [{ saturation: -100 }, { lightness: 45 }],
        },
        {
          featureType: "water",
          elementType: "geometry.fill",
          stylers: [{ color: "#d6eaff" }],
        },
      ],
    });

    units.forEach((unit) => {
      const markerDiv = document.createElement("div");
      Object.assign(markerDiv.style, markerStyle);

      const marker = new window.google.maps.marker.AdvancedMarkerElement({
        map,
        position: { lat: unit.lat, lng: unit.lng },
        content: markerDiv,
      });

      const infowindow = new window.google.maps.InfoWindow({
        content: `
          <div style="padding: 8px 12px; border-radius: 12px; backdrop-filter: blur(10px); background: rgba(255,255,255,0.7);">
            <h3 style="font-size: 16px; font-weight: bold; margin: 0;">${unit.name}</h3>
            <p style="margin: 0; font-size: 13px; color: #444;">${unit.address}</p>
          </div>
        `,
      });

      marker.addListener("click", () => {
        infowindow.open({ anchor: marker, map });
      });
    });
  }

  return (
    <div className="min-h-screen">
      <Header />

      <section className="py-20 gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white">Rede Credenciada</h1>
          <p className="text-xl text-white/90 mt-4">Veja nossas unidades no mapa interativo</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="card-elevated rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold text-primary-dark">Mapa Interativo</h2>
            </div>

            <div
              id="appleMap"
              className="w-full h-[600px] rounded-2xl shadow-xl"
              style={{ overflow: "hidden" }}
            ></div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RedeCredenciada;
