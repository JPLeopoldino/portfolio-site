import React from "react";
import * as S from "./styles";
import { useSkill } from "@/hooks";
import { COUNTER, DESCRIPTION, TITLE } from "./constants";
import { Title } from "@/components";

export const SkillsSection: React.FC = () => {
  const skills = useSkill();

  return (
    <S.Container id="skills">
      <Title>{TITLE}</Title>
      <S.Row>
        <S.Description>{DESCRIPTION}</S.Description>
        <S.SkillContainer>
          {skills.map((skill) => {
            return (
              <S.SkillLabel key={skill.id.toString()}>
                {skill.name}
              </S.SkillLabel>
            );
          })}
        </S.SkillContainer>
      </S.Row>
      <S.Counter>{COUNTER}</S.Counter>
    </S.Container>
  );
};
