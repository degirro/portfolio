import { FooterContainer, FooterWrapper, FooterReserved, FooterDesc } from "../../../utils/styles/footer/FooterStyled";

export const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterReserved>{year} - All Rights Reserved</FooterReserved>
                <FooterDesc>Built with <a href="https://react.dev/" target="_blank">React</a></FooterDesc>
            </FooterWrapper>
        </FooterContainer>
    )
}