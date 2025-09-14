class UndirectedGraph {
    constructor() {
        this.adjacencyMatrix = [];
        this.vertices = [];
    }

    addVertex(vertex) {
       this.vertices.push(vertex);

        for (let i = 0; i < this.adjacencyMatrix.length; i++) {
            this.adjacencyMatrix[i].push(0)
        }

        this.adjacencyMatrix.push(new Array(this.vertices.length).fill(0));
    }

    addEdge(vertex1, vertex2) {
        const index1 = this.vertices.indexOf(vertex1)
        const index2 = this.vertices.indexOf(vertex2)
        if(index1 !== -1 && index2 !== -1){
            this.adjacencyMatrix[index1][index2] = 1
            this.adjacencyMatrix[index2][index1] = 1
        }
    }

    printMatrix(){
        console.log(' ', this.vertices.join(' '))
        for (let i = 0; i < this.vertices.length; i++) {
            console.log(this.vertices[i], this.adjacencyMatrix[i].join(' '))
        }
    }

    dfsRecursive(start, visited = new Set(), result = []){
        result.push(start);
        visited.add(start);

        for(let j = 0; j < this.vertices.length; j ++){
            if(this.adjacencyMatrix[start][j] === 1 && !visited.has(j)){
                this.dfsRecursive(j, visited, result)
            }
        }
        return result;
    }

    dfs(start){
        const visited = new Set();
        const result = [];
        const stack = [start];

        while(stack.length){
            const currentVertex = stack.pop();
            if(!visited.has(currentVertex)){
                visited.add(currentVertex);
                result.push(currentVertex);
                for (let i = this.vertices.length - 1; i >= 0; i--) {
                    if (this.adjacencyMatrix[currentVertex][i] === 1 && !visited.has(i)) {
                        stack.push(i);
                    }
                }
            }
        }
        return result;
    }

    bfs(start){
        const queue = [start];
        const visited = new Set();
        visited.add(start);
        const result = [];

        while(queue.length){
            const currentVertex = queue.shift();
            result.push(currentVertex);

            for(let i = 0; i < this.adjacencyMatrix.length; i ++){
                if(this.adjacencyMatrix[start][i] === 1 && !visited.has(i)){
                    queue.push(i);
                    visited.add(i);
                }
            }
        }
        return result;
    }
}

const undirectedGraph = new UndirectedGraph();
undirectedGraph.addVertex('A')
undirectedGraph.addVertex('B')
undirectedGraph.addVertex('C')

undirectedGraph.addEdge('A', 'B')
undirectedGraph.addEdge('A', 'C')
undirectedGraph.addEdge('C', 'B')
undirectedGraph.printMatrix()

console.log('dfsRecursive ===>', undirectedGraph.dfsRecursive(0))
console.log('bfs ===>', undirectedGraph.bfs(0))
console.log('dfs ===>', undirectedGraph.dfs(0))