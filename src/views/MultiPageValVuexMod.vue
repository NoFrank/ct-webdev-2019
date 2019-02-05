<template>
  <div>
    <Breadcrumbs name="Validierung per Vuex-Modul"></Breadcrumbs>
    <h1>Validierung per Vuex-Modul</h1>
    <p class="mt-4">
      In diesem Beispiel geht es darum, die Validierun komplett auszulagern. Sie
      kann dann unabhängig von den Eingabekomponenten laufen und aus allen
      Teilen der App verwendet werden.
    </p>
    <p>
      Das Vuex-Modul enthält eine eigenständige Vue-Instanz in der Vuelidate für
      die eigentliche Validierung verwendet wird. Diese nutzt direkt den Store
      für den Zugriff auf die Werte und legt das Validierungsergebnis in den
      Store.
    </p>
    <p>
      In einer lokalen Komponente kann der Validierungszustand ausgelesen werden
      und wie $v verwendet werden:
    </p>
    <pre v-highlightjs="example1"><code class="javascript"></code></pre>

    <p class="mt-4">
      Um Werte als verändert (dirty) zu kennzeichnen, wird eine Action
      ausgelöst:
    </p>
    <pre v-highlightjs="example2"><code class="html"></code></pre>
    <pre
      v-highlightjs="example3"
      class="my-4"
    ><code class="javascript"></code></pre>

    <v-text-field
      label="Greeting"
      v-model="greeting"
      :error-messages="greetingErrors()"
      @input="touchValue('greeting')"
      @blur="touchValue('greeting')"
      required
    ></v-text-field>
    <p class="mt-2">
      <vue-json-pretty :data="vState"></vue-json-pretty>
    </p>
  </div>
</template>

<script>
import VueJsonPretty from "vue-json-pretty";

export default {
  components: {
    VueJsonPretty
  },
  data: () => ({
    example1: `
    computed: {
      vState() {
        return this.$store.getters["validations/vState"];
      }
    },
    `,
    example2: `
    <v-text-field
      label="Greeting"
      v-model="greeting"
      :error-messages="greetingErrors()"
      @input="touchValue('greeting')"
      @blur="touchValue('greeting')"
      required
    ></v-text-field>
    `,
    example3: `
    touchValue(path) {
      this.$store.dispatch("validations/touchValue", path);
    }
    `
  }),

  computed: {
    vState() {
      return this.$store.getters["validations/vState"];
    },
    greeting: {
      get() {
        return this.$store.state.greeting;
      },
      set(value) {
        this.$store.commit("updateGreeting", value);
      }
    }
  },
  methods: {
    greetingErrors() {
      const errors = [];
      if (!this.vState.greeting.$dirty) return errors;
      if (!this.vState.greeting.required) errors.push("Greeting is required.");
      if (!this.vState.greeting.minLength)
        errors.push("Minimum length is 20 characters.");
      return errors;
    },
    touchValue(path) {
      this.$store.dispatch("validations/touchValue", path);
    }
  }
};
</script>
