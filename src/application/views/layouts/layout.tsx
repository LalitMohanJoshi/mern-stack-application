import './Layout.css';
import { Header } from '../elements/primary/header';
import { Footer } from '../elements/primary/footer';
import { Sidebar } from '../elements/primary/sidebar';
import { Outlet } from 'react-router-dom';
import { Body } from '../elements/primary/body';

function Layout() { // function component , it does't maintain their state , but use props
  return (
    <div className='App' id="main-wrapper">
      <Header id='My Header' />
      <Sidebar />
      {/* <Body /> */}
      <Outlet></Outlet>
      <Footer />
    </div>
  );
}

export default Layout;
