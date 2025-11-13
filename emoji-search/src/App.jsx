import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import EmojiGrid from "./components/EmojiGrid";

export default function App() {
  const [memes, setMemes] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMemes = async () => {
      try {
        const res = await fetch("https://api.imgflip.com/get_memes");
        const data = await res.json();
        setMemes(data.data.memes || []);
      } catch (err) {
        console.error("Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMemes();
  }, []);

  const filtered = memes.filter((meme) =>
    meme.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 p-6">
      <h1 className="text-center text-4xl font-bold mb-6">Emoji Search</h1>

      <SearchBar query={query} setQuery={setQuery} />

      {loading ? (
        <p className="text-center mt-6 text-gray-600">Loading memes...</p>
      ) : (
        <EmojiGrid memes={filtered} />
      )}
    </div>
  );
}
