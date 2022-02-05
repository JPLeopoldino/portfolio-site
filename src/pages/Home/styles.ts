import styled from 'styled-components';
import colors from '../../styles/colors';

interface SectionProps {
    color: string;
}

interface TextProps {
    color: string;
}

interface ContentContainerProps { 
    align: string;
}

interface SkillBarProps {
    percentage: number;
}

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
`;

export const Header = styled.div`
    width: 100%;
    height: 90px;
    position: fixed;
    top: 0;
    background-color: ${colors.black};
    z-index: 99;
`;

export const Section = styled.div<SectionProps>`
    width: 100%;
    min-height: 100vh;
    background-color: ${props => props.color};
    padding: 90px 195px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const ContentContainer = styled.aside<ContentContainerProps>`
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: ${props => props.align};
`;

export const Title = styled.h1`
    font-size: 64px;
    font-style: normal;
    font-weight: 700;
    line-height: 84px;
    letter-spacing: 0em;
    text-align: left;
    color: ${colors.black};
`;

export const Subtitle = styled.p`
    font-size: 24px;
    font-style: normal;
    font-weight: 300;
    line-height: 32px;
    letter-spacing: 0.1em;
    text-align: left;
    color: ${colors.black};
`;

export const TitleText = styled.p<TextProps>`
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 42px;
    letter-spacing: 0em;
    text-align: left;
    color: ${props => props.color};
`;

export const Text = styled.p<TextProps>`
    margin: 40px 0;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 42px;
    letter-spacing: 0em;
    text-align: left;
    color: ${props => props.color};
`;

export const Button = styled.button`
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 42px;
    letter-spacing: 0em;
    text-align: center;
    color: ${colors.white};

    background-color: ${colors.black};
    border-radius: 18px;
    padding: 4px 34px;
    border: none;
    outline: none;
    transition: 0.2s ease;

    &:hover{
        opacity: 0.8;
    }
`;

export const Illustration = styled.span`
    font-size: 36px;
    font-style: normal;
    font-weight: 500;
    line-height: 47px;
    letter-spacing: 0em;
    text-align: center;

    background-color: ${colors.black};
    color: ${colors.white};
    border-radius: 73px;
    padding: 180px 80px;
`;

export const SectionTitle = styled.h2<TextProps>`
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 63px;
    letter-spacing: 0em;
    text-align: center;
    color: ${props => props.color};
    margin: 0 0 40px 0;
`;

export const PictureFrame = styled.span`
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 42px;
    letter-spacing: 0em;
    text-align: center;
    color: ${colors.black};

    background-color: ${colors.white};
    border-radius: 100%;
    padding: 180px 180px;
`;

export const NameLabel = styled.p`
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 42px;
    letter-spacing: 0em;
    text-align: left;
    color: ${colors.white};
    margin: 20px 0;
`;

export const MidiaIcon = styled.span`
    background-color: ${colors.white};
    border-radius: 100%;
    padding: 25px 25px;
    margin: 0 15px;
`;

export const ScrollableRowContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 100px;
    overflow-x: scroll;
    scrollbar-width: thin;
    scrollbar-color: ${colors.black} ${colors.grey};
`;

export const ProjectCard = styled.div`
    min-width: 430px;
    min-height: 483px;
    position: relative;
    border-radius: 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    gap: 10px;
    z-index: 1;

    ::before {
        content: '';
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        border-radius: 18px;
        background: ${colors.black};
        z-index: 1;
    }

    ::after {
        content: '';
        position: absolute;
        height: 100%;
        width: 90%;
        top: -20px;
        left: 5%;
        border-radius: 18px;
        background: ${colors.grey};
        z-index: -1;
    }
`;

export const ProjectImage = styled.div`
    min-height: 246px;
    width: 80%;
    border-radius: 19px;
    background: ${colors.grey};
    z-index: 2;
`;

export const ProjectDetailsContainer = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 25px;
`;

export const ProjectTitle = styled.p`
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 32px;
    letter-spacing: 0em;
    text-align: left;
    color: ${colors.white};
    z-index: 2;
`;

export const ProjectDesc = styled.p`
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
    color: ${colors.white};
    z-index: 2;
`;

export const ProjectToolsContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    gap: 25px;
    z-index: 2;
`;

export const ToolBagage = styled.p`
    border-radius: 18px;
    border: 2px solid ${colors.grey};
    padding: 1px 16px;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: center;
    color: ${colors.grey};
    z-index: 2;
`;

export const ProjectButton = styled.button`
    width: 80%;
    margin: 10px 0 0;
    border-radius: 18px;
    background-color: ${colors.grey};
    padding: 20px 64px;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 37px;
    letter-spacing: 0em;
    text-align: center;
    color: ${colors.black};
    z-index: 2;
    border: none;
    outline: none;
    transition: 0.2s ease;

    &:hover{
        opacity: 0.8;
    }
`;

export const RowSkillContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 150px 0;
`;

export const SkillTitle = styled.p`
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 32px;
    letter-spacing: 0em;
    text-align: center;
    color: ${colors.white};
`;

export const SkillItem = styled.div`
    background-color: ${colors.white};
    border-radius: 100%;
    padding: 60px 60px;
    margin: 15px 0;
`;

export const SkillBar = styled.div<SkillBarProps>`
    background: ${colors.dark_grey};
    width: 120px;
    height: 15px;
    position: relative;
    border-radius: 18px;
    gap: 10px;
    z-index: 1;

    ::before {
        content: '';
        position: absolute;
        height: 100%;
        width: ${props => props.percentage}%;
        top: 0;
        left: 0;
        border-radius: 18px;
        background: ${colors.white};
        z-index: 1;
    }

    ::after {
        content: '';
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        border-radius: 18px;
        background: ${colors.dark_grey};
        z-index: -1;
    }
`;

export const ContactItem = styled.div`
    background-color: ${colors.black};
    border-radius: 100%;
    padding: 25px 25px;
    margin: 0 15px 0;
`;

export const ContactText = styled.p`
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 42px;
    letter-spacing: 0em;
    text-align: left;
    color: ${colors.black};
`;

export const RowContactContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 34px 0;
`;

export const Footer = styled.div`
    height: 42px;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 64px 0;

    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 42px;
    letter-spacing: 0em;
    text-align: center;
    color: ${colors.white};
    background: ${colors.black};
`;
