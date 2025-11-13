import React from "react";
import EmojiCard from "./EmojiCard";

export default function EmojiGrid({ memes }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-8 px-4">
      {memes.map((meme) => (
        <EmojiCard key={meme.id} meme={meme} />
      ))}
    </div>
  );
}
