import Login from './Login';
import Register from './Register';
import { useState } from 'react';
import star from '../../assets/authentication/star.png';
import styles from './styles/index.css'
import Apple from '../../assets/icons/Apple.png';
import Google from '../../assets/icons/Google.png';
import Facebook from '../../assets/icons/Facebook.png';
import Steam from '../../assets/icons/Steam.png';

function Authentication(props) {
    let [registered, setRegistered] = useState(true);

    let registerBB = { "box-shadow": "inset calc(((677px / 100) * 70) / 2) 0 #FAC704" }
    let loginBB = { "box-shadow": "inset calc(((-677px / 100) * 70) / 2) 0 #FAC704" }

    return (
        <section id='authentication-section' style={styles}>
            <div>
                <img src={star} className='main-logo' />

                <div className='action-btns'>
                    <button onClick={() => { setRegistered(true) }}>ВОЙТИ</button>
                    <button onClick={() => { setRegistered(false) }}>СОЗДАТЬ АККАУНТ</button>
                    <span className='border-bottom' style={registered ? registerBB : loginBB}></span>
                </div>

                <div className={registered ? 'visible' : 'invisible'}>
                    <Login></Login>
                </div>
                <div className={registered ? 'invisible' : 'visible'}>
                    <Register></Register>
                </div>

                <div className='globals'>
                    <div>
                        <p></p>
                        <p>Или войдите через</p>
                        <p></p>
                    </div>
                    <div>
                        <span className='steam'>
                            <img src={Steam} />
                        </span>
                        <span className='apple'>
                            <img src={Apple} />
                        </span>
                        <span className='google'>
                            <img src={Google} />
                        </span>
                        <span className='facebook'>
                            <img src={Facebook} />
                        </span>
                    </div>
                </div>


                <footer>
                    Создавая аккаунт в "Alisher Company", вы соглашаетесь с нашими 
                    <a href='#'>Условиями использования</a> и <a href='#'>Политикой конфиденциальности</a>
                </footer>
            </div>
        </section>
    );
}

export default Authentication;