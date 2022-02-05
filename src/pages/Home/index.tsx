import * as SC from './styles';

export default function MainPage() {
    return(
        <SC.Container>
            <SC.Header/>
            <SC.Section color="#FBF8F8">
                <SC.RowContainer>
                    <SC.ContentContainer align="flex-start">
                        <SC.Subtitle>Full Stack Developer</SC.Subtitle>
                        <SC.Title>My Full Name</SC.Title>
                        <SC.Text color="#586A6A">
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                            Morbi non leo massa.
                        </SC.Text>
                        <SC.Button>Curriculum</SC.Button>
                    </SC.ContentContainer>
                    <SC.ContentContainer align="flex-end">
                        <SC.Illustration>Fancy Illustration</SC.Illustration>
                    </SC.ContentContainer>
                </SC.RowContainer>
            </SC.Section>

            <SC.Section color="#586A6A">
                <SC.SectionTitle color="#FBF8F8">
                    About
                </SC.SectionTitle>
                <SC.RowContainer>
                    <SC.ContentContainer align="center">
                        <SC.PictureFrame>Profile Picture</SC.PictureFrame>
                        <SC.NameLabel>My Full Name</SC.NameLabel>
                        <SC.RowContainer>
                            <SC.MidiaIcon/>
                            <SC.MidiaIcon/>
                            <SC.MidiaIcon/>
                        </SC.RowContainer>
                    </SC.ContentContainer>
                    <SC.ContentContainer align="flex-start">
                        <SC.TitleText color="#FBF8F8">
                            Subtitle
                        </SC.TitleText>
                        <SC.Text color="#FBF8F8">
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Morbi non leo massa.
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit.
                            
                            Morbi non leo massa. Suspendisse a magna
                            id nulla euismod malesuada ac non justo.
                        </SC.Text>
                    </SC.ContentContainer>
                </SC.RowContainer>
            </SC.Section>

            <SC.Section color="#FBF8F8">
                <SC.SectionTitle color="#586A6A">
                    Projects
                </SC.SectionTitle>
                <SC.ScrollableRowContainer>
                        <SC.ProjectCard>
                            <SC.ProjectImage/>
                            <SC.ProjectDetailsContainer>
                                <SC.ProjectTitle>
                                    Project Title
                                </SC.ProjectTitle>
                                <SC.ProjectDesc>
                                    Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit.
                                    Morbi non leo massa. Maecenas
                                    egestas quam in tincidunt accumsan. 
                                </SC.ProjectDesc>
                            </SC.ProjectDetailsContainer>
                        </SC.ProjectCard>

                        <SC.ProjectCard>
                            <SC.ProjectDetailsContainer>
                                <SC.ProjectTitle>
                                    Project Title
                                </SC.ProjectTitle>
                                <SC.ProjectDesc>
                                    Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit.
                                    Morbi non leo massa. Maecenas
                                    egestas quam in tincidunt accumsan. 
                                </SC.ProjectDesc>
                            </SC.ProjectDetailsContainer>  
                            <SC.ProjectToolsContainer>
                                <SC.ToolBagage>Tecnologie</SC.ToolBagage>
                                <SC.ToolBagage>Tecnologie</SC.ToolBagage>
                                <SC.ToolBagage>Tecnologie</SC.ToolBagage>
                                <SC.ToolBagage>Tecnologie</SC.ToolBagage>
                                <SC.ToolBagage>Tecnologie</SC.ToolBagage>
                            </SC.ProjectToolsContainer>
                            <SC.ProjectButton>
                                Access
                            </SC.ProjectButton>
                        </SC.ProjectCard>

                        <SC.ProjectCard>
                            <SC.ProjectImage/>
                            <SC.ProjectDetailsContainer>
                                <SC.ProjectTitle>
                                    Project Title
                                </SC.ProjectTitle>
                                <SC.ProjectDesc>
                                    Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit.
                                    Morbi non leo massa. Maecenas
                                    egestas quam in tincidunt accumsan. 
                                </SC.ProjectDesc>
                            </SC.ProjectDetailsContainer>
                        </SC.ProjectCard>

                        <SC.ProjectCard>
                            <SC.ProjectImage/>
                            <SC.ProjectDetailsContainer>
                                <SC.ProjectTitle>
                                    Project Title
                                </SC.ProjectTitle>
                                <SC.ProjectDesc>
                                    Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit.
                                    Morbi non leo massa. Maecenas
                                    egestas quam in tincidunt accumsan. 
                                </SC.ProjectDesc>
                            </SC.ProjectDetailsContainer>
                        </SC.ProjectCard>
                        
                        <SC.ProjectCard>
                            <SC.ProjectDetailsContainer>
                                <SC.ProjectTitle>
                                    Project Title
                                </SC.ProjectTitle>
                                <SC.ProjectDesc>
                                    Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit.
                                    Morbi non leo massa. Maecenas
                                    egestas quam in tincidunt accumsan. 
                                </SC.ProjectDesc>
                            </SC.ProjectDetailsContainer>  
                            <SC.ProjectToolsContainer>
                                <SC.ToolBagage>Tecnologie</SC.ToolBagage>
                                <SC.ToolBagage>Tecnologie</SC.ToolBagage>
                                <SC.ToolBagage>Tecnologie</SC.ToolBagage>
                                <SC.ToolBagage>Tecnologie</SC.ToolBagage>
                                <SC.ToolBagage>Tecnologie</SC.ToolBagage>
                            </SC.ProjectToolsContainer>
                            <SC.ProjectButton>
                                Access
                            </SC.ProjectButton>
                        </SC.ProjectCard>
                </SC.ScrollableRowContainer>
            </SC.Section>
            
            <SC.Section color="#586A6A">
                <SC.SectionTitle color="#FBF8F8">
                    Skills
                </SC.SectionTitle>
                <SC.RowSkillContainer>
                    <SC.ContentContainer align="center">
                        <SC.SkillTitle>Tecnologie</SC.SkillTitle>
                        <SC.SkillItem/>
                        <SC.SkillBar percentage={50}/>
                    </SC.ContentContainer>

                    <SC.ContentContainer align="center">
                        <SC.SkillTitle>Tecnologie</SC.SkillTitle>
                        <SC.SkillItem/>
                        <SC.SkillBar percentage={20}/>
                    </SC.ContentContainer>

                    <SC.ContentContainer align="center">
                        <SC.SkillTitle>Tecnologie</SC.SkillTitle>
                        <SC.SkillItem/>
                        <SC.SkillBar percentage={70}/>
                    </SC.ContentContainer>

                    <SC.ContentContainer align="center">
                        <SC.SkillTitle>Tecnologie</SC.SkillTitle>
                        <SC.SkillItem/>
                        <SC.SkillBar percentage={50}/>
                    </SC.ContentContainer>

                    <SC.ContentContainer align="center">
                        <SC.SkillTitle>Tecnologie</SC.SkillTitle>
                        <SC.SkillItem/>
                        <SC.SkillBar percentage={90}/>
                    </SC.ContentContainer>

                    <SC.ContentContainer align="center">
                        <SC.SkillTitle>Tecnologie</SC.SkillTitle>
                        <SC.SkillItem/>
                        <SC.SkillBar percentage={30}/>
                    </SC.ContentContainer>

                    <SC.ContentContainer align="center">
                        <SC.SkillTitle>Tecnologie</SC.SkillTitle>
                        <SC.SkillItem/>
                        <SC.SkillBar percentage={100}/>
                    </SC.ContentContainer>
                </SC.RowSkillContainer>
            </SC.Section>
            
            <SC.Section color="#FBF8F8">
                <SC.SectionTitle color="#586A6A">
                    Contact
                </SC.SectionTitle>
                <SC.RowContactContainer>
                    <SC.Text color="#586A6A">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Morbi non leo massa. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit.
                    </SC.Text>
                </SC.RowContactContainer>
                <SC.RowContactContainer>
                    <SC.RowContainer>
                        <SC.ContactItem></SC.ContactItem>
                        <SC.ContactText>contact@contact.com</SC.ContactText>
                    </SC.RowContainer>
                    <SC.RowContainer>
                        <SC.ContactItem></SC.ContactItem>
                        <SC.ContactText>contact@contact.com</SC.ContactText>
                    </SC.RowContainer>
                </SC.RowContactContainer>
                <SC.RowContactContainer>
                    <SC.RowContainer>
                        <SC.ContactItem></SC.ContactItem>
                        <SC.ContactText>contact@contact.com</SC.ContactText>
                    </SC.RowContainer>
                    <SC.RowContainer>
                        <SC.ContactItem></SC.ContactItem>
                        <SC.ContactText>contact@contact.com</SC.ContactText>
                    </SC.RowContainer>
                </SC.RowContactContainer>
            </SC.Section>
            <SC.Footer>
                ©2022 | Developed by Me
            </SC.Footer>
        </SC.Container>
    );
}