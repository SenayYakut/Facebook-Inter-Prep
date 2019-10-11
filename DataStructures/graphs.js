//implementing graphs with adjacency list in javascript
class Graph{
    constructor(noOfVertices){
        this.noOfVertices=noOfVertices;
        this.AdjList=new Map();

    }
}

addVertex(v){
    this.AdjList.set(v,[]);
}

addEdge(v, w){
    this.AdjList.get(v).push(w);
    thisAdjListget(w).push(v);
}

printGraph(){
    
	// get all the vertices 
	var get_keys = this.AdjList.keys(); 

	// iterate over the vertices 
	for (var i of get_keys){ 
		// great the corresponding adjacency list 
		// for the vertex 
		var get_values = this.AdjList.get(i); 
		var conc = ""; 

		// iterate over the adjacency list 
		// concatenate the values into a string 
		for (var j of get_values) 
			conc += j + " "; 

		// print the vertex and its adjacency list 
		console.log(i + " -> " + conc); 
	} 
} 
// Edge Lists, Adjacency Matrices, Adjacency Lists.


