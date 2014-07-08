/* für 3!
 var orders = [
 {
 article: 2323,
 num: 4
 },
 {
 article: 41,
 num: 1
 },
 {
 article: 2323,
 num: 10
 },
 {
 article: 655,
 num: 2
 }
 ];

 console.log(_.countBy(orders,"article"));


 var groups = _.groupBy(orders,'article');

 groups = _.map(groups,function(item,key){
 var obj= {};
 // If only one article
 if(item.length === 1){
 obj[item[0].article] = item[0].num;
 return obj;
 }else{
 var temp = _.pluck(item,"num");


 obj[item[0].article] = _.reduce(temp, function(sum, num) {
 return sum + num;
 });
 return obj;

 }

 });


 */