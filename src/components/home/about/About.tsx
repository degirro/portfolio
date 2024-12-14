import { AboutContainer, AboutName, AboutTitle, AboutDesc, AboutAvatar, AboutContent, AboutAvatarWrapper, AboutPath, AboutSvg } from "../../../utils/styles/home/about/AboutStyled"
import { AboutData } from "./AboutData"

export const About = () => {
    return (
        <AboutContainer>
            <AboutContent>
                <AboutName>{AboutData.name}</AboutName>
                <AboutTitle>{AboutData.title}</AboutTitle>
                <AboutDesc>{AboutData.desc}</AboutDesc>
            </AboutContent>
            <AboutAvatarWrapper>
                <AboutAvatar src="avatar.png" />
                <AboutSvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <AboutPath fill="#00C3FF" d="M37.5,-60.5C48.5,-51.2,57.4,-40.7,62.8,-28.7C68.2,-16.7,70.2,-3.2,69.6,10.9C69,25.1,65.9,39.8,57.9,51.6C49.9,63.4,36.9,72.4,22.5,76.6C8.2,80.8,-7.6,80.2,-23.4,76.8C-39.2,73.5,-55.2,67.6,-66.8,56.5C-78.4,45.5,-85.8,29.5,-85,14.2C-84.2,-1.1,-75.2,-15.7,-67,-29.4C-58.8,-43,-51.5,-55.8,-40.4,-65.1C-29.4,-74.4,-14.7,-80.3,-0.7,-79.1C13.2,-78,26.4,-69.8,37.5,-60.5Z" transform="translate(100 100)" />
                </AboutSvg>
            </AboutAvatarWrapper>
        </AboutContainer>
    )
}