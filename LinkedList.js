function Node(element) {
	this.element = element;		//节点数据
	this.next = null;			//下个节点的链接
	this.previous = null;		//上一个节点的链接
};
function LList() {
	this.head = new Node('head');
	this.head.next = this.head;
	this.find = function(item) {			//查找链表 返回改数据节点
		var currNode = this.head;
		while(currNode.element != item) {
			currNode = currNode.next;
		}
		return currNode;
	};
	this.insert = function(newElement, item) {
		var newNode = new Node(newElement);
		var current = this.find(item);
		newNode.next = current.next;		//将新节点的next指向查找的next节点
		newNode.previous = current;			//将新节点的previous指向查找的
		current.next = newNode;				//然后查找的next执行新节点
	};
	this.findPrevious = function(item) {	//查找某个元素的上一个节点 双向链表不需要
		var currNode = this.head;
		while(!(currNode.next == null) && (currNode.next.element) != item) {
			currNode = currNode.next;
		}
		return currNode;
	};
	//这是单向链表的remove
	// this.remove = function(item) {
	// 	var prevNode = this.findPrevious(item);
	// 	if(!(prevNode.next == null)) {
	// 		prevNode.next = prevNode.next.next;
	// 	}
	// };
	this.remove = function(item) {
		var currNode = this.find(item);
		if(!(currNode.next == null)) {
			currNode.previous.next = currNode.next;		//把目标的上节点的next指向目标的next
			currNode.next.previous = currNode.previous;	//把目标的下节点的prev指向目标的prev
			currNode.next = null;
			currNode.previous = null;
		}
	};
	this.findLast = function() {
		var currNode = this.head;
		while(!(currNode.next == null) && !(currNode.next.element == "head")) {
			currNode = currNode.next;
		}
		return currNode;
	};
	//反序显示
	this.disReverse = function() {
		var currNode = this.head;
		currNode = this.findLast();
		while(!(currNode.previous == null)) {
			console.log(currNode.element);
			currNode = currNode.previous;
		}
	};
	//正序显示
	this.display = function() {
		var currNode = this.head;
		while(!(currNode.next == null) && !(currNode.next.element == "head")) {
			console.log(currNode.next.element);
			currNode = currNode.next;
		}
	};
	//自定义的属性 有问题貌似
	this.findStep = function(n, item) {
		var currNode = this.find(item);
		while( n > 0) {
			currNode = currNode.next;
			n--;
		}
		if(currNode.element == 'head') {
			console.log('我是特殊？' + item)
			return currNode.next;
		}
		return currNode;
	};
};
function Josephs(n, m) {
	var users = new LList();
	var a = 'head';
	for(var i = 1; i < n + 1; i++) {
		users.insert('user' + i, a);
		a = 'user' + i;
	};
	var currUser = 'user1';
	var l = 2;
	for(var j = n; j >= m -1; j--) {
		var killer = users.findStep(m -l, currUser);
		l = 1;
		currUser = killer.next.element;
		console.log(currUser)
		users.remove(killer.element);
	};
};
Josephs(40, 3);