function Button({ children, variant = "primary", onClick }) {
  return (
    <button
      className={`button button--${variant}`}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
