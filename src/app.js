
import Vue from 'vue'
import ArCamera from './component/ArCamera.vue'

new Vue({
  el: "#app",
  data: {
    message: "Hello Vuejs"
  },
  template: '<ArCamera/>',
  components: { ArCamera }
});
