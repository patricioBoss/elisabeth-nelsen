import React, { useState } from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
//+14242793916
const WhatsAppWidget = () => {
  const [open, setOpen] = useState(false);
  return (
    <FloatingWhatsApp
      accountName="Elizabeth Nelsen"
      avatar="/img/Elizabeth Regina Nelsen.jpg"
      buttonClassName="left-[2rem] "
      onClose={() => setOpen(false)}
      onClick={() => setOpen(true)}
      phoneNumber="14242793916"
      chatboxClassName={`left-[2rem]  ${
        open ? "animate-bounce-in" : " animate-bounce-out"
      }`}
    />
  );
};

export default WhatsAppWidget;
