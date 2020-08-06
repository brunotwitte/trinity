import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component{
     render(){
        return(
            <div>
               <h2>Bem-vindo a pagina Home  da Aplicacao....</h2> <br/>
               <Link to="/sobre" >Sobre fast Delivery</Link>  
            </div>         
        );
    }
}

export default Home;