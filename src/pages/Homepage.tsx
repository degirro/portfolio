import { About } from "../components/home/about/About"
import { Technology } from "../components/home/technology/Technology"
import { Work } from "../components/home/work/Work"
import { ProfessionalWorkData, ProjectsData } from "../components/home/work/WorkData"
import { HomepageContainer } from "../utils/styles/home/HomepageStyled"

export const Homepage = () => {
    return (
        <HomepageContainer>
            <About />
            <Technology />
            <Work sectionTitle="Projects" workData={ProjectsData} />
            <Work sectionTitle="Professional Work" workData={ProfessionalWorkData} />
        </HomepageContainer>
    )
}