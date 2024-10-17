import ProjectCard from "./ProjectCard";
export default function Work() {
  const WORKS = [
    {
      imgSrc: "/images/facebook.png",
      title: "Facebook 2024 Clone",
      tags: ["API", "Vite", "TypeScript", "React", "TailwindCSS", "PostgreSQL", "Prisma", "Hono", "Vercel", "Render", "Shadcn UI", "TypeScript"],
      projectLink: "https://facebook-2024-gold.vercel.app/",
    }
  ];
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headeline-2 mb-8">My portfolio hightlights</h2>
        <div className="grid gap-x-4 gay-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {WORKS.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
