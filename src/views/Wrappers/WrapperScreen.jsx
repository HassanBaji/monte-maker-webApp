import { Header } from '../../components/Header/index';
import { Outlet } from 'react-router-dom';

export const WrapperScreen = (props) => {
  console.log('praps ' + JSON.stringify(props));
  console.log('loaded');
  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
};
