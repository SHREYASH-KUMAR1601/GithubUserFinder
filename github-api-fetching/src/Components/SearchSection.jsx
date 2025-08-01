import React, { useState } from "react";

export default function SearchSection({ onSearch, loading, history }) {
  const [q, setQ] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!q.trim()) return;
    onSearch(q.trim());
    setQ("");
  };

  return (
    <section className="w-full bg-gray-900">
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl shadow-xl p-6 flex flex-col gap-6">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-white">
              Find a GitHub User
            </h2>
            <p className="text-sm text-gray-300 mt-1">
              Enter any GitHub username to view profile and recent repos.
            </p>
          </div>

          <form
            onSubmit={submit}
            className="flex flex-col sm:flex-row items-stretch gap-4"
          >
            <div className="flex-1 relative">
              <input
                type="text"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="e.g., octocat"
                disabled={loading}
                aria-label="GitHub username"
                className="w-full appearance-none bg-gray-900 text-gray-100 placeholder-gray-500 rounded-lg border border-gray-600 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition shadow-inner"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="flex-shrink-0 px-8 py-3 rounded-lg bg-teal-500 hover:bg-teal-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium shadow-md transition"
            >
              {loading ? "Searching…" : "Search"}
            </button>
          </form>

          {history && history.length > 0 && (
            <div className="pt-2 border-t border-gray-600">
              <h3 className="text-lg font-medium text-gray-200 mb-2">
                Recent Searches
              </h3>
              <div className="flex flex-wrap gap-2">
                {history.map((user) => (
                  <button
                    key={user}
                    onClick={() => onSearch(user)}
                    className="flex items-center gap-1 px-4 py-2 rounded-full bg-gray-800 hover:bg-gray-700 text-sm text-gray-100 transition-shadow shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                  >
                    {user}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
