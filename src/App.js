import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Router/Routes/Routes';

function App() {


  return (
    <div className='max-w-screen-xl mx-auto'>
      <RouterProvider router={router}>
        <App></App>
      </RouterProvider>
    </div>
  );
}

export default App;
