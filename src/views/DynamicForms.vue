<template>
  <div>
    <Breadcrumbs name="Dynamic Forms"></Breadcrumbs>
    <h1>Formulare generieren</h1>
    <p class="mt-4">
      In diesem Beispiel wird ein Formular und dessen Darstellung aus einem
      Schema generiert. Für sehr große Anwendungen mit vielen Formuaren kann
      dies ein geeigneter Ansatz sein. Im Kern steht die Vue-Komponente
      <a href="https://vuejs.org/v2/guide/components.html#Dynamic-Components"
        >component</a
      >, die ein Platzhalter für eine beliebige Komponente zur Laufzeit ist.
    </p>
    <p>
      Das gesamte Formular wird aus dem Schema rekursiv aufgebaut.
      Eingabekomponenten werden in eine generische Komponente gekapselt, die
      ihre gesamte Konfiguration über Properties entgegennimmt. Das folgende
      Beispiel zeigt die grundsätzliche Funktionsweise. In dem Beispiel sind
      nicht alle Aspekte generisch ausprogrammiert. Für die Validierung kommt
      das
      <router-link to="/multipageval">Vuex-Modul</router-link> zum Einsatz. Die
      Werte werden ebenfalls in Vuex abgelegt.
    </p>
    <h3>Beispiel-Schema</h3>
    <pre v-highlightjs="example"><code class="javascript"></code></pre>

    <h3 class="my-4">Ergebnis:</h3>
    <generic-component-wrapper
      v-bind="formComponents"
    ></generic-component-wrapper>
  </div>
</template>
<script>
import GenericComponentWrapper from "../components/generic-component-wrapper";
import { mapState } from "vuex";

export default {
  components: { GenericComponentWrapper },
  data: () => ({
    formComponents: {
      id: 1,
      component: "div",
      options: {
        style: "border-top: 2px dotted #2eb9ce;padding-top:7px;"
      },
      children: [
        {
          id: 2,
          component: "h3",
          content: "Dynamic Form"
        },
        {
          id: 2,
          component: "p",
          content: "Dies ist ein dynamischer Absatz."
        },
        {
          id: 3,
          component: "DynamicInput",
          options: {
            label: "Greeting",
            binding: "greeting",
            mutation: "updateGreeting",
            errorGetter: "greetingErrors"
          }
        },
        {
          id: 4,
          component: "div",
          options: {
            class: "mt-4"
          },
          children: [
            {
              id: 5,
              component: "b",
              content: "Aktueller Wert: "
            },
            {
              id: 6,
              component: "i",
              children: [
                {
                  id: 7,
                  component: "DynamicVuexText",
                  options: {
                    binding: "greeting"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    example: `
    formComponents: {
      id: 1,
      component: "div",
      options: {
        style: "border-top: 2px dotted #2eb9ce;padding-top:7px;"
      },
      children: [
        {
          id: 2,
          component: "h3",
          content: "Dynamic Form"
        },
        {
          id: 2,
          component: "p",
          content: "Dies ist ein dynamischer Absatz."
        },
        {
          id: 3,
          component: "DynamicInput",
          options: {
            label: "Greeting",
            binding: "greeting",
            mutation: "updateGreeting",
            errorGetter: "greetingErrors"
          }
        },
        {
          id: 4,
          component: "div",
          options: {
            class: "mt-4"
          },
          children: [
            {
              id: 5,
              component: "b",
              content: "Aktueller Wert: "
            },
            {
              id: 6,
              component: "i",
              children: [
                {
                  id: 7,
                  component: "DynamicVuexText",
                  options: {
                    binding: "greeting"
                  }
                }
              ]
            }
          ]
        }
      ]
    }
    `
  }),
  computed: {
    ...mapState({
      greeting: state => state.greeting
    })
  },
  methods: {
    onInput(event) {
      alert(event);
    }
  }
};
</script>
