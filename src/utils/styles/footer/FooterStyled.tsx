import styled from "styled-components"

export const FooterContainer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 20px 0px;
    border-top: 1px solid ${props => props.theme.colors.box};
`

export const FooterWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    color: ${props => props.theme.colors.lightText};
    font-weight: 300;
`

export const FooterReserved = styled.p`
    font-size: ${props => props.theme.sizes.small};
`

export const FooterDesc = styled.p`
    font-size: ${props => props.theme.sizes.small};

    a {
        font-size: ${props => props.theme.sizes.small};
        color: ${props => props.theme.colors.primary};
        text-decoration: none;
    }
`