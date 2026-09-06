import { useMemo, useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import GameList from "./components/ProductList";
import Footer from "./components/Footer";
import { games } from "./data/products";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todos");

  const categories = ["Todos", ...new Set(games.map((game) => game.category))];

  const filteredGames = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return games.filter((game) => {
      const matchesText =
        game.name.toLowerCase().includes(normalizedSearch) ||
        game.platform.toLowerCase().includes(normalizedSearch) ||
        game.category.toLowerCase().includes(normalizedSearch);

      const matchesCategory =
        category === "Todos" || game.category === category;

      return matchesText && matchesCategory;
    });
  }, [search, category]);

  return (
    <div className="app-shell">
      <Header />

      <main>
        <section className="hero">
          <div className="hero__glow hero__glow--one" />
          <div className="hero__glow hero__glow--two" />

          <div className="container hero__content">
            <span className="eyebrow">TU PRÓXIMA PARTIDA EMPIEZA AQUÍ</span>
            <h1>
              Juega más.
              <span> Elige mejor.</span>
            </h1>
            <p>
              Explora una selección de videojuegos para PC, PlayStation,
              Xbox y Nintendo Switch.
            </p>
          </div>
        </section>

        <section className="catalog">
          <div className="container">
            <div className="catalog__toolbar">
              <div>
                <span className="section-kicker">CATÁLOGO</span>
                <h2>Videojuegos destacados</h2>
              </div>

              <SearchBar value={search} onChange={setSearch} />
            </div>

            <div className="category-row" aria-label="Filtrar por categoría">
              {categories.map((item) => (
                <button
                  key={item}
                  className={`category-chip ${
                    category === item ? "category-chip--active" : ""
                  }`}
                  onClick={() => setCategory(item)}
                  type="button"
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="results-line">
              <span>{filteredGames.length} juegos encontrados</span>
            </div>

            <GameList games={filteredGames} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
