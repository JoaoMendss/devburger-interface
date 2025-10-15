import { Table } from '../index';
import { useCart } from '../../hooks/CartContext';
import { formatPrice } from '../../utils/formatPrice'
import TrashIcon from '../../assets/trash.svg';
import { ButtonGroup, EmptyCart, HomeButton, ProductImage, ProductTotalPrice, TrashImage, CartContainer } from './styles';
import { useNavigate } from 'react-router-dom';

export function CartItems() {
    const { cartProducts, increaseProduct, decreaseProduct, deleteProduct } = useCart();
    const navigate = useNavigate();

    return (
        <CartContainer>
            <Table.Root>
                <Table.Header>
                    <Table.Tr>
                        <Table.Th></Table.Th>
                        <Table.Th>Itens</Table.Th>
                        <Table.Th>Preço</Table.Th>
                        <Table.Th>Quantidade</Table.Th>
                        <Table.Th>Total</Table.Th>
                        <Table.Th></Table.Th>
                    </Table.Tr>
                </Table.Header>
                <Table.Body>
                    {cartProducts?.length ? (
                        cartProducts.map(product => (
                            <Table.Tr key={product.id}>
                                <Table.Td>
                                    <ProductImage src={product.url} />
                                </Table.Td>
                                <Table.Td>{product.name}</Table.Td>
                                <Table.Td>{product.currencyValue}</Table.Td>
                                <Table.Td>
                                    <ButtonGroup>
                                        <button onClick={() => decreaseProduct(product.id)}>-</button>
                                        {product.quantity}
                                        <button onClick={() => increaseProduct(product.id)}>+</button>
                                    </ButtonGroup>
                                </Table.Td>
                                <Table.Td>
                                    <ProductTotalPrice>
                                        {formatPrice(product.quantity * product.price)}
                                    </ProductTotalPrice>
                                </Table.Td>
                                <Table.Td>
                                    <TrashImage src={TrashIcon} alt="lixeira" onClick={() => deleteProduct(product.id)} />
                                </Table.Td>
                            </Table.Tr>
                        ))
                    ) : (
                        <Table.Tr>
                            <Table.Td>Carrinho Vazio</Table.Td>
                        </Table.Tr>
                    )}
                </Table.Body>
            </Table.Root>
            <HomeButton onClick={() => navigate('/cardapio')}>← Adicionar mais produtos</HomeButton>
        </CartContainer>
    );
}
