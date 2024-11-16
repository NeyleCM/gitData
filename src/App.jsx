import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Datos } from './Components/Datos.jsx';
import { addUser } from './redux/userSlice';
import { Usuario } from './Components/Usuario.jsx';
import './App.css';

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    fetch('https://api.github.com/users/carlosdiazgirol')
      .then((res) => res.json())
      .then((data) => dispatch(addUser(data)))
      .catch((error) => console.error('Error fetching data:', error));
  }, [dispatch]);
  return (
    <div className="App">
     <Datos />
     <Usuario />
    </div>
  );
}

export default App;

