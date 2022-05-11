import { useRoutes } from 'react-router-dom';
import routes from '../routers';
const App = (): JSX.Element => {
  const routing = useRoutes(routes);
  return <>{routing}</>;
};
export default App;
