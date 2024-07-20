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
        if(!this.adjacencyList[start]){
            return;
        }

        const stack = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;

        while(stack.length){
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    stack.push(neighbor)
                }
            })
        }
        return result
    }

    bfs(start){
        if(!this.adjacencyList[start]){
            return;
        }

        const queue = [start];
        const visited = {}
        visited[start] = true;
        const result = [];
        let currentVertex;
        while(queue.length){
            currentVertex = queue.shift();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            })
        }
        return result
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
console.log(undirectedGraph.dfs('A'))
console.log(undirectedGraph.bfs('A'))
console.log(undirectedGraph.adjacencyList)