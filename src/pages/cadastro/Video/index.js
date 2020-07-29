
import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroVideo(){
    return (
        <PageDefault>
            <h1>Cadastro de videos</h1>

            <Link  to="/cadastro/video">
                Cadastrar Categoria
            </Link>
        </PageDefault>
    )
}

export default CadastroVideo;