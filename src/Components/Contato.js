import React from 'react'
import styles from './Contato.module.css'
import foto from '../img/contato.jpg'
import Head from './Head'

const Contato = () => {
  return (
    <section className={styles.contato + " animeLeft"}>
    <Head title="Ranek | Contato"  description="entre em contato"/>
      <img src={foto} alt='kasdk sad' />
      <div>
        <h1>Entre em Contato</h1>
        <ul className={styles.dados}>
          <li>asdasdas@asdasd.com</li>
          <li>asdnasjk asjkdjkasn aslkdj</li>
          <li>4865556654564s</li>
        </ul>
      </div>
    </section>
  )
}

export default Contato