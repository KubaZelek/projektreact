import {Link} from 'react-router-dom';
import React, { Component }  from 'react';
const Header = () => {
    return ( 
        <div className="header">
            <h1 className="h1header">
                Małżeńska lista obowiązków
            </h1>
            <div className="links">
        <Link to="/">Strona główna</Link>
        <Link to="/create" >Dodaj zadanie</Link>
      </div>
        </div>
     );
}
 
export default Header;