<template>
  <v-container grid-list-md>
    <v-layout text-xs-center wrap>
      <v-flex xs12 md4 lg3 offset-lg2>
        <v-card color="blue-grey darken-2" class="white--text">
          <v-card-title primary-title>
            <div>
              <div class="headline">v-model</div>
              <span>Einfaches Beispiel vom Einsatz von v-model.</span>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat dark to="/vmodel">Öffnen</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs12 md4 lg3>
        <v-card color="blue-grey darken-2" class="white--text">
          <v-card-title primary-title>
            <div>
              <div class="headline">Validierung mit VeeValidate</div>
              <span>Template-basierte Validierung.</span>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat dark to="/veevalidate">Öffnen</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs12 md4 lg3>
        <v-card color="blue-grey darken-2" class="white--text">
          <v-card-title primary-title>
            <div>
              <div class="headline">Validierung per Vuelidate</div>
              <span>Modell-basierte Validierung.</span>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat dark to="/vuelidate">Öffnen</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs12 md4 lg3 offset-lg2>
        <v-card color="blue-grey darken-2" class="white--text">
          <v-card-title primary-title>
            <div>
              <div class="headline">Vuex-Integration</div>
              <span>Form-Controls im Zusammenspiel mit Vuex.</span>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat dark to="/vuex">Öffnen</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs12 md4 lg3>
        <v-card color="blue-grey darken-2" class="white--text">
          <v-card-title primary-title>
            <div>
              <div class="headline">Mehrseitige Validierung</div>
              <span>Per Mixin und Vuex.</span>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat dark to="/multipageval">Öffnen</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs12 md4 lg3>
        <v-card color="blue-grey darken-2" class="white--text">
          <v-card-title primary-title>
            <div>
              <div class="headline">Validierung per Vuex-Modul</div>
              <span>Komplette Entkopplung von der Komponente.</span>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat dark to="/multipagevalvuexmod">Öffnen</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs12 md4 lg3 offset-lg2>
        <v-card color="blue-grey darken-2" class="white--text">
          <v-card-title primary-title>
            <div>
              <div class="headline">Eigene Controls</div>
              <span>Eigene Controls mit v-model-Unterstützung.</span>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat dark to="/customcontrol">Öffnen</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs12 md4 lg3>
        <v-card color="blue-grey darken-2" class="white--text">
          <v-card-title primary-title>
            <div>
              <div class="headline">Read/Edit-Control</div>
              <span>Lese- und Bearbeitungsfunktionalität unterscheiden.</span>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat dark to="/readedit">Öffnen</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs12 md4 lg3>
        <v-card color="blue-grey darken-2" class="white--text">
          <v-card-title primary-title>
            <div>
              <div class="headline">In-Place-Edit</div>
              <span>Zwischen Lese- und Bearbeitungs-Modus umschalten.</span>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat dark to="/inplace">Öffnen</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs12 md4 lg3 offset-lg2>
        <v-card color="blue-grey darken-2" class="white--text">
          <v-card-title primary-title>
            <div>
              <div class="headline">Maskierte Eingabe</div>
              <span>Ein Eingabeformat während der Eingabe erzwingen.</span>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat dark to="/maskedinput">Öffnen</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs12 md4 lg3>
        <v-card color="blue-grey darken-2" class="white--text">
          <v-card-title primary-title>
            <div>
              <div class="headline">Formulare generieren</div>
              <span>Formulare aus Schema dynamisch generieren.</span>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat dark to="/dynamic">Öffnen</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs12 md4 lg3>
        <v-card color="blue-grey darken-2" class="white--text">
          <v-card-title primary-title>
            <div>
              <div class="headline">Usability & UX</div>
              <span>Weiterführende Ressourcen.</span>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat dark to="/usability">Öffnen</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script></script>

<style>
.v-card {
  height: 100%;
}
</style>
