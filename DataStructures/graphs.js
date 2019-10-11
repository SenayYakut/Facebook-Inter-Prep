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