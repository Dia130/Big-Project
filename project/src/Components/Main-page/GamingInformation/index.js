import Players from './Players'
import GameNews from './GameNews'
import styling from './index.css'


const players = [
    {img:  "👨",  flag: "🚩",  name: "Player 1", score: "9678", id:1},
    {img:  "👨",  flag: "🚩",  name: "Player 2", score: "9678", id:2},
    {img:  "👨",  flag: "🚩",  name: "Player 3", score: "9678", id:3},
    {img:  "👨",  flag: "🚩",  name: "Player 4", score: "9678", id:4},
    {img:  "👨",  flag: "🚩",  name: "Player 5", score: "9678", id:5},
    {img:  "👨",  flag: "🚩",  name: "Player 6", score: "9678", id:6},
    {img:  "👨",  flag: "🚩",  name: "Player 7", score: "9678", id:7},
    {img:  "👨",  flag: "🚩",  name: "Player 8", score: "9678", id:8},
    {img:  "👨",  flag: "🚩",  name: "Player 9", score: "9678", id:9},
    {img:  "👨",  flag: "🚩",  name: "Player 10", score: "9678", id:10},
    {img:  "👨",  flag: "🚩",  name: "Player 10", score: "9678", id:11},
    {img:  "👨",  flag: "🚩",  name: "Player 10", score: "9678", id:12},
    {img:  "👨",  flag: "🚩",  name: "Player 10", score: "9678", id:13},
    {img:  "👨",  flag: "🚩",  name: "Player 10", score: "9678", id:14},
    {img:  "👨",  flag: "🚩",  name: "Player 10", score: "9678", id:15},
    {img:  "👨",  flag: "🚩",  name: "Player 10", score: "9678", id:16},
    {img:  "👨",  flag: "🚩",  name: "Player 10", score: "9678", id:17}
]


function GamingInformation(props) {
    return (
        <div style={styling} className="gaming-information">
            <Players players={players} />
            <GameNews />
        </div>
    )
}

export default GamingInformation