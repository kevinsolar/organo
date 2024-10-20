import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
//import CampoTexto from "./components/CampoTexto"; se usar index.js no componente criado, na importacao eu so preciso "puxar" pelo nome da pasta, pq por padrao ele sempre busca o index.js
import "./Formulario.css";

const Formulario = () => {

   const times = [
      'Programacao',
      'Front-End',
      'Data Science',
      'Devops',
      'UX e Design',
      'Mobile',
      'Inovacao e Gestao'
   ]

   const aoSalvar = (evento) => {
      evento.preventDefault()
      alert('Foi enviado!')
   }
   
	return (
		<section className="formulario">
			<form onSubmit={aoSalvar}>
            <h2>Preencha os dados para criar o card do colaborador</h2>
				{/* Passo como parametro uma label com o que desejo imprimir, nesse caso eh label="Nome", entao preciso declarar isso no meu componente agora. */}
				<CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
				<CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" />
				<CampoTexto obrigatorio={false} label="Imagem" placeholder="Digite o endereco da imagem" />
            <ListaSuspensa obrigatorio={true} label="Time" itens={times} />
            
            {/* <Botao texto="criar card" /> //Esse seria o jeito certo de fazer, mas vamos fazer como se fosse um html para demonstrar varias maneiras de fazer! */}
            <Botao>
               criar card
            </Botao>
			</form>
		</section>
	);
};

export default Formulario;
