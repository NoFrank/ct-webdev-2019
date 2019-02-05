<template>
  <div>
    <Breadcrumbs name="Mehrseitige Validierung"></Breadcrumbs>
    <h1>Mehrseitige Validierung</h1>
    <p class="mt-4">
      Für eine mehrseitige Validierung per Vuelidate können die
      Validierungsregeln in Mixins ausgelagert werden. Die folgenden
      Validierungs-Mixins definieren die Validierungsregeln unabhängig von der
      Komponente.
    </p>
    <pre
      v-highlightjs="validationExample"
    ><code class="javascript"></code></pre>

    <p class="mt-4">
      Eine einzelne Komponente kann diese Regeln per Mixin importieren:
    </p>
    <pre v-highlightjs="mixinExample"><code class="javascript"></code></pre>

    <p class="mt-4">
      Sollen mehrere Seiten (=Komponenten) validiert werden, müssen mehrere
      Mixins importiert werden. Da die normale Merge-Logik von Vue nicht die
      Validierungsfunktionen ergänzen kann, kommt hier die merge-Methode der
      Library deepmerge (https://github.com/TehShrike/deepmerge) zum Einsatz.:
    </p>
    <pre v-highlightjs="mergeExample"><code class="javascript"></code></pre>

    <p class="mt-4">Order: <input v-model="order" /></p>
    <p class="mt-4">Adress: <input v-model="adress" /></p>
    <p class="mt-4">$v enthält nun den kombinierten Validierungszustand:</p>
    <p class="mt-2">
      <vue-json-pretty :data="$v"></vue-json-pretty>
    </p>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import merge from "deepmerge";
import VueJsonPretty from "vue-json-pretty";

// Die folgenden Validierungs-Mixins sind nur im Rahmen des Beispiels hier in der  Komponente selbst abgelegt.
// In einem echten Szenario würden sie an anderer Stelle abgelegt und hier importiert.
let page1Validations = {
  validations() {
    return {
      adress: {
        required
      }
    };
  }
};

let page2Validations = {
  validations() {
    return {
      order: {
        required
      }
    };
  }
};

// Wenn nur ein Validierungs-Mixin importiert wird, kann dies mit der normalen Mixin-Syntax angegeben werden
// mixin: [page1Validations]
// Bei mehreren Mixins müssen die Return-Werte der Validierungs-Mixins zusammengelegt werden. Dies kann die
// normale Merge-Logik von Vue nicht übernehmen. Daher kommt die merge-Methode der Library deepmerge zum Einsatz.
export default {
  components: {
    VueJsonPretty
  },
  data: () => ({
    adress: "",
    order: "",
    validationExample: `
    let page1Validations = {
      validations() {
        return {
          adress: {
            required
          }
        };
      }
    };

    let page2Validations = {
      validations() {
        return {
          order: {
            required
          }
        };
      }
    };
    `,
    mixinExample: `
    export default {
      mixin: [page1Validations]
    }
    `,
    mergeExample: `
    import merge from "deepmerge";

    export default {
      validations() {
        return merge.all([
          page1Validations.validations.apply(this),
          page2Validations.validations.apply(this)
        ]);
      }
    }
    `
  }),
  validations() {
    return merge.all([
      page1Validations.validations.apply(this),
      page2Validations.validations.apply(this)
    ]);
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
