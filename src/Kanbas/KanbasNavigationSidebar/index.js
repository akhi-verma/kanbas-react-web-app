import "./index.css"
import { Link, useLocation } from "react-router-dom";
function KanbasNavigationSidebar() {
  
  const links = 
  [
    { name: "Account", icon: <i className={'fas fa-circle-user'} style={{fontSize: 2.5 + 'em'}} > </i> },
    { name: "Signin", icon: <i className={'fas fa-circle-user'} style={{fontSize: 2.5 + 'em'}} > </i> },
    { name: "Signup", icon: <i className={'fas fa-circle-user'} style={{fontSize: 2.5 + 'em'}} > </i> },
    { name: "Dashboard", icon: <i className={'fas fa-gauge-high'} style={{fontSize: 2.5 + 'em'}} > </i> },
    { name: "Courses", icon: <i className={'fas fa-book'} style={{fontSize: 2.5 + 'em'}} > </i> },
    { name: "Calendar", icon: <i className={'fas fa-calendar-days'} style={{fontSize: 2.5 + 'em'}} > </i> },
    { name: "Inbox", icon: <i className={'fa fa-envelope-open-text'} style={{fontSize: 2.5 + 'em'}} > </i> },
    { name: "History", icon: <i className={'fa fa-clock'} style={{fontSize: 2.5 + 'em'}} > </i> },
    { name: "Studio", icon: <i className={'fas fa-tv'} style={{fontSize: 2.5 + 'em'}} > </i> },
    { name: "Commons", icon: <i className={'fab fa-creative-commons'} style={{fontSize: 2.5 + 'em'}} > </i> },
    { name: "Help", icon: <i className={'fa fa-circle-question'} style={{fontSize: 2.5 + 'em'}} > </i> }
  ];
  
  const { pathname } = useLocation();
  console.log('pathname:', pathname);
  return (
    <div>
        <ul className="wd-kanbas-navigation list-group">
        <li className="list-group-item">
            <img src="/Kanbas/images/NU.png" width="60" height="60" alt="NU Logo" />
        </li>
        {links.map((link, index) => (
        <li className = {`list-group-item ${pathname.includes(link.name) && "active"}`} key={index}>
        <Link
            to={`/Kanbas/${link.name}/`}
            >
            {link.icon}
            <br />
            {link.name}
        </Link>
        </li>
      ))}
      </ul>
    </div>
  );
}
export default KanbasNavigationSidebar;

