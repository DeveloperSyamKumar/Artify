import React from 'react'

export default function ProductCard({item, onAdd}){
  return (
    <div className="bg-white rounded-xl shadow p-3 flex flex-col">
      <img src={import.meta.env.VITE_API_URL ? `${import.meta.env.VITE_API_URL.replace('/api','')}${item.imageUrl}` : `http://localhost:5000${item.imageUrl}`} alt={item.title} className="w-full h-48 object-cover rounded-lg"/>
      <div className="mt-3 flex-1">
        <h3 className="font-semibold">{item.title}</h3>
        <p className="text-sm text-gray-600">{item.category}</p>
      </div>
      <div className="mt-2 flex items-center justify-between">
        <span className="font-bold">₹{item.price}</span>
        <button onClick={()=>onAdd(item)} className="px-3 py-1 rounded bg-indigo-600 text-white">Add to Cart</button>
      </div>
    </div>
  )
}
