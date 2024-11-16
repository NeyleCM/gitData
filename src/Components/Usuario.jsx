
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/userSlice';

export function Usuario() {
  const [username, setUsername] = useState(''); 
  const dispatch = useDispatch();

  const fetchUser = () => {
    if (!username.trim()) 
        return;
        fetch(`https://api.github.com/users/${username}`)
        .then((res) => {
            if (!res.ok) throw new Error('Usuario no encontrado');
            return res.json();
        })
        .then((data) => dispatch(addUser(data))) 
        .catch((error) => alert(error.message)); 
  };

  return (
    <>
        <div className='input'>
        <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)} 
            placeholder="Escribe un usuario de GitHub"
        />
        <button onClick={fetchUser}>Buscar Usuario</button>
        </div>
    </>
  );
}