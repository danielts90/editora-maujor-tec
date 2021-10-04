import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return ( 
        <main className='principal'>
            <h2>Erro 404!</h2>
            <p>
                Página não encontrada ou conteúdo removido. 
                <Link to='/'>Ir para o Início</Link>
            </p>
        </main>
     );
}
 
export default NotFound;