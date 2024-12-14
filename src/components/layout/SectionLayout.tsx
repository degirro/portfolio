import { PropsWithChildren } from "react"
import { SectionContainer, SectionTitle } from "../../utils/styles/layout/SectionLayoutStyled";

interface IProps extends PropsWithChildren {
    title: string;
}

export const SectionLayout: React.FC<IProps> = ({ title, children }) => {
    return (
        <SectionContainer>
            <SectionTitle>{title}</SectionTitle>
            {children}
        </SectionContainer>
    )
}