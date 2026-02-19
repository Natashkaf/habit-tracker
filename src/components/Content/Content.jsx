import './Content.css'
function Content({openModal}) {
    return(
        <div className='content-container'>
            <h1 className='text-content'> У вас еще нет активных привычек</h1>
            <button className='button-content' onClick={openModal}>
                Войдите или зарегистрируйтесь
            </button>
            <h1 className='text-content'> И начните делать каждый свой день лучше</h1>



        </div>
    )
}
export default Content