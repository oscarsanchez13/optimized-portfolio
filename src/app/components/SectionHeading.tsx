type Props = {
  eyebrow: string;
  title: string;
  lead?: React.ReactNode;
  id?: string;
};

/** Neon section title with a mono eyebrow — one scale for every section. */
export default function SectionHeading({ eyebrow, title, lead, id }: Props) {
  return (
    <header className="mx-auto mb-8 max-w-2xl text-center md:mb-12">
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h2 id={id} className="section-title">{title}</h2>
      {lead && <p className="mt-4 text-base leading-relaxed text-slate-400 md:text-lg">{lead}</p>}
    </header>
  );
}
