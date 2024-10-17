import './Botao.css'

const Botao = (props) => {
   return (
      <button className='botao'>
         {props.children} {/* Ao inves de usar o props.texto posso usar uma propriedade padrao do react qu eé o children e colocar dentro da tag JSX como se fosse um html mesmo. */}
      </button>
   )
}

export default Botao;