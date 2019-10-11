import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/es5/util/colors'
import { dom, library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faFacebook, faGithub, faBloggerB } from '@fortawesome/free-brands-svg-icons'

Vue.use(Vuetify)

library.add(faTwitter, faFacebook, faGithub, faBloggerB)
dom.i2svg()

export default new Vuetify({
  theme: {
    new_dark_theme: '#000f1b',
    primary: colors.blue.darken2,
    accent: colors.grey.darken3,
    secondary: colors.amber.darken3,
    info: colors.teal.lighten1,
    warning: colors.amber.base,
    error: colors.deepOrange.accent4,
    success: colors.green.accent3
  }
})
