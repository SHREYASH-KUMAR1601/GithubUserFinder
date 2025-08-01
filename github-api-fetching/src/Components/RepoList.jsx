import React from "react";

function RepoList({ repos }) {
  return (
    <div className="bg-gray-800 rounded-2xl shadow-xl p-10 space-y-8 my-10">
  <h3 className="text-2xl font-bold text-center text-indigo-200">
    Latest Public Repositories
  </h3>
  <ul className="space-y-4">
    {repos.map((repo) => (
      <li
        key={repo.id}
        className="p-4 bg-gray-900 rounded-lg hover:bg-gray-700 transition shadow"
      >
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-semibold text-indigo-300 hover:underline"
        >
          {repo.name}
        </a>
        {repo.description && (
          <p className="text-gray-400 text-sm mt-1">{repo.description}</p>
        )}
        <div className="mt-2 flex flex-wrap gap-4 text-gray-500 text-xs">
          <span>⭐ {repo.stargazers_count}</span>
          <span>🍴 {repo.forks_count}</span>
          <span>🕒 {new Date(repo.updated_at).toLocaleDateString()}</span>
          {repo.language && <span>💻 {repo.language}</span>}
        </div>
      </li>
    ))}
  </ul>
</div>

  );
}

export default RepoList;
