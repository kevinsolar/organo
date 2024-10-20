import { useState } from "react";
import Banner from "./components/Banner";
import Formulario from "./components/Formulario";
import Time from "./components/Time";

function App() {

   const [colaboradores, setColaboradores] = useState( [] )

   const aoNovoColaboradorAdicionado = (colaborador) => {
      console.log(colaborador)
      //No meu setColaboradores, vou criar uma nova array, vou espalhar todos os colaboradores antigos e adicionar o novo no final
      setColaboradores([...colaboradores, colaborador])
   }

	return (
		<div className="App">
         <Banner />
         <Formulario aoColaboradorCadastrado={ colaborador => aoNovoColaboradorAdicionado(colaborador) } />
         {/* Vamos com nosso formulario ouvir um pedido de cadastro para criar um card com
            nossos colaboradores. */}
         
         <Time nome="Programação" />
         <Time nome="Front-End" />
         <Time nome="Data Science" />
         <Time nome="Devops" />
		</div>
	);
}

export default App;
