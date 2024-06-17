import { component$ } from "@builder.io/qwik";
import BTCfavicon from "../icons/BTC Favicon.png"
import styles from "./header.module.css";

export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={["container", styles.wrapper]}>
        <div class={styles.logo}>
          <a href="/" title="BTC_Hive">
            <img src={BTCfavicon} width="100" height="100"/>
          </a>
        </div>
        <ul>
          <li>
            <a
              // href="https://qwik.dev/docs/components/overview/"
              target="_blank"
            >
              New Project
            </a>
          </li>
          <li>
            <a
              // href="https://qwik.dev/examples/introduction/hello-world/"
              target="_blank"
            >
              New Action
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
});
