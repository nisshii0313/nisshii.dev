import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import { dom, library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faFacebook, faGithub, faBloggerB } from '@fortawesome/free-brands-svg-icons'

Vue.use(Vuetify)

library.add(faTwitter, faFacebook, faGithub, faBloggerB)
dom.i2svg()

export default new Vuetify({
  theme: {
    new_dark_theme: '#000f1b'
  },
  icons: {
    iconfont: 'fa'
  }
})
