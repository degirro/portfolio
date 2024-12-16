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
                            <WorkImg src="" />
                        </WorkImgWrapper>
                        <WorkNameWrapper target="_blank" href={work.url}>
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