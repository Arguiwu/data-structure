//产生随机数
function randomArr(num) {
	var arr = [];
	for( var i = 0; i < num; i++) {
		arr.push(Math.floor(Math.random() * num + 1));
	}
	return arr;
};

//冒泡排序最快的
function bubbleSort(arr) {
	console.time('冒泡耗时');
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
	console.timeEnd('冒泡耗时');
	return arr;
}
//选择排序
function selectionSort(arr) {
	var len = arr.length;
	var minIndex, temp;
	console.time('选择排序耗时');
	for(var i = 0; i < len - 1; i++) {
		minIndex = i;
		for(var j = i+1; j < len; j++) {
			if(arr[j] < arr[minIndex]) {	//寻找最小值 也可以修改成最大
				minIndex = j;
			}
		}
		temp = arr[i];
		arr[i] = arr[minIndex];
		arr[minIndex] = temp;
	}
	console.timeEnd('选择排序耗时');
	return arr;
};
//插入排序
function insertionSort(arr) {
	
};






var arr = randomArr(1000);
bubbleSort(arr);
selectionSort(arr);