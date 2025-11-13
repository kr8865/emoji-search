import React from "react";

export default function EmojiCard({ meme }) {
  if (!meme?.url) return null;

  // generate tags from name
  const tags = meme.name
    .split(" ")
    .slice(0, 3)
    .join(", ")
    .toLowerCase();

  return (
    <div className="bg-white p-4 rounded-2xl shadow hover:shadow-xl transition cursor-pointer flex flex-col items-center">
    
      <div className="w-20 h-20 flex items-center justify-center overflow-hidden rounded-xl">
        <img
          src={meme.url}
          alt={meme.name}
          className="w-full h-full object-cover"
        />
      </div>

     
      <p className="mt-3 font-semibold text-gray-800 text-center">
        {meme.name.length > 20 ? meme.name.slice(0, 18) + "..." : meme.name}
      </p>

 
      <p className="text-xs text-gray-500 text-center">{tags}</p>
    </div>
  );
}
