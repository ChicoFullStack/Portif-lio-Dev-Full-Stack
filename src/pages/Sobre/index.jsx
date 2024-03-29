import styles from "./Sobre.module.css";
import avatar from "./images/avatar.avif";

function Sobre() {
  return (
    <section className={styles.sobre}>
      <div className={styles.bio}>
        <img src={avatar} alt="Avatar" className={styles.avatar} />
        <div>
          <h2>Sobre</h2>
        </div>
      </div>
      <div className={styles.techs}>
        <h3>Techs</h3>
        images
      </div>
    </section>
  );
}

export default Sobre;
