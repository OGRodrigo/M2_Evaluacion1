import { Gamepad2, ShoppingBag } from "lucide-react";

function Header() {
  return (
    <header className="site-header">
      <div className="container header__inner">
        <a className="brand" href="#" aria-label="Level Up Store, inicio">
          <span className="brand__icon">
            <Gamepad2 size={22} strokeWidth={2.4} />
          </span>
          <span>
            LEVEL <strong>UP</strong>
          </span>
        </a>

        <nav className="nav" aria-label="Navegación principal">
          <a href="#catalogo">Juegos</a>
          <a href="#footer">Nosotros</a>
        </nav>

        <button className="cart-button" type="button" aria-label="Ver carrito">
          <ShoppingBag size={18} />
          <span className="cart-button__label">Carrito</span>
          <span className="cart-button__count">0</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
