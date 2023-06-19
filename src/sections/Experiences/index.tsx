import React from "react";
import * as S from "./styles";
import { useExperience } from "@/hooks";
import { COUNTER, TITLE } from "./constants";
import { Title } from "@/components";

export const ExperiencesSection: React.FC = () => {
  const experiences = useExperience();

  return (
    <S.Container id="experiences">
      <Title>{TITLE}</Title>
      {experiences.map((experience) => {
        return (
          <S.Row key={experience.id.toString()}>
            <S.Column>
              <S.Name>{experience.company.name}</S.Name>
              <S.Position>{experience.company.position}</S.Position>
            </S.Column>
            <S.Description>{experience.description}</S.Description>
          </S.Row>
        );
      })}
      <S.Counter>{COUNTER}</S.Counter>
    </S.Container>
  );
};
