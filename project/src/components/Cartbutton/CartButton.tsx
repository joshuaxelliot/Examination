import { useCart } from "../../context/CartContext";
import "./CartButton.css";

type CartButtonProps = {
  onClick: () => void;
  cartCount?: boolean;
};

export default function CartButton({
  onClick,
  cartCount = true,
}: CartButtonProps) {
  const { cartOrder } = useCart();

  return (
    <button
      className="cart-icon-button"
      onClick={onClick}
      aria-label={`Shopping cart with ${cartOrder.items.length} items`}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="cart-icon"
      >
        <g id="Interface / Shopping_Bag_02">
          <path
            id="Vector"
            d="M8 8H6.77734C5.47772 8 4.82845 8 4.36621 8.26514C3.96058 8.49781 3.64877 8.86535 3.48595 9.30371C3.30053 9.80294 3.40726 10.4433 3.62065 11.7237L3.62109 11.7261L4.55443 17.3261C4.71276 18.276 4.79244 18.7512 5.02947 19.1077C5.23841 19.4219 5.5317 19.6703 5.87598 19.8247C6.26653 19.9999 6.74787 20 7.71094 20H16.2893C17.2524 20 17.7334 19.9999 18.124 19.8247C18.4682 19.6703 18.7618 19.4219 18.9707 19.1077C19.2077 18.7512 19.287 18.276 19.4453 17.3261L20.3786 11.7261L20.3796 11.7222C20.5928 10.4428 20.6995 9.80274 20.5141 9.30371C20.3513 8.86535 20.0402 8.49781 19.6346 8.26514C19.1724 8 18.522 8 17.2224 8H16M8 8H16M8 8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
      {cartOrder.items.length > 0 && cartCount && (
        <span className="cart-count">{cartOrder.items.length}</span>
      )}
    </button>
  );
}
