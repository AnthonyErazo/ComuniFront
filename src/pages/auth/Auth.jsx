import React, { useState } from 'react';
import './styles/Auth.css';

function Auth() {
    // Funciones para la visualizacion de login o registro
    const [isRegister, setIsRegister] = useState(true);
    const [hideElement, setHideElement] = useState(true);
    const handleSignInClick = () => {
        setIsRegister(false);
        // Retraso para dar tiempo a la animacion
        setTimeout(() => {
            setHideElement(false)
        }, 500);
    };

    const handleSignUpClick = () => {
        setIsRegister(true);
        // Retraso para dar tiempo a la animacion
        setTimeout(() => {
            setHideElement(true)
        }, 500);
    };

    // Login y registro
    return (
        <div className='auth-container'>
            <div className={`form-container register ${hideElement ? "" : "invisible"}`}>
                <div className="background-square"></div>
                <div className={`information ${isRegister ? "moveLeft" : ""}`}>
                    <div className={`info-childs ${isRegister ? "appear" : "disappear"}`}>
                        <h2>Bienvenido</h2>
                        <p>Para unirte a nuestra comunidad por favor Inicia Sesión con tus datos</p>
                        <input type="button" value="Iniciar Sesión" onClick={handleSignInClick} />
                    </div>
                </div>
                <div className="form-information">
                    <div className={`form-information-childs ${isRegister ? "appear" : "disappear"}`}>
                        <h2>Crear una Cuenta</h2>
                        <form className="form form-register" noValidate>
                            <div>
                                <label>
                                    <input type="text" placeholder="Nombre Usuario" name="userName" />
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input type="email" placeholder="Correo Electronico" name="userEmail" />
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input type="password" placeholder="Contraseña" name="userPassword" />
                                </label>
                            </div>

                            <input type="submit" value="Registrarse" />
                            <div className="alerta-error">Todos los campos son obligatorios</div>
                            <div className="alerta-exito">Te registraste correctamente</div>
                        </form>
                    </div>
                </div>
            </div>
            <div className={`form-container login ${hideElement ? "invisible" : ""}`}>
                <div className="background-square"></div>
                <div className={`information ${isRegister ? "" : "moveRight"}`}>
                    <div className={`info-childs ${isRegister ? "disappear" : "appear"}`}>
                        <h2>¡¡Bienvenido nuevamente!!</h2>
                        <p>Para unirte a nuestra comunidad por favor Inicia Sesión con tus datos</p>
                        <input type="button" value="Registrarse" onClick={handleSignUpClick} />
                    </div>
                </div>
                <div className="form-information">
                    <div className={`form-information-childs ${isRegister ? "disappear" : "appear"}`}>
                        <h2>Iniciar Sesión</h2>
                        <form className="form form-login" noValidate>
                            <div>
                                <label >
                                    <input type="email" placeholder="Correo Electronico" name="userPassword" />
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input type="password" placeholder="Contraseña" name="userPassword" />
                                </label>
                            </div>
                            <input type="submit" value="Iniciar Sesión" />
                            <div className="alerta-error">Todos los campos son obligatorios</div>
                            <div className="alerta-exito">Te registraste correctamente</div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Auth;
