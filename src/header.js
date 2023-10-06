import {Link} from 'react-router-dom';
import React, { Component }  from 'react';
const Header = () => {
    return ( 
        <div className="header">
            <h1 className="h1header">
                Małżeńska lista obowiązków
            </h1>
            <div className="links">
        <Link className="link" to="/"><p className='linkp'>Strona główna</p></Link>
        <Link className="link" to="/create" ><p className='linkp'>Dodaj zadanie</p></Link>
      </div>
        </div>
     );
}
 
export default Header;


