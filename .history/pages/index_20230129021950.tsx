import type { GetStaticProps } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import  Projects2 from '../components/Projects2'
import Skills from '../components/Skills'
import About from '../components/About'
import WorkExperience from '../components/WorkExperience'
import Projects from '../components/Projects'
import ContactMe from '../components/ContactMe'
import Link from 'next/link'
import { Experience, Project, Skill, Social } from '../typings'
import { fetchExperience } from '../utils/fetchExperiences'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSocial } from '../utils/fetchSocials'
import React, { useEffect } from 'react';
import DonutChart from 'react-donut-chart';

type Props = {
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}
const Home = ({ experiences, projects, skills, socials }: Props) => {
  return (
    <div className="bg-[#0a192f] text-white h-screen  snap-y snap-proximity
     overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin  scrollbar-thumb-[#a8b2d1]/40">
      <Head>
        <title>Portfolio Risk Optimizer</title>
      </Head>

      {/* Header */}
      <Header />
      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      {/* Experience */}
      <section id="experience" className="snap-start">
        <WorkExperience />
      </section>
      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>
      {/* Projects */}
        <section id="projects" className="snap-start">
        <Projects2 projects={projects} />
      </section>
      {/* Contact Me */}
      <section id="contactme" className="snap-start">
        <ContactMe />
      </section>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const experiences: Experience[] = await fetchExperience();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocial();

  return {
    props: {
      experiences,
      skills,
      projects,
      socials,
    },

    revalidate: 100,
  };
}


