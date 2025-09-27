import React, { useState } from 'react'

export default function WhatsAppPopup(){
  const [open, setOpen] = useState(false);
  const phone='918367078159'
  const message = encodeURIComponent('Hi! I would like to know more about your art 😊');
  return (
    <>
      <button onClick={()=>setOpen(true)} className="fixed bottom-5 right-5 rounded-full shadow px-4 py-3 bg-green-500 text-white">
        Chat on WhatsApp
      </button>
      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-sm">
            <h3 className="text-lg font-semibold mb-2">Connect on WhatsApp</h3>
            <p className="text-sm text-gray-600 mb-4">Click below to start a chat with us on WhatsApp.</p>
            <a href={`https://wa.me/${phone}?text=${message}`} target="_blank" className="block w-full text-center bg-green-500 text-white py-2 rounded-lg">Open WhatsApp</a>
            <button onClick={()=>setOpen(false)} className="mt-3 w-full border rounded-lg py-2">Close</button>
          </div>
        </div>
      )}
    </>
  )
}


