import React, { useState } from "react";
import Header from "./Components/Header";
import SearchSection from "./Components/SearchSection";
import InfoCard from "./Components/InfoCard";
import RepoList from "./Components/RepoList";

function App() {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [history, setHistory] = useState([]);

  const fetchGitHubData = async (username) => {
  setHistory((prev) => {
    if (prev.includes(username)) return prev;
    const newHist = [username].concat(prev);
    return newHist.slice(0, 5);
  });

  setLoading(true);
  setError("");
  setUser(null);
  setRepos([]);

  try {
    const u = await fetch(`https://api.github.com/users/${username}`);
    if (!u.ok) throw new Error("User not found");
    const udata = await u.json();
    setUser(udata);

    const perPage = 100;
    let page = 1;
    let allRepos = [];

    while (true) {
      const repoRes = await fetch(
        `https://api.github.com/users/${encodeURIComponent(
          username
        )}/repos?per_page=${perPage}&page=${page}&sort=updated`
      );
      if (!repoRes.ok) {
        throw new Error("Failed to load repositories");
      }
      const reposPage = await repoRes.json();
      if (!Array.isArray(reposPage)) break;

      allRepos = allRepos.concat(reposPage);

      if (reposPage.length < perPage) {
        break;
      }
      page += 1;
    }

    setRepos(allRepos);
  } catch (e) {
    setError(e.message);
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <Header />

      {/* Search + History */}
      <SearchSection
        onSearch={fetchGitHubData}
        loading={loading}
        history={history}
      />

      {/* Results */}
      <main className="flex-1 w-full px-4 sm:px-6 lg:px-8">
        {loading && (
          <p className="mt-4 text-center text-cyan-300 animate-pulse">
            Loading…
          </p>
        )}
        {error && (
          <p className="mt-4 text-center text-red-400 font-semibold">
            {error}
          </p>
        )}
        {user && <InfoCard user={user} />}
        {repos.length > 0 && <RepoList repos={repos} />}
      </main>

      <footer className="py-4 text-center text-md text-gray-500">
         Made with ❤️ by Shreyash
      </footer>
    </div>
  );
}

export default App;
