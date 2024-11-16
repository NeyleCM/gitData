import { useSelector } from 'react-redux';

export function Datos() {
  const user = useSelector((state) => state.user);
  return (
    <>
      <h1>Datos del usuario</h1>
      <ul>
        <li>Nombre: {user.name}</li>
        <li>Nombre de usuario: {user.username}</li>
        <li>Seguidores: {user.followers} </li>
        <li>Repositorios públicos: {user.public_repos} </li>
        <li><img
            src={user.imagen}
            alt={`${user.name || 'Usuario'}`}
            style={{ width: '100px', borderRadius: '50%' }}
          /> </li>
      </ul>
    </>
  );
}
