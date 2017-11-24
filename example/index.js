/**
 * Created by lenovo on 2017/11/24.
 */
import Vue from 'vue';

import Pull from '../src/components/pull/Pull';

const vm = new Vue({
  components: {
    Pull
  },
  data() {
    return {
      msg: 'hello world, i love you',
      showPull: true,
      pullYH: {
        isPull: false,
        isPullDown: false,
      }
    }
  },
  methods: {
    hide() {
      this.showPull = !this.showPull;
    },
    pull() {
      console.log('index pull');
      setTimeout(() => {
        this.pullYH.isPull = false;
        this.pullYH.isPullDown = false;
        console.log(22222222);
      }, 2000)
    },

    pullDown() {
      console.log('index.pulldown')
      setTimeout(() => {
        this.pullYH.isPull = false;
        this.pullYH.isPullDown = false;
        console.log(22222222);
      }, 2000)
    }
  }
});

vm.$mount('#app');