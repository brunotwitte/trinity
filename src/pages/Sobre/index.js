import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Sobre extends Component{
     render(){
        return(
            <div>
                <h2>Sobre Fast Delivery no mercado a mais de 20 anos ....</h2><br/>
                <Link to="/" >Ir para Menu Principal</Link>  
            </div>         
        );
    }
}

export default Sobre;