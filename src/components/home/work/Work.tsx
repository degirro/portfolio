import { WorkContainer, WorkWrapper, WorkImg, WorkNameWrapper, WorkName, NavigateIcon, WorkImgWrapper, TechWrapper, WorkStack, NavigateIconWrapper } from "../../../utils/styles/home/work/WorkStyled"
import { SectionLayout } from "../../layout/SectionLayout"
import { WorkDataType } from "./WorkData"

type props = {
    sectionTitle: string
    workData: WorkDataType[]
}

export const Work: React.FC<props> = ({ workData, sectionTitle }) => {
    return (
        <SectionLayout title={sectionTitle}>
            <WorkContainer>
                {workData.map((work: WorkDataType) => (
                    <WorkWrapper>
                        <WorkImgWrapper>
                            <WorkImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyy9p-P-n2bbPJX8GwYAJvN7TObmZ164M5sw&s" />
                        </WorkImgWrapper>
                        <WorkNameWrapper>
                            <WorkName>{work.name}</WorkName>
                            <NavigateIconWrapper>
                                <NavigateIcon />
                            </NavigateIconWrapper>
                        </WorkNameWrapper>
                        <WorkStack>
                            {work.stack.map((tech: string) => (
                                <TechWrapper>
                                    {tech}
                                </TechWrapper>
                            ))}
                        </WorkStack>
                    </WorkWrapper>
                ))}
            </WorkContainer>
        </SectionLayout>
    )
}