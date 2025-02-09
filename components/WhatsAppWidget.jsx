import React, { useState } from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
//+14322464294
const WhatsAppWidget = () => {
  const [open, setOpen] = useState(false);
  return (
    <FloatingWhatsApp
      accountName="Elizabeth Ross"
      avatar="/img/Elizabeth Jane Ross.jpg"
      buttonClassName="left-[2rem] "
      onClose={() => setOpen(false)}
      onClick={() => setOpen(true)}
      phoneNumber="14322464294"
      chatboxClassName={`left-[2rem]  ${
        open ? "animate-bounce-in" : " animate-bounce-out"
      }`}
    />
  );
};

export default WhatsAppWidget;
