import Banner from "./components/Banner";
import CampoTexto from "./components/CampoTexto";//se usar index.js no componente criado, na importacao eu so preciso "puxar" pelo nome da pasta, pq por padrao ele sempre busca o index.js

function App() {
	return (
		<div className="App">
         <Banner />
         <CampoTexto label="Nome" placeholder="Digite seu nome" />{/* Passo como parametro uma label com o que desejo imprimir, nesse caso eh label="Nome", entao preciso declarar isso no meu componente agora. */}
         <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
         <CampoTexto label="Imagem" placeholder="Digite o endereco da imagem" />
		</div>
	);
}

export default App;
