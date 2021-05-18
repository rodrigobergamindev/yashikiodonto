import {CardItemPatient} from './styles'

export function CardPatient(props) {
    return (
        <CardItemPatient>
            <img src={props.url} alt="card"/>
            <div className="content">
                <p>{props.description}</p>
                <h4>{props.title}</h4>
            </div>
        </CardItemPatient>
    )
}
