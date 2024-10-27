import { useState } from "react";
import Banner from "./components/Banner";
import Formulario from "./components/Formulario";
import Time from "./components/Time";
import Footer from "./components/Footer";

function App() {

   const times = [
      {
         nome: 'Programacao',
         corPrimaria: '#57C278',
         corSecundaria: '#D9F7E9',
      },
      {
         nome: 'Front-End',
         corPrimaria: '#82CFFA',
         corSecundaria: '#E8F8FF',
      },
      {
         nome: 'Data Science',
         corPrimaria: '#A6D157',
         corSecundaria: '#F0F8E2',
      },
      {
         nome: 'Devops',
         corPrimaria: '#E06B69',
         corSecundaria: '#FDE7E8',
      },
      {
         nome: 'UX e Design',
         corPrimaria: '#DB6EBF',
         corSecundaria: '#FAE9F5',
      },
      {
         nome: 'Mobile',
         corPrimaria: '#FFBA05',
         corSecundaria: '#FFF5D9',
      },
      {
         nome: 'Inovacao e Gestao',
         corPrimaria: '#FF8A29',
         corSecundaria: '#FFEEDF',
      },
   ]

   const [colaboradores, setColaboradores] = useState([])

   const aoNovoColaboradorAdicionado = (colaborador) => {
      //No meu setColaboradores, vou criar uma nova array, vou espalhar todos os colaboradores antigos e adicionar o novo no final
      setColaboradores([...colaboradores, colaborador])
   }

   return (
      <div className="App">
         <Banner />
         <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
         {/* Vamos com nosso formulario ouvir um pedido de cadastro para criar um card com
            nossos colaboradores. */}

         {/* Componente que apresenta a seção de cada time */}
         {times.map
            (time =>
               <Time
                  key={time.nome}
                  nome={time.nome}
                  corPrimaria={time.corPrimaria}
                  corSecundaria={time.corSecundaria}
                  colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
               />
            )
         }

         <Footer alt="100% atualizado"/>

      </div>
   );
}

export default App;
