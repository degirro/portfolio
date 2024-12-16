import styled from "styled-components";
import { LuSunDim } from "react-icons/lu";
import { IoMoonOutline } from "react-icons/io5";

export const TopbarContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

export const Logo = styled.img`
    height: 40px;
    object-fit: cover;
`

export const ThemeButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 35px;
    width: 35px;
    border-radius: 50%;
    background: ${props => props.theme.colors.box}; 
    backdrop-filter: blur(10px);
`

export const SunIcon = styled(LuSunDim)`
   font-size: 20px;
   color: white; 
`

export const MoonIcon = styled(IoMoonOutline)`
    font-size: 18px;
    color: black;
`