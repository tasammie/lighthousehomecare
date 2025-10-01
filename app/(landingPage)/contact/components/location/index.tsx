/* eslint-disable @typescript-eslint/no-explicit-any */
// const Location = () => {
//   return (
//     <iframe
//       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2701.6909418106347!2d-0.32863438755483676!3d51.749176171752005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48763ede997bf98d%3A0x26884568a7c52d6b!2sRegus%20-%20St.%20Albans%20Victoria%20Square!5e1!3m2!1sen!2sng!4v1753371155992!5m2!1sen!2sng"
//       width="100%"
//       height="678"
//       allowFullScreen
//       loading="lazy"
//       referrerPolicy="no-referrer-when-downgrade"
//     ></iframe>
//   );
// };

// export default Location;

"use client";
import { useEffect, useState } from "react";
import Script from "next/script";

const Location = () => {
  const [error, setError] = useState<string | null>(null);

  const initMap = () => {
    try {
      if (!window.google) {
        setError("Google Maps failed to load");
        return;
      }

      const map = new window.google.maps.Map(
        document.getElementById("map") as HTMLElement,
        {
          zoom: 6,
          center: { lat: 53.5, lng: -1.5 }, // center between both locations
        }
      );

      const locations = [
        {
          name: "Regus - St. Albans Victoria Square",
          lat: 51.749179,
          lng: -0.328634,
          address:
            "Fountain Court, 2 Victoria Square, Victoria St, St Albans AL1 3TF, UK",
          phone: "007397 029 192",
        },
        {
          name: "Yorkshire Bank Chambers",
          lat: 53.797453,
          lng: -1.551639,
          address: "2 Infirmary St, Leeds LS1 2JP, UK",
          phone: "0113 547 0544",
        },
      ];

      const bounds = new window.google.maps.LatLngBounds();

      locations.forEach((loc) => {
        const marker = new window.google.maps.Marker({
          position: { lat: loc.lat, lng: loc.lng },
          map,
          title: loc.name,
        });

        const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
          loc.address
        )}`;

        const info = new window.google.maps.InfoWindow({
          content: `
            <div style="font-size:14px; line-height:1.5; max-width:250px">
              <strong>${loc.name}</strong><br/>
              📍 ${loc.address}<br/>
              📞 ${
                loc.phone !== "N/A"
                  ? `<a href="tel:${loc.phone}" style="color:#1a73e8">${loc.phone}</a>`
                  : "No phone listed"
              }<br/><br/>
              <a href="${googleMapsUrl}" target="_blank" rel="noopener noreferrer" 
                 style="display:inline-block; background:#00279b; color:white; padding:8px 16px; 
                        text-decoration:none; border-radius:4px; font-size:13px; font-weight:500;">
                📍 View on Google Maps
              </a>
            </div>
          `,
        });

        marker.addListener("click", () => info.open(map, marker));
        bounds.extend(marker.getPosition() as any);
      });

      map.fitBounds(bounds); // auto-zoom to fit all markers
    } catch (err) {
      console.error("Error initializing map:", err);
      setError("Failed to initialize map");
    }
  };

  useEffect(() => {
    // Assign to window for callback
    (window as typeof window & { initMap?: () => void }).initMap = initMap;
  }, []);

  return (
    <>
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}&callback=initMap`}
        strategy="afterInteractive"
        onError={() => setError("Failed to load Google Maps script")}
      />
      {error && (
        <div className="w-full h-[600px] flex items-center justify-center bg-gray-100 text-red-600">
          <div className="text-center">
            <p className="text-xl font-semibold mb-2">Map Error</p>
            <p>{error}</p>
            <p className="text-sm mt-2">
              Please check your API key configuration
            </p>
          </div>
        </div>
      )}
      {!error && <div id="map" style={{ width: "100%", height: "600px" }} />}
    </>
  );
};

export default Location;
