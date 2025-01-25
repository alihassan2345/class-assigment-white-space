import React from "react";
import Section from "@/components/Section";
import Plan from "@/components/Plan";
import Work from "@/components/Work";
import Sponsors from "@/components/Sponsors";
import Clients from "@/components/Clients";
import Last from "@/components/Last";

interface SectionData {
  heading: string;
  paragrapgh: string;
  button: string;
  direction: boolean;
  bgColor: string;
  image?: string;
}

const pageData: SectionData[] = [
  {
    heading: "Get More Done with whitepace",
    paragrapgh:
      "Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks",
    button: "try whitespace free",
    direction: true,
    bgColor: "#043873",
  },
  {
    heading: "Project Management",
    paragrapgh:
      "Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.",
    button: "get started",
    direction: true,
    bgColor: "#FFFFFF",
  },
  {
    heading: "Work together",
    paragrapgh:
      "With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.",
    button: "try it now",
    direction: false,
    bgColor: "#FFFFFF",
    image: "/Content.png",
  },
  {
    heading: "Use as Extension",
    paragrapgh:
      "Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.",
    button: "let's go",
    direction: true,
    bgColor: "#043873",
  },
  {
    heading: "Customise it to your needs",
    paragrapgh:
      "Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.",
    button: "Let's go",
    direction: false,
    bgColor: "#FFFFFF",
  },
];

export default function Home() {
  return (
    <>
      <main>
        {pageData.map((val, ind) => (
          <Section
            key={ind}
            heading={val.heading}
            paragrapgh={val.paragrapgh}
            button={val.button}
            direction={val.direction}
            bgColor={val.bgColor}
            image={val.image}
          />
        ))}
        <Plan />
        <Work />
        <Section
          heading="100% your data"
          paragrapgh="The app is open source and your notes are saved to an open format, so you'll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them."
          button="try taskey free"
          direction={true}
          bgColor="#FFFFFF"
          image="/data.png"
        />
        <Sponsors />
        <Section
          heading="Work with Your Favorite Apps Using whitepace"
          paragrapgh="Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success."
          button="read more"
          direction={false}
          bgColor="#043873"
          image="/Apps.png"
        />
        <Clients/>
        <Last />
      </main>
    </>
  );
}