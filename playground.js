//ARROW FUNCTIONS ES2015
//var names = ['Alex', 'Pavel', 'Misha', 'Masha'];
//
//names.forEach(function(name) {
//	console.log('forEach', name);
//});
//
//names.forEach(name => console.log('forEach', name));
//
//var person = {
//	name: 'Alex',
//	greet: function() {
//		names.forEach(function(name) {
//			console.log(this.name + ' says hi to '+ name);
//		})
//	}
//};
//
//var person = {
//	name: 'Alex',
//	greet: function() {
//		names.forEach((name) => {
//			console.log(this.name + ' says hi to '+ name);
//		})
//	}
//};
//
//person.greet();
//
//function add(a, b) {
//	return a+b;
//}
//
//var add2 = (a, b) => {
//	return a + b
//};
//
//var add3 = (a, b) => a + b;
//
//console.log(add(1, 3));
//console.log(add(9, 0));
//
//console.log(add2(1, 3));
//console.log(add2(9, 0));
//
//console.log(add3(1, 3));
//console.log(add3(9, 0));