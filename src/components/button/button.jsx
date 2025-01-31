const textButton = 'Aqui é Quester!';
const alertText = () => {
    alert('A label desse botão é: ' + textButton);
}

const Button = () => {
    return (
        <div>
            <button onClick={alertText}>{textButton}</button>
        </div>
    )
};

export default Button;