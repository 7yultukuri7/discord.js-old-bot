var item = 'リンゴ';
var getName = function() {
  console.log(item + "です");
}
var obj = {
  name: 'メロン',
  price: 500,
  store: '東京店舗'
}

exports.item = item;
exports.getName = getName();
exports.obj = obj;