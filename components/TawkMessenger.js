import { useRef } from "react";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

export default function TawkMessenger() {
  const tawkMessengerRef = useRef();

  // const handleMinimize= () => {
  //     tawkMessengerRef.current.minimize();
  // };

  return (
    <TawkMessengerReact
      propertyId="64cf470a94cf5d49dc68b6ac"
      widgetId="1h74qr1aa"
      ref={tawkMessengerRef}
    />
  );
}
