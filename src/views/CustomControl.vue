<template>
  <div>
    <Breadcrumbs name="Eigene Controls"></Breadcrumbs>
    <h1>Eigene Controls mit v-model-Unterstützung</h1>
    <p class="mt-4">
      Eigene Controls, die wie native HTML-Elemente in Vue mit v-model genutzt
      werden können, sind einfach zu realisieren. Sie müssen den aktuellen Wert
      per Property "value" entgegennehmen und bei Änderungen ein "input"-Event
      mit dem aktuellen Wert herausgeben.
    </p>
    <p>
      Das folgende Beispiel zeigt den einfachsten Fall. Es wird lediglich eine
      Input-Komponente gekapselt:
    </p>
    <pre v-highlightjs="example1"><code class="html"></code></pre>
    <pre
      v-highlightjs="example2"
      class="my-4"
    ><code class="javascript"></code></pre>

    <p>
      Die Komponente kann dann mit v-model verwendet werden:
    </p>
    <pre v-highlightjs="example3"><code class="html"></code></pre>

    <hr class="my-4" />
    <p>Greeting:</p>
    <custom-greeting v-model="greeting"></custom-greeting>
    <p class="mt-4">
      Aktueller Wert: <i>{{ greeting }}</i>
    </p>
  </div>
</template>

<script>
import CustomGreeting from "../components/custom-greeting";

export default {
  components: { CustomGreeting },
  data: () => ({
    greeting: "Hello",
    example1: `
    <input
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    />
    `,
    example2: `
    export default {
      props: ["value"]
    };
    `,
    example3: `
    <custom-greeting v-model="greeting"></custom-greeting>
    `
  })
};
</script>
