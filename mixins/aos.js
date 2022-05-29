import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  beforeMount() {
    AOS.init({ once: true, })
    window.addEventListener('load', AOS.refresh)
  },
  mounted() {
      window.addEventListener('load', AOS.refresh)
  },
}