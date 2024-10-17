import { ButtonPrimary } from "./Button";

export default function Footer() {
  const SITEMAPS = [
    {
      label: "Home",
      href: "#home",
    },
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Work",
      href: "#work",
    },
    {
      label: "Reviews",
      href: "#reviews",
    },
    {
      label: "Contact me",
      href: "#contact",
    },
  ];

  const SOCIALS = [
    {
      label: "GitHub",
      href: "#",
    },
    {
      label: "LinkedIn",
      href: "#",
    },
    {
      label: "Instagram",
      href: "#",
    },
  ];
  return (
    <footer className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">

          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch]">
              Let&apos;s work together today!
            </h2>
            <ButtonPrimary
              href="mailto:nguyenthanhhieu2995@gmail.com"
              label="Get in touch"
              icon="chevron_right"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div>
              <p className="mb-2">Sitemap</p>
              <ul>
                {SITEMAPS.map(({ label, href }, key) => (
                  <li key={key}>
                    <a href={href} className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-2">Socials</p>
              <ul>
                {SOCIALS.map(({ label, href }, key) => (
                  <li key={key}>
                    <a href={href} target="_blank" className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          
        </div>

        <div className="flex items-center justify-between pt-10 mb-8">
          <a href="" className="">
            <img src="/images/logo.png" className="size-10" alt="Logo" />
          </a>
          <p className="text-zinc-500 text-sm">
            &copy; 2024 <span className="text-zinc-200">code by Hieu Nguyen</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
