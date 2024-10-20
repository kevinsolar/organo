import './CampoTexto.css'

//Uma forma de criar a funcao eh com function, ou dessa forma, nao tem um jeito certo, mas eh bom ter um padrao.
const CampoTexto = (props) => {
   /* Aqui pegamos o que esta sendo passado implicitamente com o props, para fazer a busca dos parametros que estamos passando para o nosso componente */

   const aoDigitar = (evento) => {
      props.aoAlterado(evento.target.value)
   }

   return (
      <div className="campo-texto">
         <label>
            {props.label}  {/* Aqui faco a declaracao da minha label */}
         </label>
         <input value={props.valor} onChange={aoDigitar} required={props.obrigatorio} placeholder={props.placeholder} />
      </div>
   )

}

export default CampoTexto