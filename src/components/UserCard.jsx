import './UserCard.css'

function Usercard({ nome, email, age }) {

    return (
        <div className='user-card'>

            <img className='user-card-avatar' src={`https://robohash.org/${nome}`} alt={nome} />

            <div className='user-cart-infor'>
                <p>Nome: <span className="destaque">{nome}</span></p>

                <p>Email: <span className="destaque">{email}</span></p>

                <p>Idade: <span className="destaque">{age}</span></p>

            </div>

        </div>
    )


}



export default Usercard