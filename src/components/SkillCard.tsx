import { cn } from "../utils/cn";
interface SkillCardProps {
  imgSrc: string;
  label: string;
  desc: string;
  classes?: string;
}

export default function SkillCard({
  imgSrc,
  label,
  desc,
  classes
}: SkillCardProps) {
  return (
    <div className={cn("flex items-center gap-3 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-3 hover:bg-zinc-800 transition-colors group", classes)}>
      <figure className="bg-zinc-700/50 rounded-lg overflow-hidden w-12 h-12 p-2 group-hover:bg-zinc-900 transition-colors">
        <img src={imgSrc} alt={label} />
      </figure>
      <div>
        <h3>{label}</h3>
        <p className="text-zinc-400 text-sm">{desc}</p>
      </div>
    </div>
  );
}
