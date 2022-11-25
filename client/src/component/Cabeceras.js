import React from 'react';

class Cabeceras extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.titulo1}</h1>
                <h2>{this.props.titulo2}</h2>
                <h3>{this.props.titulo3}</h3>
            </div>  
        );
    }
}

export default Cabeceras;