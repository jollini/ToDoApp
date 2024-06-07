import "vuetify/styles"
import { createVuetify } from "vuetify"
import { aliases, mdi } from "vuetify/iconsets/mdi"
import "@mdi/font/css/materialdesignicons.css"

export default createVuetify({
  theme: {
    defaultTheme: "dark",
    themes: {
      dark: {
        colors: {
          surface: "hsl(235, 24%, 19%)", // v-card
          background: "hsl(235, 21%, 11%)",
        },
      },
      light: {
        colors: {
          surface: "hsl(0, 0%, 98%)", // v-card
          background: "hsl(236, 33%, 92%)",
        },
      },
    },
  },
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
})
