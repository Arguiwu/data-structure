function Node(data, left, right) {
	this.data = data;
	this.left = left;
	this.right = right;
	this.show = () => {
		return this.data;
	}
};
function BST(){
	this.root = null;
	this.insert = function(data){
		var n = new Node(data, null, null);
		if(this.root == null) {
			this.root = n;
		}else {
			var current = this.root;
			var parent;
			while(true) {
				parent = current;
				if(data < current.data) {
					current = current.left;
					if(current == null) {
						parent.left = n;
						break;
					}
				}else {
					current = current.right;
					if(current == null) {
						parent.right = n;
						break;
					}
				}
			}
		}
	};
	this.getMin = function() {
		var current = this.root;
		while(!(current.left == null)) {
			current = current.left;
		}
		return current.data;
	};
	this.getMax = function() {
		var current = this.root;
		while(!(current.right == null)) {
			current = current.right;
		}
		return current.data;
	};
	this.find = function(data) {
		var current = this.root;
		while(current != null) {
			if(current.data == data) {
				return current;
			}else if(data < current.data) {
				current = current.left;
			}else {
				current = current.right;
			}
		}
		return null;
	};
};
//中序遍历 升序 左边是小值 到root到右
function inOrder(node){
	if(!(node == null)) {
		inOrder(node.left);
		console.log('中序遍历 =>' + node.show());
		inOrder(node.right);
	}
};
//先序遍历 先根 再第二次左右 第三层左右
function preOrder(node) {
	if(!(node == null)) {
		console.log('先序遍历 =>' + node.show());
		preOrder(node.left);
		preOrder(node.right);
	}
};

//后序 先叶子节点（无子节点的） 从左到右 再根
function postOrder(node) {
	if(!(node == null)) {
		preOrder(node.left);
		preOrder(node.right);
		console.log('后序遍历 =>' + node.show());
	}
}


var nums = new BST();
nums.insert(50);
nums.insert(20);
nums.insert(80);
nums.insert(60);
nums.insert(10);

var min = nums.getMin();
var max = nums.getMax();

console.log('最小值=>' + min);
console.log('最大值=>' + max);

var dataNode = nums.find(60);
console.log(dataNode)


// inOrder(nums.root);
// console.log('================');
// preOrder(nums.root);
// console.log('================');
// postOrder(nums.root);