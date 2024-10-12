interface ButtonProps {
  href?: string;
  target?: string;
  label?: string;
  icon?: React.ReactNode;
  classes?: string;
}

function ButtonPrimary({
  href,
  target = "_self",
  label,
  icon,
  classes,
}: ButtonProps) {
  if (href) {
    return (
      <a href={href} target={target} className={"btn btn-primary " + classes}>
        {label}
        {icon ? (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        ) : undefined}
      </a>
    );
  } else {
    return (
      <button className={"btn btn-primary " + classes}>
        {label}{" "}
        {icon ? (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        ) : undefined}
      </button>
    );
  }
}



function ButtonOutline({
    href,
    target = "_self",
    label,
    icon,
    classes,
  }: ButtonProps) {
    if (href) {
      return (
        <a href={href} target={target} className={"btn btn-outline " + classes}>
          {label}
          {icon ? (
            <span className="material-symbols-rounded" aria-hidden="true">
              {icon}
            </span>
          ) : undefined}
        </a>
      );
    } else {
      return (
        <button className={"btn btn-outline " + classes}>
          {label}{" "}
          {icon ? (
            <span className="material-symbols-rounded" aria-hidden="true">
              {icon}
            </span>
          ) : undefined}
        </button>
      );
    }
  }
  
  export {ButtonPrimary, ButtonOutline };
