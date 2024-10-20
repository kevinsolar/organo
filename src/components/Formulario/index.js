import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import { useState } from 'react';
//import CampoTexto from "./components/CampoTexto"; se usar index.js no componente criado, na importacao eu so preciso "puxar" pelo nome da pasta, pq por padrao ele sempre busca o index.js
import "./Formulario.css";

const Formulario = (props) => {

   const times = [
      'Programacao',
      'Front-End',
      'Data Science',
      'Devops',
      'UX e Design',
      'Mobile',
      'Inovacao e Gestao'
   ]

   const [nome, setNome] = useState('')
   const [cargo, setCargo] = useState('')
   const [imagem, setImagem] = useState('')
   const [time, setTime] = useState('')

   const aoSalvar = (evento) => {
      evento.preventDefault()
      // console.log('Foi enviado! => ', nome, cargo, imagem, time)
      /* Ao inves de fazer esser console.log aqui, vamos fazer com que agora passe essas informacoes coletadas e passe
      adiante, ou seja, para o App.js, que esta responsavel pela comunicacao entre formulario e algum lugar que ira
      guardar essa informacao para ser exibida. 
       -> entao usaremos o props, para dizer que queremos enviar isso para quem esta chamando.
      */
      props.aoColaboradorCadastrado({
         nome,
         cargo,
         imagem,
         time
      })
   }

   return (
      <section className="formulario">
         <form onSubmit={aoSalvar}>
            <h2>Preencha os dados para criar o card do colaborador</h2>
            {/* Passo como parametro uma label com o que desejo imprimir, nesse caso eh label="Nome", entao preciso declarar isso no meu componente agora. */}
            <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome"
               valor={nome}
               aoAlterado={valor => setNome(valor)}
               //Estamos passando o que foi digitado com setter para alterar o valor que recebemos do evento "valor"
            />
            <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo"
               valor={cargo}
               aoAlterado={valor => setCargo(valor)}
            />
            <CampoTexto obrigatorio={false} label="Imagem" placeholder="Digite o endereco da imagem" 
               valor={imagem}
               aoAlterado={valor => setImagem(valor)}
            />
            <ListaSuspensa obrigatorio={true} label="Time" itens={times} 
               valor={time}
               aoAlterado={valor => setTime(valor)}
            />

            {/* <Botao texto="criar card" /> //Esse seria o jeito certo de fazer, mas vamos fazer como se fosse um html para demonstrar varias maneiras de fazer! */}
            <Botao>
               criar card
            </Botao>
         </form>
      </section>
   );
};

export default Formulario;
