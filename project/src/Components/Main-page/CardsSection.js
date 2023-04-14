import Card from "./Card/index.js"
import Grid1 from "../../assets/main-page-imgs/grid1.png"
import Grid2 from "../../assets/main-page-imgs/grid2.png"
import Grid3 from "../../assets/main-page-imgs/grid3.png"
import Grid4 from "../../assets/main-page-imgs/grid4.png"
import Grid5 from "../../assets/main-page-imgs/grid5.png"
import Grid6 from "../../assets/main-page-imgs/grid6.png"
import GoToWallet from "./Card/GoToWallet.js"
function CardsSection(props) {
    return (
        <div>
            <div className="cards">
            <Card 
                title="Главные турниры октября"
                subtitle="Все самые важные турниры в этом месяце. Не пропустите!"
                owner="Максим Рихтер"
                date="19 Окт, 2020"
                views="123"
                img={Grid1}
            />
            <Card 
                title="Что нового в обновлении КС?"
                subtitle="FURIA представила помощника тренера. Отныне tacitus..."
                owner="Кирилл Рихтер"
                date="21 Окт, 2020"
                views="323"
                img={Grid2}
            />
            <Card 
                title="Новости BattleStar 2.0"
                subtitle="FURIA представила помощника тренера. Отныне tacitus..."
                owner="Максим Рихтер"
                date="21 Мар, 2021"
                views="432"
                img={Grid3}
            />
            <Card 
                title="Как пройти калибровку на BattleStar"
                subtitle="FURIA представила помощника тренера. Отныне tacitus..."
                owner="Максим Рихтер"
                date="8 Авг, 2020"
                views="642"
                img={Grid4}
            />
            <Card 
                title="Новости BattleStar 2.0"
                subtitle="FURIA представила помощника тренера. Отныне tacitus..."
                owner="Максим Рихтер"
                date="17 Мая, 2021"
                views="690"
                img={Grid5}
            />
            <Card 
                title="Главные матчи недели"
                subtitle="FURIA представила помощника тренера. Отныне tacitus..."
                owner="Максим Рихтер"
                date="20 Мар, 2021"
                views="532"
                img={Grid6}
            /> 
                      
        </div>
        <div>
            <GoToWallet/>

        </div> 
        </div>
        

    )
}

export default CardsSection;