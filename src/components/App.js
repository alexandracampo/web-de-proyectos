import '../styles/App.scss';
import Landing from './Landing';
import IconRocket from '../images/shuttle.svg';
import Header from './Header';
import CreateProyect from './CreateProyect';
import { Route, Routes } from 'react-router-dom';
import ErrorMsn from './ErrorMsn';

function App() {

  return (
    <div className='container'>
      <Header iconRocket={IconRocket} />

      <Routes>
        <Route path='/' element={<Landing></Landing>}></Route>
        <Route path='/create' element={<CreateProyect></CreateProyect>}></Route>
        <Route path='*' element={<ErrorMsn></ErrorMsn>} ></Route>
      </Routes>

    </div>

  );
}
export default App;
