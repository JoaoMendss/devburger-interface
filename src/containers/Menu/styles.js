import styled from "styled-components"
import BannerHamburger from "../../assets/banner-hamburger.svg"

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #F0F0F0;
`;

export const Banner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 480px;
    width: 100%;
    position: relative;

    background: url('${BannerHamburger}') no-repeat;
    background-color: #1F1F1F;
    background-position: center;
    background-size: cover;

    h1 {
        font-family: 'Road Rage', sans-serif;
        font-size: 80px;
        line-height: 65px;
        position: absolute;
        color: #FFF;

        right: 20%;
        top: 30%;
    }

    span {
        display: block;
        color: #FFF;
        font-size: 20px;
    }
`;

export const CategoryMenu = styled.div``;

export const ProductsContainer = styled.div``;