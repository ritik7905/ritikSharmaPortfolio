import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.scss";
import HeroSection from "../components/heroSection/HeroSection";
import AboutScreen from "./about/AboutScreen";
import OurServices from "./ourServices/OurServices";
import PortfolioScreen from "./portfolio/PortfolioScreen";
import SocialConnects from "../components/socialConnects";

import { FiGithub, FiLinkedin } from "react-icons/fi";
import Skills from "./skills/Skills";
import ContactScreen from "./contact/ContactScreen";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const social = [
    {
      icon: <FiGithub />,
      url: "https://github.com/ritik7905",
    },
    {
      icon: <FiLinkedin />,
      url: "https://www.linkedin.com/in/ritik-sharma-a306321ab/",
    },
    { icon: "" },
  ];
  return (
    <>
      <Head>
        <title>Ritik Sharma</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.main}>
        {/* social-connects */}
        <div className={`${styles.social} list-group`}>
          {social.map((curElm, i) => {
            return (
              <SocialConnects icon={curElm.icon} key={i} url={curElm.url} />
            );
          })}
        </div>
        {/* Hero-section-start */}
        <section className={styles.heroSec}>
          <HeroSection />
        </section>
        {/* Hero-Section-End */}

        {/* About-sec-start */}
        <section className={styles.aboutSec} id="about">
          <AboutScreen />
        </section>
        {/* About-sec-end */}
        {/* Services-sec-start */}
        <section className={styles.servicesSec} id="service">
          <OurServices />
        </section>
        {/* Services-sec-end */}

        {/* Portfolio-sec-start */}
        <section className={styles.portfolioSec} id="portfolio">
          <PortfolioScreen />
        </section>
        {/* Portfolio-sec-end */}
        {/* Skills-sec-start */}
        <section className={styles.skillsSec} id="skills">
          <Skills />
        </section>
        {/* Skills-sec-end */}

        {/* Contact-sec-start */}
        <section className={styles.contactSec} id="contact">
          <ContactScreen />
        </section>
        {/* Skills-sec-end */}
      </section>
    </>
  );
}
