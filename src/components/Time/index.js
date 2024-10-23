import Colaborador from '../Colaborador';
import './Time.css';

//O nome desse tipo de componente é Dumb, pois ele é mais estático, só recebe o texto para ser exibido.

const Time = (props) => {
   return (
      <section className='time' style={{ backgroundColor: props.corSecundaria }}>
         <h3 style={{ color: props.corPrimaria, borderColor: props.corPrimaria }}>{props.nome}</h3>
         <Colaborador />
      </section>
   )
}

export default Time;