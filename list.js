function List() {
	this.listSize = 0;					// （属性）列表的元素个数
	this.pos = 0;						// （属性）列表的当前位置
	this.dataStore = [];  				// （属性）初始化的一个空数组来保存列表元素

	// （方法）清空列表中的所有元素
	this.clear = function() {
		delete this.dataStore;
		this.dataStore = [];
		this.listSize = this.pos = 0;
	};

	// （方法）从列表中查找元素
	this.find = function(element) {
		for(var i = 0; i < this.dataStore.length; i++) {
			if(this.dataStore[i] == element) {
				return i;
			}
		}
		return -1;
	};

	// （方法）返回列表的字符串形式
	this.toString = function() {
		return this.dataStore;
	};

	// （方法）在现有元素后面插入新元素
	this.insert = function(element, after) {
		var insertPos = this.find(after);
		if(insertPos > -1) {
			this.dataStore.splice(insertPos + 1, 0, element);
			++this.listSize;
			return true;
		}
		return false;
	};

	// （方法）在列表的尾部插入新元素
	this.append = function (element) {
		this.dataStore[this.listSize++] = element;
	};

	// （方法）从列表中移除元素
	this.remove = function(element) {
		var foundAt = this.find(element);
		if(foundAt > -1) {
			this.dataStore.splice(foundAt, 1);
			--this.listSize;
			return true;
		}
		return false;
	};

	// （方法）将当前位置的元素移动到、设置为第一个元素
	this.front = function() {
		this.pos = 0;
	};

	// （方法）将当前位置的元素移动到、设置为最后一个元素
	this.end = function() {
		this.pos = this.listSize - 1;
	};

	// （方法）将当前位置的元素后移一个位置
	this.prev = function() {
		if(this.pos > 0) {
			--this.pos;
		}
	};

	// （方法）将当前位置的元素前移一个位置
	this.next = function() {
		if(this.pos < this.listSize - 1) {
			++this.pos;
		}
	};

	// （属性）返回列表中元素的个数
	this.length = function() {
		return this.listSize;
	};

	// （方法）返回列表的当前位置
	this.currPos = function() {
		return this.pos;
	};

	// （方法）将当前位置移动到指定位置
	this.moveTo = function(position) {
		this.pos = position;
	};

	// （方法）返回当前位置的元素
	this.getElement = function() {
		return this.dataStore[this.pos];
	};

	// （方法）判断一个值是否在列表中  跟find类似
	this.contains = function(element) {
		for(var i = 0; i < this.dataStore.length; i++) {
			if(this.dataStore[i] == element) {
				return true;
			}
		}
		return false;
	};
};

module.exports = List;