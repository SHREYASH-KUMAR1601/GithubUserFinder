import React, { useState } from "react";

function SearchBar({ onSearch, loading }) {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onSearch(username.trim());
      setUsername("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
    className="flex mt-8 gap-2 w-full"
    >
  <input
    type="text"
    placeholder="Enter GitHub username"
    className="flex-1 px-4 py-3 rounded-lg shadow focus:outline-none"
    value={username}
    disabled={loading}
    onChange={(e) => setUsername(e.target.value)}
    required
  />
  <button
    type="submit"
    className={`px-6 py-3 rounded-lg font-medium transition shadow-lg
      ${loading
        ? "bg-indigo-500 opacity-60 cursor-not-allowed"
        : "bg-indigo-600 hover:bg-indigo-700"}
    text-white`}
    disabled={loading}
  >
    {loading ? "Searching…" : "Search"}
  </button>
</form>

  );
}

export default SearchBar;
