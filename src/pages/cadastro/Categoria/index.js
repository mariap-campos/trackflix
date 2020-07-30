
import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import {styleForm} from './styles';

function CadastroCategoria(){
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '#000000',
    }
    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);
    


    function setValue(chave, valor){
        setValues({
            ...values,
            [chave]: valor,
        })
    }

    function handleChange(infosDoEvento) {;
        setValue(
            infosDoEvento.target.getAttribute('name'), 
            infosDoEvento.target.value
        );
    }

    return (
        <PageDefault>
            <h1>Cadastro de Categorias: {values.nome}</h1>

            <form onSubmit={function handleSubmit(infosDoEvento){
                infosDoEvento.preventDefault();
                setCategorias([
                    ...categorias,
                    values
                ]);
                setValues(valoresIniciais)
            }}>

                <FormField 
                placeholder="Categoria"
                label="Nome da Categoria "
                type = "text"
                name="nome"
                value = {values.name}
                onChange={handleChange}   
                />

                <FormField 
                placeholder="Descrição"
                label="Descrição "
                type = "textarea"
                name="descricao"
                value = {values.descricao}
                onChange={handleChange}   
                />

                {/* <div>
                    <label>
                        Descrição:
                        <textarea 
                        type="text"
                        name="descricao"
                        value={values.descricao}
                        onChange={handleChange}
                        />
                    </label>
                </div> */}
 
                <FormField 
                placeholder="Cor"
                label="Cor "
                type = "color"
                name="cor"
                value = {values.dcolor}
                onChange={handleChange}   
                />


                
                <button>
                    Cadastrar
                </button>
            </form>

            <ul>
                {categorias.map((categorias) => {
                    return(
                        <li key={categorias}>
                            {categorias.nome}
                        </li>                    
                    )
                })}
            </ul>

            <Link  to="/">
                Ir para home
            </Link>
        </PageDefault>
    )
}
export default CadastroCategoria;