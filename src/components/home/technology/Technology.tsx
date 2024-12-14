import { TechnologyContainer, TechnologySectionTitle, TechnologiesWrapper, TechnologyBox, TechnologySectionsContainer, TechLogoSVG, TechLogoSVGWrapper } from "../../../utils/styles/home/technology/TechnologyStyled"
import { SectionLayout } from "../../layout/SectionLayout"
import { ITechnologyData, TechnologiesType, TechnologyData } from "./TechnologyData"

export const Technology = () => {
    return (
        <SectionLayout title="Technologies">
            <TechnologySectionsContainer>
                {TechnologyData.map((data: ITechnologyData) => (
                    <TechnologyContainer>
                        <TechnologySectionTitle>{data.title}</TechnologySectionTitle>
                        <TechnologiesWrapper>
                            {data.technologies.map((technology: TechnologiesType) => (
                                <TechnologyBox><TechLogoSVGWrapper style={{ background: `${technology.color}` }}><TechLogoSVG src={technology.svg} /></TechLogoSVGWrapper> {technology.name}</TechnologyBox>
                            ))}
                        </TechnologiesWrapper>
                    </TechnologyContainer>
                ))}
            </TechnologySectionsContainer>
        </SectionLayout>
    )
}