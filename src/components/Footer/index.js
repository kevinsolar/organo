import './Footer.css'

const Footer = (props) => {
   return (<footer className="footer">
      <section>
         <ul>
            <li>
               <a href="facebook.com" target="_blank">
                  <img src="../images/fb.png" alt={props.alt} />
               </a>
            </li>
            <li>
               <a href="twitter.com" target="_blank">
                  <img src="../images/tw.png" alt={props.alt} />
               </a>
            </li>
            <li>
               <a href="instagram.com" target="_blank">
                  <img src="../images/ig.png" alt={props.alt} />
               </a>
            </li>
         </ul>
      </section>
      <section>
         <img src="../images/logo.png" alt={props.alt} />
      </section>
      <section>
         <p>
            Desenvolvido por Kevin com Alura.
         </p>
      </section>
   </footer>)
}

export default Footer