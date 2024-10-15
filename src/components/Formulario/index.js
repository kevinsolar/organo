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
   
	return (
		<section className="formulario">
			<form>
            <h2>Preencha os dados para criar o card do colaborador</h2>
				{/* Passo como parametro uma label com o que desejo imprimir, nesse caso eh label="Nome", entao preciso declarar isso no meu componente agora. */}
				<CampoTexto label="Nome" placeholder="Digite seu nome" />
				<CampoTexto label="Cargo" placeholder="Digite seu cargo" />
				<CampoTexto label="Imagem" placeholder="Digite o endereco da imagem" />
            <ListaSuspensa label="Time" itens={times} />
			</form>
		</section>
	);
};

export default Formulario;
