import React from "react";

function InfoCard({ user }) {
  return (
    <div className="bg-gray-800 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center space-y-4">
  <img
    src={user.avatar_url}
    alt={user.name || user.login}
    className="w-32 h-32 rounded-full border-4 border-indigo-500"
  />
  <h2 className="text-3xl font-bold">{user.name || user.login}</h2>
  <a
    href={user.html_url}
    target="_blank"
    rel="noopener noreferrer"
    className="text-indigo-300 hover:underline"
  >
    @{user.login}
  </a>
  {user.bio && <p className="text-gray-300">{user.bio}</p>}
  <div className="flex flex-wrap justify-center gap-6 text-gray-400">
    {user.location && <span>📍 {user.location}</span>}
    {user.company && <span>🏢 {user.company}</span>}
    <span>👥 {user.followers} followers</span>
    <span>👤 {user.following} following</span>
    <span>📁 {user.public_repos} repos</span>
  </div>
  {user.blog && (
    <a
      href={user.blog.startsWith("http") ? user.blog : `https://${user.blog}`}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-2 text-indigo-300 hover:underline"
    >
      🔗 Website
    </a>
  )}
</div>

  );
}

export default InfoCard;
