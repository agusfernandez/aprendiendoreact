
import '../general.css'
import TwitterCard  from './TwitterCard/TwitterCard'

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Ángel Durán',
        isFollowing: true    
      },
      {
        userName: 'kikobeats',
        name: 'Kiko Beats',
        isFollowing: false
      },
      {
        userName: 'Agusfer917',
        name: 'Agustina Fernandez',
        isFollowing: false
      }
    ]

function App() {

  return (
    <>
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
    </>   
  )
}

export default App
