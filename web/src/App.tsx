import styles from './App.module.scss';
import { LoginBox } from './components/LoginBox';
import { MensageList } from './components/MensageList';

export function App() {
  return (
   <main className={styles.contentWrapper}>
        <MensageList />
        <LoginBox />
   </main>
  )
}

