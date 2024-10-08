import './CampoTexto.css'

//Uma forma de criar a funcao eh com function, ou dessa forma, nao tem um jeito certo, mas eh bom ter um padrao.
const CampoTexto = (props) => {/* Aqui pegamos o que esta sendo passado implicitamente com o props, para fazer a busca dos parametros que estamos passando para o nosso componente */

   return (
      <div className="campo-texto">
         <label>
            {props.label}  {/* Aqui faco a declaracao da minha label */}
         </label>
         <input placeholder={props.placeholder} />
      </div>
   )

}

export default CampoTexto