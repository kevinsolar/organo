import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
 return (
   <div className='lista-suspensa'>
      <label>{props.label}</label>
      <select>
         {props.itens.map(item => <option key={item}>{item}</option>)}
         {/* Esso eh a forma mais rapida de fazer a insercao de options dinamicas, mas, o mais legivel eh: */}

         {/* props.itens.map(item => {
            return <option>{item}</option>
         }) */}
      </select>
   </div>
 )
}

export default ListaSuspensa