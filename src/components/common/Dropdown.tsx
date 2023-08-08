import { Link } from "react-router-dom";

interface Props {
  label: string;
  items: items[];
}

interface items {
  name: string;
  link: string;
}

export const Dropdown = ({ label, items }: Props) => {
  const keyname = label.toLocaleLowerCase().replace(/\s+/g, "-");

  return (
    <div className="dropdown">
      <span className="dropdown-label">{label}</span>

      <div className="dropdown-menu">
        {items.map((item, index) => (
          <Link
            to={item.link}
            key={`${keyname}-${index}`}
            className="dropdown-item"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};
