import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import chess_img from './chess.png';
import sonic_img from './sonic.png';

const games = [
    {
        id: 1,
        title: "Chess Game",
        description: "Play chess against other players",
        image: chess_img,
        route: "/room"
    },
    {
        id: 2,
        title: "Sonic Adventure",
        description: "Classic platformer with Sonic the Hedgehog",
        image: sonic_img,
        route: "/game2"
    }
];

function Home({ user }) {
    const navigate = useNavigate();

    return (
        <div className="container mx-auto p-4">
            {user && (
                <h2 className="text-xl font-bold mb-4">Welcome, {user.username}!</h2>
            )}
            
            <h1 className="text-2xl font-bold mb-6">Game Gallery</h1>
            
            <div id="game-gallery" className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {games.map((game, index) => (
                    <div 
                        key={game.id}
                        className="game-card bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
                        onClick={() => navigate(game.route)}
                    >
                        <div className="aspect-w-16 aspect-h-9">
                            <img 
                                src={game.image} 
                                alt={game.title}
                                className="game-image w-full h-48 object-cover"
                            />
                        </div>
                        <div className="p-4">
                            <h2 className="game-title text-xl font-bold mb-2">
                                {game.title}
                            </h2>
                            <p className="game-description text-gray-600">
                                {game.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;