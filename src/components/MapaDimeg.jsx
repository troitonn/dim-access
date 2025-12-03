import React from "react";

const MapaDimeg = () => {
  return (
    <div className="w-full rounded-2xl overflow-hidden shadow-xl border border-white/10 backdrop-blur-md bg-white/5">
      <iframe
        title="Mapa Dimeg"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-[450px] md:h-[550px]"
        style={{ border: 0 }}
        src={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.9966135319433!2d-46.79092752563374!3d-23.53293906043086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ceffef9b4adbbb%3A0xefdfbcde519e5105!2sOsasco%20-%20Centro!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
        }
      ></iframe>
    </div>
  );
};

export default MapaDimeg;
