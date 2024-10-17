export default function About() {
  const ABOUT_ITEMS = [
    {
      label: "Project done",
      number: 2,
    },
    {
      label: "Years of experience",
      number: 2,
    },
  ];
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="rounded-2xl bg-zinc-800/50 p-7 md:p-12">
          <p className="mb-4 text-zinc-300 md:mb-8 md:max-w-[60ch] md:text-xl">
            As an aspiring web developer, I specialize in creating visually
            appealing and user-friendly websites. My passion lies in building
            projects from the ground up, transforming concepts into interactive
            digital experiences. By blending artistic flair with technical
            proficiency, I strive to deliver exceptional results. I approach
            challenges with quiet confidence, maintain an inquisitive mindset,
            and am dedicated to continuously enhancing my skills in this
            ever-evolving field.
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {ABOUT_ITEMS.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">
                    {number}
                  </span>
                  <span className="font-semibold text-sky-400 md:text-3xl">
                    +
                  </span>
                </div>
                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}
            <img
              src="/images/logo.png"
              alt="logo"
              className="ml-auto size-10 md:size-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
