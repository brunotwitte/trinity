import React, { Component } from 'react';


const romaneios = ['1452','2578','54878','324578' ];


class Romaneios  extends Component{
     render(){
        return(
            <div>
           Numero Romaneio <br/>
             <form onSubmit={this.handleSubmit}>
          <label>
            <select ref={(input) => this.category = input}>
              {romaneios.map((category, index) =>
                <option key={category} value={category}>{category}</option>
              )}
            </select>
            </label>
            </form>
              <hr/>
            </div>         
        );
    }
}

export default Romaneios;