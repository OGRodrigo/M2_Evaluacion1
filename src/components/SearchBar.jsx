import { Search } from "lucide-react";

function SearchBar({ value, onChange }) {
  return (
    <label className="search-box">
      <Search size={18} aria-hidden="true" />
      <span className="sr-only">Buscar videojuegos</span>
      <input
        type="search"
        placeholder="Buscar juego, plataforma o género..."
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}

export default SearchBar;
