function Players(props) {
    const playersToShow = props.players.map(player => {
        return (
            <li key={player.id} >
                <div className="player-info">
                    <div className="player-left-side">
                        <img className="player-image" src={player.img} />
                        <img className="player-flag" src={player.flag} />
                        <span className="player-name">{player.name}</span>
                    </div>

                    <div className="player-right-side">
                        <span className="player-score">{player.score}</span>
                    </div>
                </div>
            </li>
        )
    })

    return (
        <div className="top-players-section">
            <h5>Топ игроков месяца</h5>
            <ol>
                {playersToShow}
            </ol>
        </div>
    )
}


export default Players;