import { Links } from "../../@common/dummy/dummy";

export const Navbar = ({visible}) => {
  return (
    <div className="navbar">
      <ul className={visible ? 'nav-menu active' : 'nav-menu'}>
        {Links.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
