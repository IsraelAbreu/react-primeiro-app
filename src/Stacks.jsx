//Desafio de código
function Stacks(props) {
    return (
        <div style={{fontFamily: 'Fira code', marginTop: '15px', marginBottom: '15px'}}>
            <h3>{props.tipoTecnologia}</h3>
            <ul>
                <li>{props.linguagem}</li>
                <li>{props.framework}</li>
                <li>{props.database}</li>
            </ul>
        </div>
    );
}

export default Stacks;