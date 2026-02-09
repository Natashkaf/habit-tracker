import './Header.css'
function Header(){
return(
    <div className="header-container">
        <button className="button">
            Вход/регистрация
        </button>
        <button className="button">
            Новая привычка
        </button>
        <button className="button">
            Календарь
        </button>
    </div>
)
}
export default Header;