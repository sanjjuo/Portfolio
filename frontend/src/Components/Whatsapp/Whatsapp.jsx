import React from 'react'
import { FloatingWhatsApp } from "react-floating-whatsapp"

const MyWhatsapp = () => {
  return (
    <>
    <FloatingWhatsApp
      phoneNumber='7902501645'
      accountName='Sanjeed'
      notification="true"
      avatar='me.png'
      notificationSound='true'
      chatMessage='Hello there! 🤝 How can I help?'
      statusMessage='Typically replies within minutes'
      allowEsc='true'
    />
    </>
  )
}

export default MyWhatsapp
