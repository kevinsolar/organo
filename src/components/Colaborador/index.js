import './Colaborador.css'

const Colaborador = (props) => {
   return (
      <div className='colaborador'>
         <div className='cabecalho'>
            <img src='https://github.com/kevinsolar.png' alt={props.nome} />
         </div>
         <div className='rodape'>
            <h4>Teste</h4>
            <h5>Teste</h5>
         </div>
      </div>
   )
}

export default Colaborador