import ReactHtmlParser from 'react-html-parser';

function Card(props) {

    const { id, name, image, summary, healthScore } = props

    return (
        <div key={id}>
            <h2>{name}</h2>
            <p> health Score: {healthScore}</p>
            <img src={image} alt={name} />
            <p>{ReactHtmlParser(summary)}</p>
        </div>);
}

export default Card;