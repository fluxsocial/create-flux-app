import AllNeighbourhoods from "./components/AllNeighbourhoods";
import styles from "./App.module.css";

export default function App({ perspective, source }) {
  return (
    <div className={styles.appContainer}>
      <AllNeighbourhoods />
    </div>
  );
}
