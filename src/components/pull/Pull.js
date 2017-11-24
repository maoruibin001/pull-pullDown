/**
 * Created by lenovo on 2017/11/24.
 */
import template from './pull.tpl';
import $ from 'jquery';

function calcY(event) {
  return event.touches ? event.touches[0].pageY : event.pageY;
}

const MSGLIST = [
  {content: '下拉刷新'},
  {content: '加载中'},
]
const Pull = {
  props: {
    pulldata: {
      require: true,
      type: Object,
      default: {
        isPull: {
          require: true,
          type: Object,
          default: false
        },
        isPullDown: false
      }
    }

  },
  template,
  data() {
    return {
      msg: '',
      value: this.pulldata
    }
  },
  updated() {
    console.log(this.value);
  },
  beforeDestroy() {
    console.log('destory')
    let $container = $(this.$refs.slot);
    $container.off();
  },
  destroyed() {
    console.log('destoryed')
  },
  mounted() {
    console.log('value: ', this.value);
    console.log('mounted')
    let $container = $(this.$refs.slot);
    let startPageY = 0;
    let currPageY = 0;
    let startTime = 0;
    let endTime = 0;
    let canPullByTime = false;
    let canPullByDistance = false;
    let canPullDownByDistance = false;
    let TIMELIMIT = 2000; //最大时间间隔
    let DISTANCELIMIT = 20; //最小距离
    $container.on('touchstart', (e) => {
      startPageY = calcY(e);
      startTime = new Date().getTime();

      console.log('touchstart')
    });

    $container.on('touchmove', (e) => {
      currPageY = calcY(e);
    })

    $container.on('touchend', (e) => {
      endTime = new Date().getTime();
      canPullByTime = endTime - startTime < TIMELIMIT;

      canPullByDistance = currPageY - startPageY > DISTANCELIMIT;
      canPullDownByDistance = currPageY - startPageY < -DISTANCELIMIT;

      if (canPullByDistance && canPullByTime) {
        console.log('pull')
        this.value.isPull = true;
        this.msg = MSGLIST[0].content;
        this.$emit('pull');
      } else if (canPullDownByDistance && canPullByTime) {
        console.log('pull-down')
        this.value.isPullDown = true;
        this.msg = MSGLIST[1].content;
        this.$emit('pulldown');
      } else {
        console.log('not pull')
      }
    })
  }
};

export default Pull;