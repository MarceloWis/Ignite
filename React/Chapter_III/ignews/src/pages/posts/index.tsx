import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="">
            <time>12 de março de 2021</time>
            <strong>Terminal com Oh My Zsh, Spaceship, Dracula e mais</strong>
            <p>Durante toda história da Rocketseat existem duas perguntas que as pessoas mais me fazem, o tema do meu VSCode (que é o Dracula) e as configurações do meu terminal de desenvolvimento.</p>
          </a>

          <a href="">
            <time>12 de março de 2021</time>
            <strong>Terminal com Oh My Zsh, Spaceship, Dracula e mais</strong>
            <p>Durante toda história da Rocketseat existem duas perguntas que as pessoas mais me fazem, o tema do meu VSCode (que é o Dracula) e as configurações do meu terminal de desenvolvimento.</p>
          </a>

          <a href="">
            <time>12 de março de 2021</time>
            <strong>Terminal com Oh My Zsh, Spaceship, Dracula e mais</strong>
            <p>Durante toda história da Rocketseat existem duas perguntas que as pessoas mais me fazem, o tema do meu VSCode (que é o Dracula) e as configurações do meu terminal de desenvolvimento.</p>
          </a>

          <a href="">
            <time>12 de março de 2021</time>
            <strong>Terminal com Oh My Zsh, Spaceship, Dracula e mais</strong>
            <p>Durante toda história da Rocketseat existem duas perguntas que as pessoas mais me fazem, o tema do meu VSCode (que é o Dracula) e as configurações do meu terminal de desenvolvimento.</p>
          </a>
        </div>
      </main>
    </>
  )
}
