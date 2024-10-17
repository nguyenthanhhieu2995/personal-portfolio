import { cn } from "../utils/cn";

interface ProjectCardProps {
  imgSrc: string;
  title: string;
  tags: string[];
  projectLink: string;
  classes?: string;
}
export default function ProjectCard({
  imgSrc,
  title,
  tags,
  projectLink,
  classes,
}: ProjectCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl bg-zinc-800 p-4 ring-1 ring-inset ring-zinc-50/5 transition-colors hover:bg-zinc-700/50 active:bg-zinc-700/60",
        classes,
      )}
    >
      <figure className="img-box aspect-square rounded-lg">
        <img src={imgSrc} alt={title} loading="lazy" className="img-cover" />
      </figure>

      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="title-1 mb-3">{title}</h3>
          <div className="flex flex-wrap items-center gap-2">
            {tags.map((label, key) => (
              <span
                key={key}
                className="grid h-8 items-center rounded-lg bg-zinc-50/5 px-3 text-sm text-zinc-400"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
        <div className="grid size-11 shrink-0 place-content-center rounded-lg bg-sky-400 text-zinc-950">
          <span className="material-symbols-rounded" aria-hidden="true">
            arrow_outward
          </span>
        </div>
      </div>

      <a href={projectLink} target="_blank" className="inset-0 absolute"></a>
    </div>
  );
}
