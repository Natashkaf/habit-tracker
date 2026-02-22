import React, {useEffect} from 'react';
import Modal from 'react-modal';
import './ModalLoginWindow.css'
function ModalLoginWindow({isOpen, isClose}) {
    const [activeTab, setActiveTab] = React.useState('login');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [emailDirty, setEmailDirty] = React.useState(false);
    const [passwordDirty, setPasswordDirty] = React.useState(false);
    const [emailError, setEmailError] = React.useState('Почта не может быть пустой');
    const [passwordError, setPasswordError] = React.useState('Пароль не может быть пустым');
    const [formValid, setFormValid] = React.useState(false);
    const [confirmPassword, setConfirmPassword] = React.useState('');

    const ValidPassword = () => {
        return(
            password === confirmPassword
        )
    }
    const confirmPasswordHandler = (e) => {
        setConfirmPassword(e.target.value);
    }

    useEffect(() => {
        if (emailError || passwordError || password !== confirmPassword) {
            setFormValid(false);
        }
        else{
            setFormValid(true);
        }

    }, [emailError, passwordError]);

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const standardEmailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!standardEmailRegex.test(String(e.target.value).toLowerCase())) {
            setEmailError('Некорректная почта')

        }
        else{
            setEmailError('')
        }
    }
    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 8) {
            setPasswordError('Пароль должен содержать минимум 8 символов ')
        }
        else {
            setPasswordError('')
        }
    }
    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break

        }
    }
    return(
        <Modal isOpen={isOpen} onRequestClose ={isClose} className="modal">
            <div className="tabButtonContainer modalHeader">
                <button className={activeTab ==='login' ? 'tabButton activeTabButton':'tabButton'} onClick={() => setActiveTab('login')}>Вход</button>
                <button className={activeTab ==='register' ? 'tabButton activeTabButton':'tabButton'} onClick={() => setActiveTab('register')}>Регистрация</button>

            </div>

            {activeTab === 'login' ? (
                <form method="Post"  onSubmit={()=>{}} >
                    <div className="modal-form">
                        <label>
                            Электронная почта:
                        </label>
                        {(emailDirty && emailError) && <div className='flash-message'>{emailError}</div>}
                        <input value={email} onChange={e => emailHandler(e)} onBlur={e => blurHandler(e)} name="email" type="text" placeholder="IvanovIvan@gmail.com" className="input"/>
                    </div>
                    <div className="modal-form">
                        <label>
                            Пароль:
                        </label>
                        {(passwordDirty && passwordError) && <div className='flash-message'>{passwordError}</div>}
                        <input value={password} onChange={e=>passwordHandler(e)} onBlur={e=>blurHandler(e)} name="password" type="password" className="input"/>

                        <button disabled={!formValid} type="submit" className="button-login">
                            Войти
                        </button>
                        <button className="button-login">
                            Войти с помощью Google
                        </button>
                    </div>
                </form>

            ):(
                <form method="Post"  onSubmit={()=>{}} >
                    <div className="modal-form">
                        <label>
                            Электронная почта:
                        </label>
                        {(emailDirty && emailError) && <div className='flash-message'>{emailError}</div>}
                        <input value={email} onChange={e => emailHandler(e)} onBlur={e => blurHandler(e)} name="emailRegister" type="text" placeholder="IvanovIvan@gmail.com" className="input"/>
                    </div>
                    <div className="modal-form">
                        <label>
                            Пароль:
                        </label>
                        {(passwordDirty && passwordError) && <div className='flash-message'>{passwordError}</div>}
                        <input value={password} onChange={e => passwordHandler(e)} onBlur={e => blurHandler(e)} name="passwordRegister" type="password" className="input"/>
                         <label>
                             Повторите пароль:
                         </label>
                        {confirmPassword && password !== confirmPassword &&
                            <div>Пароли не совпадают</div>}
                        <input name="confirm-password" type="password"  onChange={confirmPasswordHandler} className="input"/>

                        <button disabled={!formValid} type="submit" className="button-login">
                            Зарегистрироваться
                        </button>
                    </div>
                </form>

            ) }

             <button onClick={isClose} className="button-closed">
             </button>
        </Modal>

    )
}
export default ModalLoginWindow;