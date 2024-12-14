import styled from "styled-components";
import { IoMdLink } from "react-icons/io";

export const WorkContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
    grid-gap: 10px;
    width: 100%;
`

export const WorkWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    padding: 12px;
    background: ${props => props.theme.colors.gradientBox}; 
    border-radius: 5px;
    overflow: hidden;
    position: relative;
    height: 100%;
    backdrop-filter: blur(10px);
    min-height: 100px;
`

export const WorkImgWrapper = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    right: 0;
    filter: blur(5px);
`

export const WorkImg = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: top;
    opacity: 0.07;
`

export const WorkNameWrapper = styled.a`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    z-index: 10;
`

export const WorkName = styled.h3`
    color: ${props => props.theme.colors.text};
    font-size: ${props => props.theme.sizes.normal};
    font-weight: 400;
`

export const NavigateIconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 30px;
    border-radius: 50%;
`

export const NavigateIcon = styled(IoMdLink)`
    font-size: ${props => props.theme.sizes.large};
    color: ${props => props.theme.colors.primary};
`

export const WorkStack = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    gap: 10px;
    z-index: 10;
`

export const TechWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 10px;
    background: ${props => props.theme.colors.stack};
    border-radius: 50px;
    color: ${props => props.theme.colors.text};
    font-size: 13px;
`