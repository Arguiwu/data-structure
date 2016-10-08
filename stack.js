function Stack() {
	// 定义一个数组来保存元素
	this.dataStore = [];
	// 栈顶位置 默认为0
	this.top = 0;

	// 入栈操作
	this.push = function(element) {
		//注意 ++的位置  它在this.top的后面 这样新入栈的元素放在top的位置 然后this.top+1
		this.dataStore[this.top++] = element;
	};

	// 出栈操作 返回栈顶元素 但是会删除该元素
	this.pop = function() {
		return this.dataStore[--this.top];
	};

	// 返回栈顶元素 不删除
	this.peek = function() {
		return this.dataStore[this.top - 1];
	};

	// 清空栈
	this.clear = function() {
		this.top = 0;
	};

	// 返回栈长度
	this.length = function() {
		return this.top;
	};
};

module.exports = Stack;