import Home from "./Home/Home";
import Books from "./Books/Books";

const links = [
  {
    path: '/',
    label: 'Home',
    component: Home,
  },
  {
    path: '/books',
    label: 'Manage Books',
    component: Books
  }
];
export default links;
