import './Header.css'
function Header(){
return(
    <div className="header-container">
        <div> <h1 className="name-site">DayMark</h1></div>
    <div>
        <button className="button">
            Вход/регистрация
        </button>
        <button className="button">
            Новая привычка
        </button>
        <button className="button">
            Календарь
        </button>
        <button className="button">
            Все привычки
        </button>
    </div>
    </div>
)
}
export default Header;