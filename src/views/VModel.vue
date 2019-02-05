<template>
  <div>
    <Breadcrumbs name="v-model"></Breadcrumbs>
    <h1>V-Model</h1>
    <p class="mt-4">Input mit v-model:</p>
    <p>
      <input type="text" v-model="greeting" />
    </p>
    <pre v-highlightjs><code class="html">
      &lt;input type=&quot;text&quot; v-model=&quot;greeting&quot; /&gt;
      </code></pre>
    <hr class="my-4" />

    <p class="mt-4">Per value-bind und input-event:</p>
    <p>
      <input
        type="text"
        :value="greeting"
        @input="greeting = $event.target.value"
      />
    </p>
    <pre v-highlightjs><code class="html">
      &lt;input
        type=&quot;text&quot;
        :value=&quot;greeting&quot;
        @input=&quot;greeting = $event.target.value&quot;
      /&gt;
      </code></pre>
    <hr class="my-4" />
    <p>
      Aktueller Wert: <i>{{ greeting }}</i>
    </p>
  </div>
</template>

<script>
export default {
  data: () => ({
    greeting: ""
  })
};
</script>
