import GameCard from "./ProductCard";

function GameList({ games }) {
  if (games.length === 0) {
    return (
      <div className="empty-state">
        <span>🎮</span>
        <h3>No encontramos juegos</h3>
        <p>Prueba con otro nombre, plataforma o género.</p>
      </div>
    );
  }

  return (
    <div className="games-grid" id="catalogo">
      {games.map((game) => (
        <GameCard key={game.id} {...game} />
      ))}
    </div>
  );
}

export default GameList;
