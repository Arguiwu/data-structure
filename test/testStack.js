var assert = require('chai').assert;
var stack = require('../stack.js');
describe('测试stack', function() {
	describe('测试开始', function() {
		it('测试成功', function() {
			var s = new stack();
			s.push('vinson');
			s.push('love');
			s.push('me');
			console.log(s.length());
			console.log(s.peek());
			console.log(s.pop());
		});
	});
});