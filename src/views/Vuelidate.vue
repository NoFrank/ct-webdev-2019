<template>
  <div>
    <Breadcrumbs name="Vuelidate"></Breadcrumbs>
    <h1>Vuelidate</h1>
    <h3 class="mt-4 mb-2">Vuelidate - einfaches Beispiel:</h3>
    <div>
      <input v-model="$v.greeting.$model" type="text" class="mb-4 fix" />
      <div class="mb-4">
        <i v-if="!$v.greeting.required && $v.greeting.$dirty"
          >The greeting field is required.</i
        >
        <i v-if="!$v.greeting.minLength && $v.greeting.$dirty">
          The greeting field must be at least
          {{ $v.greeting.$params.minLength.min }} characters.
        </i>
      </div>
      <pre v-highlightjs="example1"><code class="html"></code></pre>
      <hr class="my-4" />

      <h3 class="mt-4 mb-2">Vuelidate - Zugriff auf andere Props:</h3>
      <p class="mt-2">
        Das Beispiel nutzt Controls aus der
        <a href="https://vuetifyjs.com/en/">Vuetify</a>-Library:
      </p>
      <v-text-field
        label="Password"
        v-model="password"
        :error-messages="passwordErrors"
        @input="$v.password.$touch()"
        @blur="$v.password.$touch()"
        required
      ></v-text-field>
      <v-text-field
        label="Repeat password"
        v-model="repeatPassword"
        :error-messages="passwordRepeatErrors"
        @input="$v.repeatPassword.$touch()"
        @blur="$v.repeatPassword.$touch()"
        required
      ></v-text-field>

      <pre v-highlightjs="example2"><code class="html"></code></pre>

      <pre
        v-highlightjs="example3"
        class="my-4"
      ><code class="javascript"></code></pre>
      <hr class="my-4" />
      <h3 class="mt-4 mb-2">Vuelidate - Custom Validiator:</h3>
      <p class="mt-2">
        Der Validator überprüft, ob eine gerade Nummer eingegeben wurde.
      </p>
      <input v-model="$v.evenCount.$model" type="number" class="fix" />
      <div class="mb-4">
        <i v-if="!$v.evenCount.isEven && $v.evenCount.$dirty"
          >The value must be even.</i
        >
      </div>

      <pre v-highlightjs="example4"><code class="javascript"></code></pre>
    </div>
  </div>
</template>

<script>
import { required, minLength, sameAs } from "vuelidate/lib/validators";

const isEven = value => value === 0 || !!(value && !(value % 2));

export default {
  data: () => ({
    greeting: "",
    orderValue: null,
    password: "",
    repeatPassword: "",
    evenCount: 0,
    example1: ` 
    <input v-model="$v.greeting.$model" type="text" class="mb-4" />
    <div class="mb-4">
      <i v-if="!$v.greeting.required && $v.greeting.$dirty"
        >The greeting field is required.</i
      >
      <i v-if="!$v.greeting.minLength && $v.greeting.$dirty">
        The greeting field must be at least
        {{ $v.greeting.$params.minLength.min }} characters.
      </i>
    </div>
  `,
    example2: `  
      <v-text-field
        label="Password"
        v-model="password"
        :error-messages="passwordErrors"
        @input="$v.password.$touch()"
        @blur="$v.password.$touch()"
        required
      ></v-text-field>
      <v-text-field
        label="Repeat password"
        v-model="repeatPassword"
        :error-messages="passwordRepeatErrors"
        @input="$v.repeatPassword.$touch()"
        @blur="$v.repeatPassword.$touch()"
        required
      ></v-text-field>
    `,
    example3: `
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      if (!this.$v.password.required) errors.push("Password is required.");
      return errors;
    },
    passwordRepeatErrors() {
      const errors = [];
      if (!this.$v.repeatPassword.$dirty) return errors;
      if (!this.$v.repeatPassword.required)
        errors.push("Password is required.");
      if (!this.$v.repeatPassword.sameAs)
        errors.push("The passwords don't match.");
      return errors;
    }
    `,
    example4: `
    const isEven = value => value === 0 || !!(value && !(value % 2));

    // ...
    validations: {
      evenCount: {
        isEven
      }
    }
    `
  }),
  computed: {
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      if (!this.$v.password.required) errors.push("Password is required.");
      return errors;
    },
    passwordRepeatErrors() {
      const errors = [];
      if (!this.$v.repeatPassword.$dirty) return errors;
      if (!this.$v.repeatPassword.required)
        errors.push("Password is required.");
      if (!this.$v.repeatPassword.sameAs)
        errors.push("The passwords don't match.");
      return errors;
    }
  },
  validations: {
    greeting: {
      required,
      minLength: minLength(20)
    },
    password: {
      required,
      minLength: minLength(6)
    },
    repeatPassword: {
      required,
      sameAs: sameAs("password")
    },
    evenCount: {
      isEven
    },
    validations: {
      orderValue: {
        minOrder(value) {
          if (!value) return true;

          // async ist möglich per Promise
          return new Promise(resolve => {
            setTimeout(() => {
              resolve(value >= 20);
            }, 350);
          });
        }
      }
    }
  }
};
</script>
