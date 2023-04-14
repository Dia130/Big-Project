import Eye from "../../assets/icons/Eye.png";
import { useState } from "react";

function Login(props) {
    let [showPassword, setShowPassword] = useState(false);

    return (
        <div>
            <div class="form-group">
                <div>
                    <input type="text" id="name-input"  placeholder="Никнейм или электронная почта" />
                </div>
                <div>
                    <input type={showPassword ? "text" : "password"} id="pass-input"  placeholder="Пароль" />
                    <img src={Eye} onClick={() => { setShowPassword(!showPassword) }}/>
                </div>
                <p className='помошник'>
                    <span>Забыли пароль?</span>
                    <a className='восстановить' href='#'>Восстановить</a>
                </p>
                <button className='войти'>Войти</button>
            </div>
        </div>
    );
}

export default Login;