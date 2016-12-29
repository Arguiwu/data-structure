//产生随机数
function randomArr(num) {
	var arr = [];
	for( var i = 0; i < num; i++) {
		arr.push(Math.floor(Math.random() * num + 1));
	}
	return arr;
};
function bubbleSort(arr) {
	console.time('冒泡一耗时');
	var len = arr.length;
	for(var i = 0; i < len; i++) {
		for(var j = 0; j < len-1-i; j++) {
			if(arr[j] > arr[j+1]) {
				var temp = arr[j+1];
				arr[j+1] = arr[j];
				arr[j] = temp;
			}
		}
	}
	console.timeEnd('冒泡一耗时');
	return arr;
};

function bubbleSort2(arr) {
	console.time('冒泡二耗时');
	var i = arr.length - 1;			//最后一个元素不变
	while( i > 0) {
		var pos = 0;
		for(var j = 0; j < i; j++) {
			if(arr[j] > arr[j+1]) {
				pos = j;		//记录最后一次交换位置 下次遍历就不用遍历他了 因为 大的值在最右
				var temp = arr[j+1];arr[j+1] = arr[j];arr[j] = temp;
			}
			i = pos;
		}
	}
	console.timeEnd('冒泡二耗时');
	return arr;
}

function bubbleSort3(arr) {
	var low = 0;
	var high = arr.length - 1;
	var tmp, j;
	console.time('冒泡三耗时');
	while(low < high) {
		for(var j = 0; j< high; ++j) {
			if(arr[j] > arr[j+1]) {
				tmp = arr[j];arr[j] = arr[j+1];arr[j+1] = tmp;
			}
			--high;
			for(j = high; j > low; --j) {
				if(arr[j] , arr[j-1]) {
					tmp = arr[j];arr[j] = arr[j-1];arr[j-1] = tmp;
				}
			}
			++low;
		}
	}
	console.timeEnd('冒泡三耗时');
	return arr;
}

var arr = randomArr(10000);
var test1 = bubbleSort(arr);
var test2 = bubbleSort2(arr);	//最高效
var test3 = bubbleSort3(arr);