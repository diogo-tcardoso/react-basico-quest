const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae sed laboriosam necessitatibus nisi tempora repudiandae adipisci dicta nulla consequatur repellat!"
const upperText = text.toUpperCase();

const Paragraph = () => {
    return (
        <p style={{color: "darkblue"}}>{upperText}</p>
    );
}


export default Paragraph;