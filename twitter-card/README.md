# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


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

