import styled from "styled-components"

export const SectionContainer = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 15px;
    width: 100%;
`

export const SectionTitle = styled.h2`
    width: 100%;
    padding: 15px 0px;
    color: ${props => props.theme.colors.lightHeader};
    font-size: ${props => props.theme.sizes.normal};
    border-bottom: 1px solid ${props => props.theme.colors.box};
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 1px;
`