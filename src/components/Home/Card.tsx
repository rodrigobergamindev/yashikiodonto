import {CardItem} from './styles'

export function Card(props) {
    return (
        <CardItem>
            <img src={props.url} alt="card"/>
            <div className="content">
                <h4>{props.title}</h4>
                <p>{props.description}</p>
            </div>
        </CardItem>
    )
}
