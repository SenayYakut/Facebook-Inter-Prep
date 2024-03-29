function bfs(graph, root){
    var nodesLen={};
    for(var i=0; i<graph.length; i++){
        nodesLen[i]=infinity;   
    }
    nodesLen[root]=0;

    var queue=[root];
    var current;

    while(queue.length !=0){
        current=queue.shift();

        var curConnected=graph[current];
        var neighborIdx=[];
        var idx=curConnected.indexOf(1);
        while(idx !=-1){
            neighborIdx.push(idx);
            idx=curConnected.indexOf(1,idx+1);
        }
        for(var j=0; j<neighborIdx.length; j++){
            if(nodesLen[neighborIdx[j]]==infinity){
                nodesLen[neightborIdx[j]]=nodesLen[current]+1;
                queue.push(neighborIdx[j]);
            }
        }
    }
    return nodesLen;
};