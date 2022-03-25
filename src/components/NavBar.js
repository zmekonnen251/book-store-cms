import { FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import classes from './NavBar.module.css';

const links = [
  {
    id: 1,
    path: '/',
    text: 'BookStore Cms',
    style: classes.bookStore,
  },
  {
    id: 2,
    path: '/books',
    text: 'BOOKS',
    style: classes.books,
  },
  {
    id: 3,
    path: '/catagories',
    text: 'CATAGORIES',
    style: classes.catagories,
  },
];
const NavBar = () => (
  <>
    <div className={classes.card}>
      <header className={classes.header}>
        <ul className={classes.navBar}>
          {links.map((link) => (
            <li key={link.id} className={link.style}>
              <NavLink to={link.path}>{link.text}</NavLink>
            </li>
          ))}
        </ul>
        <FaUser className={classes.FaUser} />
      </header>
    </div>
  </>
);

export default NavBar;
