import React, { useMemo } from "react";
import Head from "next/head";

import { AppProvider } from "@/context";
import {
  ContactsSection,
  ExperiencesSection,
  MainSection,
  SkillsSection,
} from "@/sections";
import { Button, Container, Empty, Footer, Header } from "@/components";
import { NextPage } from "next";
import { useApp } from "@/hooks/useApp";

const Home: NextPage = () => {
  const { loading } = useApp();

  console.log(loading);

  return (
    <>
      <Head>
        <title>JPLeopoldino</title>
      </Head>

      {!loading && (
        <Container>
          <Header />

          <MainSection />

          <SkillsSection />

          <ExperiencesSection />

          <ContactsSection />

          <Button />

          <Footer />
        </Container>
      )}
    </>
  );
};

export default Home;
