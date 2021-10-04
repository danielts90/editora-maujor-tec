import React from 'react';

const Livro = ({ livro }) => {
    return ( 
        <main className='principal'>
            <div className='pag-livro'>
                <h2>{livro.titulo}</h2>
                <div className='livro'>
                    <img src={`../imagens/capas/${livro.id}.jpg`}
                         alt={livro.titulo} />
                    <ul>
                        <li>ISBN: {livro.id}</li>
                        <li>Ano: {livro.ano}</li>
                        <li>Paginas: {livro.paginas}</li>
                        <li>Preço: R${livro.preco},00</li>
                        <hr />
                        <h3>Descrição do Livro</h3>
                        <p>{livro.descricao}</p>
                    </ul>
                </div>
            </div>
        </main>
     );
}
 
export default Livro;