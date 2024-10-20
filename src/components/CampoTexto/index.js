import { useState } from 'react';
import './CampoTexto.css'

//Uma forma de criar a funcao eh com function, ou dessa forma, nao tem um jeito certo, mas eh bom ter um padrao.
const CampoTexto = (props) => {/* Aqui pegamos o que esta sendo passado implicitamente com o props, para fazer a busca dos parametros que estamos passando para o nosso componente */

   // let valor = ''

   const [valor, setValor] = useState('Teste')

   const aoDigitar = (evento) => {
      //valor = evento.target.value; -> Essa era a forma que estavamos usando antes, mas, a forma correta eh usando o State do React, entao ficara assim:
      setValor(evento.target.value)
      console.log(valor)
   }

   return (
      <div className="campo-texto">
         <label>
            {props.label}  {/* Aqui faco a declaracao da minha label */}
         </label>
         <input onChange={aoDigitar} required={props.obrigatorio} placeholder={props.placeholder} />
      </div>
   )

}

export default CampoTexto