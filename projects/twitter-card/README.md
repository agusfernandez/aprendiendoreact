## Data TwitterCard

1) se crea el componente TwitterCard y se importa en App 
2) TwitterCard.jsx
-usar el useState para cambiar el estado del "follow" para que cambie
-usar el if ternario para preguntar si lo sigue o no
-usar el link del avatar para traer un usuario `https://unavatar.io/${userName}`
-crear un boton para que cambie segun el estado de Follow o Unfollow + Opcion de Dejar de Salir
-agregar estilos
3) App.jsx
-importar el componente TwitterCard
-crear un array de users (object)
-Luego hacer un map q recorra el array e imprima cada una de las cards
  
{
    users.map(({userName, name, isFollowing}) => (
          <TwitterCard 
            key={userName}
            userName={userName}
            name={name}
            isFollowing={isFollowing}
          >
            {name}
          </TwitterCard>
    ))  
}

