import styled from "styled-components";

export const CartContainer = styled.div`
    position: relative; /* botão absoluto será relativo a esta div */
    width: 100%;
`;


export const ProductImage = styled.img`
    height: 80px;
    width: 80px;
    border-radius: 16px;
`;

export const ButtonGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 30px;
        width: 30px;
        color: #FFF;
        border-radius: 4px;
        background-color: ${props => props.theme.purple};
        transition: all 0.4s;
        border: none;

        &:hover {
            background-color: #6F357C;
        }
    }
`;

export const EmptyCart = styled.p`
    font-size: 20px;
    text-align: center;
    font-weight: bold;
`;

export const ProductTotalPrice = styled.p`
    font-weight: bold;
`;

export const TrashImage = styled.img`
    height: 20px;
    width: 20px;
    cursor: pointer;
`;

export const HomeButton = styled.button`
    display: flex;
    align-items: center;
    gap: 8px;
    background: none;
    border: none;
    color: ${props => props.theme.purple};
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    padding: 10px 15px;
    margin: 20px;
    text-decoration: underline;

    &:hover {
        color: #6F357C;
    }
`;