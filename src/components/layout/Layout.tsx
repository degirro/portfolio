import { Outlet } from "react-router-dom"
import { LayoutContainer, OutletContainer } from "../../utils/styles/layout/LayoutStyled"
import { Topbar } from "../topbar/Topbar"

type props = {
    toggleTheme: () => void
    isDarkMode: boolean
}

export const Layout: React.FC<props> = ({ toggleTheme, isDarkMode }) => {
    return (
        <LayoutContainer>
            <OutletContainer>
                <Topbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
                <Outlet />
            </OutletContainer>
        </LayoutContainer>
    )
}