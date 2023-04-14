import "./Wallet.css"
import star from "./New Logo 6 (1).png"
function GoToWallet(){
    return(
        
        <div className={"main"}>
            <div className={"first"}>
                <img src={star}/>
            </div>
            <div className={"second"}>
                <p className={"par"}><b> Акции и бонусы</b></p>
                <h2>Пополни баланс  сегодня и полчи +200 BS в качестве бонуса</h2>
                <button>Перейти в кошелёк</button>
            </div>
        </div>
    )
}
export default GoToWallet;
