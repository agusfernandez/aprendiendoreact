import {useState} from 'react'
import './css/twitterCard.css'


const TwitterCard = ({children, userName, initFollowing}) => {
    const [isFollowingState, setIsFollowingState] = useState(initFollowing)
    const followText = isFollowingState ? 'Siguiendo' : 'Seguir'
    const elementButton = isFollowingState ? 'tw-followCard-button is-following' : 'btn-tw-followCard-button'

    const handleClick = () => {
        setIsFollowingState(!isFollowingState)
    }

    return (
        <>
            <div className="twitter-card">
                <div className="twitter-card__header">
                    <img src={`https://unavatar.io/${userName}`} alt={`${userName}'s avatar`} className="twitter-card-img"/>

                     <div className="twitter-card__info">
                        <p>@{userName}</p>
                        <p>{children}</p>
                     </div>

                   
                </div>
                <aside>

                    <button className={elementButton} onClick={handleClick}>  
                       <span className='tw-followCard-text'>{followText}</span>
                       <span className='tw-followCard-stopFollow'>Dejar de Seguir</span>
                    </button>
                </aside>
               
            </div>
        </>
    )
}

export default TwitterCard;
