// components
import Footer from "./components/Footer";
import Header from "./components/Header";

// CSS
import styles from './App.module.css';

function App() {
  return (
    <div>
      <Header/>
      <main className={styles.main}>
        <h1>Contents...</h1>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
