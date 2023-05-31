import './Layout.css';
import { AuthHeader } from '../elements/auth/authHeader';
import { AuthFooter } from '../elements/auth/authFooter';
import { Outlet } from 'react-router-dom';

function AuthLayout() { // function component , it does't maintain their state , but use props
  return (
    <div className='App' id="main-wrapper">
      <div className="auth-wrapper d-flex no-block justify-content-center align-items-center bg-dark">
        <div className="auth-box bg-dark border-top border-secondary">
          <div id="loginform">
            <AuthHeader id='My Header' />
            <Outlet></Outlet>
            <AuthFooter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
