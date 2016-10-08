var assert = require('chai').assert;
var list = require('../list.js');
describe('测试List', function() {
	describe('测试开始', function() {
		it('测试成功', function() {
			var names = new list();
			names.append('vinson');
			names.append('love');
			names.append('xy');
			console.log(names.toString());
			names.remove('love');
			console.log(names.toString());
			names.insert('love', 'vinson');
			console.log(names.toString());
			console.log(names.getElement())
			// assert.equal(-1, names.toString());
		});
	});
});