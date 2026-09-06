import { Monitor, Star } from "lucide-react";
import Button from "./Button";

function ProductCard({ name, price, category, platform, image, rating }) {
  const formattedPrice = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0
  }).format(price);

  return (
    <article className="game-card">
      <div className="game-card__media">
        <img src={image} alt={`Portada de ${name}`} />
        <span className="game-card__category">{category}</span>
      </div>

      

      <div className="game-card__body">
        <div className="game-card__platform">
          <Monitor size={14} />
          <span>{platform}</span>
        </div>

        <h3>{name}</h3>

        <div className="game-card__rating" aria-label={`Puntuación ${rating} de 5`}>
          <Star size={15} fill="currentColor" aria-hidden="true" />
          <span>{rating}</span>
        </div>

        <div className="game-card__footer">
          <strong>{formattedPrice}</strong>
          <Button variant="primary" onClick={() => alert(`${name} agregado a la demo`)}>
            Ver juego
          </Button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
