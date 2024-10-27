import Colaborador from '../Colaborador';
import './Time.css';

//O nome desse tipo de componente é Dumb, pois ele é mais estático, só recebe o texto para ser exibido.

const Time = (props) => {
   return (
      (props.colaboradores.length > 0)
      &&
      <section className='time' style={{ backgroundColor: props.corSecundaria }}>
         <h3 style={{ color: props.corPrimaria, borderColor: props.corPrimaria }}>{props.nome}</h3>

         <div className='colaboradores'>
            {props.colaboradores.map(colaborador =>

               <Colaborador
                  nome={colaborador.nome}
                  cargo={colaborador.cargo}
                  imagem={colaborador.imagem}
               />

            )}
         </div>
      </section>
   )
   {/*
      Outra forma de fazer essa verificacao acima com operador ternario seria:
         (props.colaboradores.length > 0) ?

            <section className='time' style={{ backgroundColor: props.corSecundaria }}>
               <h3 style={{ color: props.corPrimaria, borderColor: props.corPrimaria }}>{props.nome}</h3>

               <div className='colaboradores'>
                  {props.colaboradores.map(colaborador =>

                     <Colaborador
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}
                     />

                  )}
               </div>
            </section>

         : ''

         Dessa forma, caso o tamanho da lista de colaboradores cadastrado for maior que 1, entao imprime a secao,
         se nao, entao sera vazio -> um desafio seria fazer um componente generico para ter um "placeholder"
   */}
}

export default Time;