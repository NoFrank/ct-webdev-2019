<template>
  <div>
    <Breadcrumbs name="VeeValidate"></Breadcrumbs>
    <h1>VeeValidate</h1>
    <h3 class="mt-4 mb-2">VeeValidte mit Directive:</h3>
    <div>
      <input
        v-validate="'required|min:20'"
        v-model="greeting"
        type="text"
        name="greeting"
        class="mb-4"
      />
      <div class="mb-4">
        <i>{{ errors.first("greeting") }}</i>
      </div>

      <pre v-highlightjs="example1"><code class="html"></code></pre>
      <hr class="my-4" />

      <h3 class="mt-4 mb-2">
        VeeValidte mit ValidationProvider (neuere Alternative seit 2.1):
      </h3>
      <ValidationProvider name="greeting" rules="required|min:20">
        <div slot-scope="{ errors }">
          <input v-model="greeting" type="text" class="mb-4" />
          <div class="mb-4">
            <i>{{ errors[0] }}</i>
          </div>
        </div>
      </ValidationProvider>

      <pre v-highlightjs="example2"><code class="html"></code></pre>

      <hr class="my-4" />

      <h3 class="mt-4  mb-2">Custom rule:</h3>
      <input
        v-validate="'minorder'"
        v-model="orderValue"
        type="number"
        name="orderValue"
        class="mb-4"
      />
      <div class="mb-4">
        <i>{{ errors.first("orderValue") }}</i>
      </div>

      <pre v-highlightjs="example3a"><code class="javascript"></code></pre>
      <br />
      <pre v-highlightjs="example3b"><code class="html"></code></pre>
    </div>
  </div>
</template>

<script>
import { ValidationProvider, Validator } from "vee-validate";

export default {
  components: {
    ValidationProvider
  },
  data: () => ({
    greeting: "",
    orderValue: null,
    example1: ` 
    <input
      v-validate="'required|min:20'"
      v-model="greeting"
      type="text"
      name="greeting"
      class="mb-4"
    />
    <div class="mb-4">
      <i>{{ errors.first("greeting") }}</i>
    </div>
  `,
    example2: `  
    <ValidationProvider name="greeting" rules="required|min:20">
      <div slot-scope="{ errors }">
        <input v-model="greeting" type="text" class="mb-4" />
        <div class="mb-4"><i>{{ errors[0] }}</i></div>
      </div>
    </ValidationProvider>
    `,
    example3a: `
    Validator.extend("minorder", {
      // Custom validation message
      getMessage: () => 'Minimum order value is 20€.',
      // Custom validation rule
      validate: value =>
        new Promise(resolve => {
          resolve({
            valid: value >= 20
          });
        })
    });
    `,
    example3b: `
    <input
      v-validate="'minorder'"
      v-model="orderValue"
      type="number"
      name="orderValue"
      class="mb-4"
    />
    <div class="mb-4">
      <i>{{ errors.first("orderValue") }}</i>
    </div>
    `
  }),
  created: function() {
    Validator.extend("minorder", {
      // Custom validation message
      getMessage: () => `Minimum order value is 20€.`,
      // Custom validation rule
      validate: value =>
        new Promise(resolve => {
          resolve({
            valid: value >= 20
          });
        })
    });
  }
};
</script>
