import { useRef } from "react";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

export default function TawkMessenger() {
  const tawkMessengerRef = useRef();

  // const handleMinimize= () => {
  //     tawkMessengerRef.current.minimize();
  // };

  return (
    <TawkMessengerReact
      propertyId="67a871d7825083258e12665e"
      widgetId="1ijkvpe7t"
      ref={tawkMessengerRef}
    />
  );
}
