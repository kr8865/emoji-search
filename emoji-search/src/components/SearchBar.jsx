import React from "react";

export default function SearchBar({ query, setQuery }) {
  return (
    <div className="flex justify-center">
      <div className="flex items-center w-full max-w-3xl bg-white p-3 rounded-2xl shadow">
        <input
          type="text"
          placeholder="Search memes..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 outline-none text-lg"
        />
        <span className="text-xl">🔍</span>
      </div>
    </div>
  );
}
