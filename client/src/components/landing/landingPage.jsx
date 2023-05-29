import { NavLink } from 'react-router-dom';
import styles from './landing.module.css'


function LandingPage() {
  return (
    <div className={styles['bg-landing']}>
      <div className={styles['bg-black']}>
        <h1> Bienvenido a mi APP FOOD </h1>
        <h3>Todas tus recetas favoritas a un click</h3>
        <NavLink to='/home'>
          <button className={styles['btn-yellow']}>Home</button>
        </NavLink>
      </div>
    </div>
  );
}

export default LandingPage;