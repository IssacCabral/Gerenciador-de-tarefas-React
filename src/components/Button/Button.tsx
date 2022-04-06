import './button.css'


const Button = ({children, onClick}: any) => {
    return (
        <div>
            <button className='add-button' onClick={onClick}>
                {children}
            </button>
        </div>
    )
}

export default Button