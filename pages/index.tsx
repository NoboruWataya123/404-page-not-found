import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { withLayout } from "../Layout/Layout";
import styles from "../styles/home.module.css";
import Image from "next/image";
import Button from "../components/Button/Button";


function Home() {
  return (
   <>
    <Header>404 Not found</Header>
    <main className={styles.main}>
      <Image
      className={styles.img} 
      src="/Scarecrow.png"
      alt="404"
      width={500}
      height={400}
      />
      <div className={styles.flexbox}>
        <h1 className={styles.herotext}>
        I have bad news for you
        </h1>
        <p className={styles.paragraph}>The page you are looking for might be removed or is temporarily unavailable</p>
        <Button>Back to homepage</Button>
      </div>
    </main>
    
    <Footer>Created by DDk&nbsp;<a href="devChallenges.io">devChallenges.io</a></Footer>
   </>
  )
}

export default withLayout(Home);