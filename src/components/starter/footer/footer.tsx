import { component$ } from "@builder.io/qwik";
import { useServerTimeLoader } from "../../../routes/layout";
import styles from "./footer.module.css";

export default component$(() => {
  const serverTime = useServerTimeLoader();

  return (
    <footer>
      <div class="container">
        <a href="https://github.com/hackpres" target="_blank" class={styles.anchor}>
          <span>Built by hackpres</span>
          <span class={styles.spacer}>|</span>
          <span>{new Date().toLocaleString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
            hour: "numeric",
            minute: "2-digit"
          })}</span>
        </a>
      </div>
    </footer>
  );
});
