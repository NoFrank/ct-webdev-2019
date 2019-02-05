<template>
  <div>
    <Breadcrumbs name="Vuex"></Breadcrumbs>
    <h1>Vuex</h1>
    <p class="mt-4">
      Two-Way-Data-Binding mit Vuex - Option 1: Value binden und Update über
      eigene Methode:
    </p>

    <p>
      <input :value="greeting1" @input="updateGreeting" />
    </p>
    <pre v-highlightjs="example1a"><code class="html"></code></pre>
    <pre
      v-highlightjs="example1b"
      class="my-4"
    ><code class="javascript"></code></pre>

    <hr class="my-4" />

    <p class="mt-4">
      Two-Way-Data-Binding mit Vuex - Option 2: Value binden und Update über
      eigene Methode:
    </p>
    <p>
      <input v-model="greeting2" />
    </p>
    <pre v-highlightjs="example2a"><code class="html"></code></pre>
    <pre
      v-highlightjs="example2b"
      class="my-4"
    ><code class="javascript"></code></pre>

    <hr class="my-4" />

    <p class="mt-4">
      Two-Way-Data-Binding mit Vuex - Option 3: Einsatz von
      <a href="https://davestewart.github.io/vuex-pathify/#/">Vuex pathify</a>:
    </p>
    <p>
      <input v-model="greeting3" />
    </p>
    <pre v-highlightjs="example3a"><code class="html"></code></pre>
    <pre
      v-highlightjs="example3b"
      class="my-4"
    ><code class="javascript"></code></pre>

    <hr class="my-4" />

    <p class="mt-4">
      Option 4: lokale Werte. Die benötigten Werte werden beim Start der
      Komponente als Kopie aus dem Store übernommen. Während der Eingabe sind
      die Änderungen nur lokal vorhanden. Erst zu einem späteren Zeitpunkt
      (Speichern, Komponente verlassen..) werden die Daten in den Store
      übertragen.
    </p>
    <p>
      <input v-model="localGreeting" />
    </p>

    <pre v-highlightjs="example4a"><code class="html"></code></pre>
    <pre
      v-highlightjs="example4b"
      class="my-4"
    ><code class="javascript"></code></pre>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { sync } from "vuex-pathify";

export default {
  data: () => ({
    localGreeting: "",
    example1a: ` 
    <input :value="greeting" @input="updateGreeting" />
    `,
    example1b: ` 
    export default {
      computed: {
        ...mapState({
          greeting: state => state.greeting
        })
      },
      methods: {
        updateGreeting(e) {
          this.$store.commit("updateGreeting", e.target.value);
        }
      }
    }
    `,
    example2a: ` 
    <input v-model="greeting" />
    `,
    example2b: ` 
    computed: {
      greeting: {
        get() {
          return this.$store.state.greeting;
        },
        set(value) {
          this.$store.commit("updateGreeting", value);
        }
      },
    },
    `,
    example3a: ` 
    <input v-model="greeting" />
    `,
    example3b: `
    import { sync } from "vuex-pathify";
    
    export default {
      computed: {
        greeting3: sync("greeting")
      }
    }
    `,
    example4a: ` 
    <input v-model="greeting" />
    `,
    example4b: `
    export default {
      data: () => ({
        localGreeting: ""
      }),
      computed: {
        ...mapState({
          greeting: state => state.greeting
        })
      },
      beforeMount() {
        // deep clone
        this.localGreeting = JSON.parse(JSON.stringify(this.greeting1));
      }
    }
    `
  }),
  beforeMount() {
    // deep clone
    this.localGreeting = JSON.parse(JSON.stringify(this.greeting1));
  },
  computed: {
    ...mapState({
      greeting1: state => state.greeting
    }),
    greeting2: {
      get() {
        return this.$store.state.greeting;
      },
      set(value) {
        this.$store.commit("updateGreeting", value);
      }
    },
    greeting3: sync("greeting")
  },
  methods: {
    updateGreeting(e) {
      this.$store.commit("updateGreeting", e.target.value);
    }
  }
};
</script>

<style scoped>
input {
  width: 200px;
  height: 20px;
  border: 1px solid #ddd;
}
</style>
