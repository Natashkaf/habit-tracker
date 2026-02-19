import React from 'react';
import Modal from 'react-modal';
import './ModalLoginWindow.css'
function ModalLoginWindow({isOpen, isClose}) {
    return(
        <Modal isOpen={isOpen} onRequestClose ={isClose} className="modal">
            <h1 className="modalHeader"> Вход/Регистрация </h1>

            <form method="Post" onSubmit={()=>{}} >
                <div className="modal-form">
                <label>
                       Электронная почта:
                </label>
                <input name="email" type="text" placeholder="IvanovIvan@gmail.com" className="input"/>
                </div>
                <div className="modal-form">
                <label>
                    Пароль:
                </label>
                    <input name="password" type="password" className="input"/>

                <button type="submit" className="button-login">
                    Войти
                </button>
                <button className="button-login">
                    Войти с помощью Google
                </button>
                <p>Впервые здесь? Зарегистрироваться</p>
                </div>
            </form>
             <button onClick={isClose} className="button-closed">
             </button>
        </Modal>

    )
}
export default ModalLoginWindow;