class UndirectedGraph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = []
        }
    }

    addEdge(vertex1, vertex2) {
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
            this.adjacencyList[vertex1].push(vertex2)
            this.adjacencyList[vertex2].push(vertex1)
        }
    }

    dfs(start){
        if(!this.adjacencyList[start]) return;

        const stack = [start];
        const result = [];
        const visited = new Set();
        while(stack.length) {
            const currentVertex = stack.pop();
            if(!visited.has(currentVertex)) {
                visited.add(currentVertex);
                result.push(currentVertex);

                this.adjacencyList[currentVertex].forEach((neighbor) => {
                    if (!visited.has(neighbor)) {
                        stack.push(neighbor);
                    }
                })
            }
        }
        return result;
    }

    dfsRecursive(start, visited = new Set(), result = []) {
        if(!start || visited.has(start)) return;
        visited.add(start);
        result.push(start);
        for (const neighbor of this.adjacencyList[start]) {
            this.dfsRecursive(neighbor, visited, result);
        }
        return result;
    }

    bfs(start){
        if(!this.adjacencyList[start]) return;

        const queue = [start];
        const result = [];
        const visited = new Set();
        visited.add(start);

        while(queue.length){
            const currentVertex = queue.shift();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach((neighbor) => {
                if(!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            })

        }
        return result;
    }
}

const undirectedGraph = new UndirectedGraph();
undirectedGraph.addVertex('A')
undirectedGraph.addVertex('B')
undirectedGraph.addVertex('C')
undirectedGraph.addVertex('D')
undirectedGraph.addVertex('E')
undirectedGraph.addVertex('F')

undirectedGraph.addEdge('A', 'B')
undirectedGraph.addEdge('A', 'C')
undirectedGraph.addEdge('C', 'B')
undirectedGraph.addEdge('F', 'B')
undirectedGraph.addEdge('D', 'B')
undirectedGraph.addEdge('D', 'F')
undirectedGraph.addEdge('E', 'F')
undirectedGraph.addEdge('E', 'A')
console.log("dfs ===>",undirectedGraph.dfs('A'))
console.log("dfsRecursive ===>",undirectedGraph.dfsRecursive('A'))
console.log("bfs ===>",undirectedGraph.bfs('A'))
console.log(undirectedGraph.adjacencyList)