import { memo } from 'react';

import AllRoutes from 'routes/AllRoutes';
import './app.less';
import './responsive.less';

function App() {
  return (
    <div className="App">
      <AllRoutes />
    </div>
  );
}

export default memo(App);
