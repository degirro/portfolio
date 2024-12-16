import { AnimatePresence } from "framer-motion"
import { TopbarContainer, Logo, ThemeButtonWrapper, SunIcon, MoonIcon } from "../../utils/styles/topbar/TopbarStyled"

type props = {
    isDarkMode: boolean
    toggleTheme: () => void
}

export const Topbar: React.FC<props> = ({ isDarkMode, toggleTheme }) => {

    return (
        <TopbarContainer>
            <Logo src={isDarkMode ? 'logolight3.png' : 'logodark2.png'} />
            <ThemeButtonWrapper onClick={toggleTheme}>
                <AnimatePresence>
                    {isDarkMode ?
                        <SunIcon />
                        :
                        <MoonIcon />
                    }
                </AnimatePresence>
            </ThemeButtonWrapper>
        </TopbarContainer>
    )
}