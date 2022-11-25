import React from 'react';

class PiePagina extends React.Component {
    render() {
        return (
            <footer>
                <h4>Datos de Contacto</h4>
                <p>Email: {this.props.email}</p>
                <p>Dirección: {this.props.direccion}. {this.props.ciudad}</p>
            </footer>  
        );
    }
}

export default PiePagina;