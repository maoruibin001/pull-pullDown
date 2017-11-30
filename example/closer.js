/**
 * Created by lenovo on 2017/11/28.
 */
var a = {
  key1: "11111"
}
function Copy(p, c) {
  var c = c || {};
  for (var i in p) {
    if (typeof p[i] === 'object') {
      c[i] = (p[i].constructor === Array) ? [] : {};
      Copy(p[i], c[i]);//  这里为什么不写成c[i]=Copy(p[i], c[i]);
    } else {
      c[i] = p[i];
    }
  }
  return c;
}
a.key2 = ['小辉', '小辉'];
console.log(a);

var b = Copy(a, b);
a.key2[0] = 3333
console.log(a)

测试代号
console.log(b)


console.log(console.log(222))