import styled from "styled-components"

export const TechnologySectionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
`

export const TechnologyContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    width: 100%;
`

export const TechnologySectionTitle = styled.h3`
    font-size: ${props => props.theme.sizes.normal};
    color: ${props => props.theme.colors.lightText};
    font-weight: 400;
    width: 100%;
`

export const TechnologiesWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
    grid-gap: 10px;
    
    @media (max-width: 930px) {
        grid-template-columns: repeat(2, 1fr);
    }
`

export const TechnologyBox = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px;
    background: ${props => props.theme.colors.gradientBox};
    font-size: ${props => props.theme.sizes.small};
    color: ${props => props.theme.colors.text};
    border-radius: 5px;
    backdrop-filter: blur(10px);
`

export const TechLogoSVGWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 35px;
    width: 35px;
    padding: 10px;
    border-radius: 5px;
`

export const TechLogoSVG = styled.img`
    height: 20px;
    width: 20px;
    object-fit: contain;
`