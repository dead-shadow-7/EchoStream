import React from 'react';
import './home.css'  // or './main.css' if you named it differently
import { FaHome, FaSearch, FaMusic, FaPlus, FaHeart, FaPlay } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-black p-6">
        <h1 className="text-3xl font-bold mb-10">EchoStream</h1>
        <nav>
          <ul className="space-y-4">
            <li>
              <a href="/" className="flex items-center space-x-2 hover:text-green-400">
                <FaHome className="h-6 w-6" />
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="/search" className="flex items-center space-x-2 hover:text-green-400">
                <FaSearch className="h-6 w-6" />
                <span>Search</span>
              </a>
            </li>
            <li>
              <a href="/library" className="flex items-center space-x-2 hover:text-green-400">
                <FaMusic className="h-6 w-6" />
                <span>Your Library</span>
              </a>
            </li>
          </ul>
          <div className="mt-8 space-y-4">
            <button className="flex items-center space-x-2 hover:text-green-400">
              <FaPlus className="h-6 w-6" />
              <span>Create Playlist</span>
            </button>
            <button className="flex items-center space-x-2 hover:text-green-400">
              <FaHeart className="h-6 w-6" />
              <span>Liked Songs</span>
            </button>
          </div>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto p-8">
        <h2 className="text-3xl font-bold mb-6">Welcome to EchoStream</h2>
        
        {/* Featured Playlists */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Featured Playlists</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((playlist) => (
              <div key={playlist} className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition duration-300">
                <div className="bg-gray-600 w-full h-40 mb-4 rounded-md"></div>
                <h4 className="font-semibold">Playlist {playlist}</h4>
                <p className="text-sm text-gray-400">By EchoStream</p>
              </div>
            ))}
          </div>
        </section>

        {/* Recently Played */}
        <section>
          <h3 className="text-2xl font-semibold mb-4">Recently Played</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((track) => (
              <div key={track} className="flex items-center space-x-3 bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition duration-300">
                <div className="bg-gray-600 w-12 h-12 rounded-md flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold">Track {track}</h4>
                  <p className="text-sm text-gray-400">Artist {track}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Playback controls */}
      <footer className="fixed bottom-0 left-0 right-0 bg-gray-900 p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="bg-gray-800 w-14 h-14 rounded-md"></div>
            <div>
              <h4 className="font-semibold">Currently Playing</h4>
              <p className="text-sm text-gray-400">Artist</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FaPlay className="h-10 w-10 text-green-400 hover:text-green-300 cursor-pointer" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;