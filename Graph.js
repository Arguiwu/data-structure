/*
	vertex类保存顶点和变 
	label标识顶点
	wasVisited标识这个定点是否被访问过
*/
function Vertex(label) {
	this.label = label;
}
function Graph(v) {
	this.vertices = v;		//顶点总数			
	this.edges = 0;				
	this.adj = [];			//图数组
	this.marked = [];		//顶点是否被访问数组
	//初始化设置 一个长度为 vertices的数组 每个元素中包含一个 空数组
	for(var i = 0; i< this.vertices; i++) {
		this.adj[i] = [];
		this.marked[i] = false;
	}
	//添加关联 V,W为不同的顶点 
	this.addEdge = function(v, w) {
		this.adj[v].push(w);
		this.adj[w].push(v);
	};
	//打印顶点之间的关联
	this.showGraph = function() {
		for(var i = 0; i < this.vertices; i++) {
			console.log( i + '[' + this.adj[i] + ']')
			for(var j = 0; j < this.adj[i].length; j++) {
				console.log('顶点 ' + i + '连接顶点 ' + this.adj[i][j]);
			}
		}
	};

	//深度优先搜索
	this.dfs = function(v) {
		this.marked[v] = true;
		if(this.adj[v] != undefined) {
			console.log('访问顶点:' + v);
		}
		for(var w in this.adj[v]) {
			if(!this.marked[w]) {
				this.dfs(w);
			}
		}
	};
};

var g = new Graph(5);
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,3);
g.addEdge(2,4);
g.showGraph();
g.dfs(0);