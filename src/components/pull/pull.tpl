<div >
    <!--<h1>hello, i am pull</h1>-->
    <div ref="slot" style="background-color: red;position: relative;">
        <h2 v-show="value.isPull">{{msg}}</h2>
        <slot>如果没有内容就显示我</slot>
        <h2 v-show="value.isPullDown">{{msg}}</h2>
    </div>
</div>