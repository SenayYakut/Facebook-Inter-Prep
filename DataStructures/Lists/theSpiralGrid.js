function printGrid(grid){
    for(let i=0; i<grid.length; i++){
        console.log(grid[i].join(" "));
    }
}

function create2DGrid(size){
    let i=size;
    const grid=[];
    while(i--)grid.push(new Array(size));
    return grid;
}

function createSpiral(n){
    const spiral=create2DGrid(n);
    let currentNumber=1;
    let i=0;
    let j=0;
    let di=0;
    let dj=1;

    while(currentNumber<=n*n){
        spiral[i][j]=currentNumber++;
        if(j+dj===n || i+di===n || j+dj===-1 || spiral [i +di][j+dj]){
            const temD1=di;
            di=dj;
            dj=-tempD1;

        }
      i+=d1;
      j+=dj;  
    }
    return spiral;
}
printGrid(createSpiral(5));