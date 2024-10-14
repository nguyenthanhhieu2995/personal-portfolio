import SkillCard from "./SkillCard";

export default function Skill() {
  const SKILL_ITEMS = [
    {
      imgSrc: "/images/html.svg",
      label: "HTML",
      desc: "Standard Markup Language",
    },
    {
      imgSrc: "/images/css3.svg",
      label: "CSS",
      desc: "User Interface",
    },
    {
      imgSrc: "/images/javascript.svg",
      label: "JavaScript",
      desc: "Interaction",
    },
    {
      imgSrc: "/images/typescript.svg",
      label: "TypeScript",
      desc: "Interaction",
    },
    {
      imgSrc: "/images/nodejs.svg",
      label: "NodeJS",
      desc: "Web Server",
    },
    {
      imgSrc: "/images/hono.svg",
      label: "HonoJS",
      desc: "Web Server Framework",
    },
    {
      imgSrc: "/images/postgresql.svg",
      label: "PostgreSQL",
      desc: "Database",
    },
    {
        imgSrc: "/images/prisma.svg",
        label: "Prisma",
        desc: "ORM",
    },
    {
      imgSrc: "/images/react.svg",
      label: "React",
      desc: "Framework",
    },
    {
      imgSrc: "/images/tailwindcss.svg",
      label: "TailwindCSS",
      desc: "User Interface",
    },
  ];
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2">Language I can use</h2>
        <p className="mb-8 mt-3 max-w-[50ch] text-zinc-400">
          I like to code things from scratch, and enjoy bringing ideas to life
          in the browser. Discover the powerful tools and technologies I use to
          create websites & applications.
        </p>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-3">
          {SKILL_ITEMS.map(({ imgSrc, label, desc }, key) => (
            <SkillCard key={key} imgSrc={imgSrc} label={label} desc={desc} />
          ))}
        </div>
      </div>
    </section>
  );
}
