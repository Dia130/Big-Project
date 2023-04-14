import EyeOpen from '../../../assets/icons/Eye-open.png';
import card2 from '../../../assets/main-page-imgs/card2.png';
import "./card.css"

function Card(props) {
    return (
        <div className="card">
            <img className='card-image' src={props.img} alt="card-img" />
            <h4>{props.title}</h4>
            <p>{props.subtitle}</p>
            <div className="card-bottom">
                <div className="card-bottom-left">
                    <img src={card2} />
                    <p>{props.owner}</p>
                    <p>{props.date}</p>
                </div>
                <div className="card-bottom-right">
                    <img src={EyeOpen} />
                    <p>{props.views}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;