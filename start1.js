/*
setInterval(function() {
async.series([
  function(callback) {
    //処理1
    
    //…
    setTimeout(callback, 3000);
  }, function(callback) {
    //処理2

    //…
    setTimeout(callback, 3000);
  }, function(callback) {
    //処理3

    //…
    setTimeout(callback, 3000);
  }, function(callback) {
    //処理4

    //…
    setTimeout(callback, 3000);
  }, function(callback) {

    return console.log('処理終了');
  }
], function(err, results) {
  if (err) {
    return console.log('err[' + err + ']');
  }
});
},15000); 


async.series([
  function(callback) {
    //処理1
    
    //…
    setTimeout(callback, 1000);
  }, function(callback) {
    //処理2
    
    //…
  }
], function(err, results) {
  if (err) {
    return console.log('err[' + err + ']');
  }
});