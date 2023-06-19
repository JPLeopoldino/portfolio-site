import { useContact } from "@/hooks";
import React from "react";
import { COUNTER, DESCRIPTION, TITLE } from "./constants";
import { Title } from "@/components";
import * as S from "./styles";
import { BsGithub, BsLinkedin, BsEnvelopeFill } from "react-icons/bs";
import { IconBaseProps } from "react-icons";

export const ContactsSection: React.FC = () => {
  const contacts = useContact();

  interface ContactIcon extends IconBaseProps {
    icon: string
  }

  const ContactIcon: React.FC<ContactIcon> = ({ icon, ...rest }): JSX.Element => {
    switch (icon) {
      case "github":
        return <BsGithub {...rest} />;
      case "linkedin":
        return <BsLinkedin {...rest} />;
      case "mail":
      default:
        return <BsEnvelopeFill {...rest} />;
    }
  };

  return (
    <S.Container id="contacts">
      <Title>{TITLE}</Title>
      <S.Row>
        <S.Column>
          {contacts.map((contact) => {
            return (
              <S.LinkContainer
                key={contact.id.toString()}
                href={contact.url}
                target={contact.id !== 2 ? "_blank" : "_self"}
              >
                <ContactIcon icon={contact.icon} />
                <S.ContactLabel>{contact.name}</S.ContactLabel>
              </S.LinkContainer>
            );
          })}
        </S.Column>
        <S.Description>{DESCRIPTION}</S.Description>
      </S.Row>
      <S.Counter>{COUNTER}</S.Counter>
    </S.Container>
  );
};
