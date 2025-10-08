import Cart from "../../assets/cart.svg";
import { ContainerButton } from "./styles";

export function CartButton({ onClick }) {
  return (
    <ContainerButton onClick={onClick}>
      <img src={Cart} alt="carrinho-de-compras" />
    </ContainerButton>
  );
}
