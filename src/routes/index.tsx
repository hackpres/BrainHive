import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>

      <div role="presentation" class="ellipsis"></div>
      <div role="presentation" class="ellipsis ellipsis-purple"></div>

      <div class="container container-center container-spacing-xl">
        <h3>
          Welcome to <span class="highlight">BrainHive</span>
          <br />
        </h3>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to BrainHive",
  meta: [
    {
      name: "description",
      content: "Hive managment for Braintrust Creative",
    },
  ],
};
