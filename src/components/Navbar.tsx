import { useRef, useEffect } from "react";

interface NavbarProps {
  navOpen: boolean;
}

export default function Navbar({ navOpen }: NavbarProps) {
  const lastActiveLink = useRef<HTMLElement | null>(null);
  const activeBox = useRef<HTMLDivElement | null>(null);

  const initActiveBox = () => {
    console.log(lastActiveLink.current);
    console.log(activeBox.current);
    activeBox.current!.style.top = lastActiveLink.current!.offsetTop + "px";
    activeBox.current!.style.left = lastActiveLink.current!.offsetLeft + "px";
    activeBox.current!.style.width = lastActiveLink.current!.offsetWidth + "px";
    activeBox.current!.style.height =
      lastActiveLink.current!.offsetHeight + "px";
  };
  
  useEffect(initActiveBox, []);
  window.addEventListener("resize", initActiveBox);
  const activeCurrentLink = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const target = event.currentTarget;
    lastActiveLink.current?.classList.remove("active");
    target.classList.add("active");
    lastActiveLink.current = target;

    const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = target;
    const boxStyle = activeBox.current!.style;

    boxStyle.top = `${offsetTop}px`;
    boxStyle.left = `${offsetLeft}px`;
    boxStyle.width = `${offsetWidth}px`;
    boxStyle.height = `${offsetHeight}px`;
  };
  const navItems = [
    {
      label: "Home",
      link: "#home",
      className: "nav-link active",
      ref: lastActiveLink,
    },
    {
      label: "About",
      link: "#about",
      className: "nav-link",
    },
    {
      label: "Work",
      link: "#work",
      className: "nav-link",
    },
    {
      label: "Reviews",
      link: "#reviews",
      className: "nav-link",
    },
    {
      label: "Contact",
      link: "#contact",
      className: "nav-link md:hidden",
    },
  ];
  return (
    <nav className={`navbar ${navOpen ? "active" : ""}`}>
      {navItems.map(({ label, link, className, ref }, key) => (
        <a
          key={key}
          href={link}
          ref={ref as React.LegacyRef<HTMLAnchorElement>}
          className={className}
          onClick={activeCurrentLink}
        >
          {label}
        </a>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
}
