<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline">
        <a
          href="https://ctwebdev.de/"
          target="_blank"
          style="text-decoration: none;color: inherit;"
          ><span>c't</span>
          <span class="font-weight-light"> &lt;webdev&gt; 2019</span></a
        >
      </v-toolbar-title>
    </v-toolbar>

    <v-content>
      <v-container grid-list-md>
        <v-layout text-xs-center wrap>
          <v-flex xs12>
            <v-img
              :src="require('./assets/logo.png')"
              class="my-3"
              contain
              height="100"
            ></v-img>
          </v-flex>

          <v-flex xs12>
            <h1 class="display-2 font-weight-bold mb-3">
              c't &lt;webdev&gt;
            </h1>
            <p class="subheading font-weight-regular">
              Komplexe Formulare mit
              <a href="https://vuejs.org" target="_blank">Vue.js</a>
            </p>
            <p><b>Norbert D. Frank</b></p>
          </v-flex>
        </v-layout>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script></script>

<style>
input.fix {
  width: 200px;
  height: 20px;
  border: 1px solid #ddd;
}
pre {
  font-size: 1.2rem;
}
</style>
