//数组测试平台
function CArray(numElements) {
	this.dataStore = [];
	this.pos = 0;
	this.numElements = numElements;
	this.insert = function(element) {
		this.dataStore[this.pos++] = element;
	};
	this.toString = function() {
		var restr = '';
		for(var i = 0; i < this.dataStore.length; i++) {
			restr += this.dataStore[i] + ' ';
			if( i > 0 && i % 10 == 0) {
				restr += '\n';
			}
		}
		return restr;
	};
	this.clear = function() {
		for(var i = 0; i < this.numElements; i++) {
			this.dataStore[i] = 0;
		}
	};
	this.setData = function() {
		for(var i = 0; i < this.numElements; i++) {
			this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1));
		}
	};
	this.swap = function(arr, index1, index2) {
		var temp = arr[index1];
		arr[index1] = arr[index2];
		arr[index2] = temp;
	};

	for(var i = 0; i < numElements.length; i++) {
		this.dataStore[i] = i;
	}


	//冒泡排序
	this.bubbleSort = function() {
		var numElements = this.dataStore.length;
		var temp;
		for( var outer = numElements; outer >= 2; outer--) {
			for(var inner = 0; inner <= outer - 1; inner++) {
				if(this.dataStore[inner] > this.dataStore[inner + 1]) {
					this.swap(this.dataStore, inner, inner + 1);
				}
				console.log(this.toString())
			}
		}
	};

	//插入排序

	//

};
// var myNums = new CArray(100);
// myNums.setData();
// console.log(myNums.toString())

var myNums = new CArray(10);
myNums.setData();
myNums.bubbleSort();