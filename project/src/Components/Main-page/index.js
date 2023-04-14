import './main.css'
import CardsSection from './CardsSection';
import GamingInformation from './GamingInformation'

function MainPage() {
    return (
        <main className='main-page-section'>
            <header>
                <h1>
                    <span>BattleStar</span> Новости
                </h1>

                <section>
                    <CardsSection />
                </section>

                <section>
                    <GamingInformation />
                </section>

                
            </header>
        </main>
    );
}

export default MainPage;