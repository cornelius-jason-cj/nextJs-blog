import Image from 'next/image';
import classes from './hero.module.css';

function Hero () {
  return(
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src='/images/site/Pas-Foto-Jason.jpg' alt ='An Image showing Cornelius Jason' width={300} height={300}></Image>
      </div>
      <h1>Cornelius Jason</h1>
      <p>
        I blog about web development - especially frontend framworks like React ( NextJs )
      </p>
    </section>
  )
}

export default Hero;