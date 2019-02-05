<template>
  <div>
    <Breadcrumbs name="Usability & UX"></Breadcrumbs>
    <h1>Usability & UX</h1>
    <p class="mt-4">
      Usability & User Experience ist ein weitläufiges Thema und geht über den
      Fokus des Talks deutlich hinaus. Auf dieser Seite sind ein paar Tipps und
      Ressourcen aufgeführt.
    </p>
    <p>
      Eine sehr gute Quelle für Informationen und Inspirationen sind öffentlich
      einsehbare Design Systems von größeren Unternehmen.
    </p>

    <v-list two-line>
      <template v-for="(item, index) in items">
        <v-subheader v-if="item.header" :key="item.header">
          {{ item.header }}
        </v-subheader>

        <v-divider
          v-else-if="item.divider"
          :inset="item.inset"
          :key="index"
        ></v-divider>

        <v-list-tile v-else :key="item.title" avatar @click="open(item)">
          <v-list-tile-avatar>
            <v-icon :color="item.color" :class="[item.iconClass]">{{
              item.icon
            }}</v-icon>
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title v-html="item.title"></v-list-tile-title>
            <v-list-tile-sub-title>{{ item.href }}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      { header: "Allgemeine Artikel" },
      {
        icon: "description",
        color: "indigo",
        title: "Best Practices For Mobile Form Design",
        href:
          "https://www.smashingmagazine.com/2018/08/best-practices-for-mobile-form-design/"
      },
      { divider: true, inset: true },
      {
        icon: "description",
        color: "indigo",
        title: "UX In Contact Forms: Essentials To Turn Leads Into Conversions",
        href:
          "https://www.smashingmagazine.com/2018/03/ux-contact-forms-essentials-conversions/"
      },
      { divider: true, inset: true },
      {
        icon: "description",
        color: "indigo",
        title: "10 Tips to Enhance the Usability of Your Web Forms",
        href:
          "https://themanifest.com/web-design/10-tips-enhance-usability-your-web-forms"
      },
      { divider: true, inset: true },
      {
        icon: "description",
        color: "indigo",
        title: "The UX behind designing better forms",
        href:
          "https://uxdesign.cc/the-ux-behind-designing-better-forms-d6ebe7a817d2"
      },
      { divider: true, inset: true },
      {
        icon: "description",
        color: "indigo",
        title: "58 Form Design Best Practices & Form UX Examples",
        href: "https://www.ventureharbour.com/form-design-best-practices/"
      },
      { divider: true, inset: true },
      {
        icon: "description",
        color: "indigo",
        title:
          "BEST PRACTICES FOR FORM DESIGN (alt, aber immer noch hilfreich)",
        href: "http://static.lukew.com/webforms_lukew.pdf"
      },
      { divider: true, inset: true },
      {
        icon: "description",
        color: "indigo",
        title: "A comprehensive guide to design systems",
        href:
          "https://www.invisionapp.com/inside-design/guide-to-design-systems/"
      },

      { header: "Design Systems" },
      {
        icon: "library_books",
        color: "green",
        title: "Hubspot",
        href: "https://canvas.hubspot.com/"
      },
      { divider: true, inset: true },
      {
        icon: "library_books",
        color: "green",
        title: "Salesforce",
        href: "https://www.lightningdesignsystem.com/"
      },
      { divider: true, inset: true },
      {
        icon: "library_books",
        color: "green",
        title: "Intuit (Quickbooks)",
        href: "https://designsystem.quickbooks.com/"
      },
      { divider: true, inset: true },
      {
        icon: "library_books",
        color: "green",
        title: "Material Design",
        href: "https://material.io/"
      },
      { divider: true, inset: true },
      {
        icon: "library_books",
        color: "green",
        title: "MailChiimp",
        href: "https://ux.mailchimp.com/patterns"
      },
      { divider: true, inset: true },
      {
        icon: "library_books",
        color: "green",
        title: "Atlassian",
        href: "https://atlassian.design/"
      },
      { divider: true, inset: true },
      {
        icon: "library_books",
        color: "green",
        title: "Microsoft",
        href: "https://www.microsoft.com/design/fluent/"
      },
      { divider: true, inset: true },
      {
        icon: "library_books",
        color: "green",
        title: "BBC",
        href: "http://www.bbc.co.uk/gel/"
      },
      { divider: true, inset: true },
      {
        icon: "library_books",
        color: "green",
        title: "Shopify",
        href: "https://polaris.shopify.com/"
      },
      { divider: true, inset: true },
      {
        icon: "library_books",
        color: "green",
        title: "Trello",
        href: "https://design.trello.com/"
      },
      { divider: true, inset: true },
      {
        icon: "library_books",
        color: "green",
        title: "IBM",
        href: "https://www.ibm.com/design/language/"
      },
      { divider: true, inset: true },
      {
        icon: "library_books",
        color: "green",
        title: "GOV.UK",
        href: "http://govuk-elements.herokuapp.com/"
      },
      { divider: true, inset: true },
      {
        icon: "library_books",
        color: "green",
        title: "AirBnB",
        href: "https://airbnb.design/building-a-visual-language/"
      },
      { divider: true, inset: true },
      {
        icon: "library_books",
        color: "green",
        title: "LonelyPlanet",
        href:
          "https://rizzo.lonelyplanet.com/styleguide/design-elements/colours"
      },
      { divider: true, inset: true },
      {
        icon: "library_books",
        color: "green",
        title: "Buzzfeed",
        href: "https://solid.buzzfeed.com/"
      },
      { divider: true, inset: true },
      {
        icon: "library_books",
        color: "green",
        title: "Firefox",
        href: "https://design.firefox.com/photon/"
      },
      { divider: true, inset: true },
      {
        icon: "library_books",
        color: "green",
        title: "Alibaba",
        href: "https://ant.design"
      }
    ]
  }),
  methods: {
    open(item) {
      window.open(item.href);
    }
  }
};
</script>
