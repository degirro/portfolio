import styled from "styled-components"

export const AboutContainer = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

export const AboutContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    color: ${props => props.theme.colors.text};
    font-weight: 400;
    width: 60%;
`

export const AboutName = styled.h1`
    font-size: ${props => props.theme.sizes.header};
    font-weight: inherit;
`

export const AboutTitle = styled.h2`
    font-size: ${props => props.theme.sizes.header};
    color: ${props => props.theme.colors.primary};
    font-weight: inherit;
`

export const AboutDesc = styled.p`
    font-size: ${props => props.theme.sizes.large};
    color: ${props => props.theme.colors.lightText};
    font-weight: 300;
    line-height: 25px;
`

export const AboutAvatarWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 260px;
    width: 100%;
    position: relative;
`

export const AboutSvg = styled.svg`
    position: absolute;
`

export const AboutPath = styled.path``

export const AboutAvatar = styled.img`
    max-width: 150px;
    background-size: cover;
    z-index: 10;
`