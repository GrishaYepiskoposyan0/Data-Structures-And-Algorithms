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
        for (let i = 0; i < this.adjacencyMatrix.length; i++) {
            console.log(this.vertices[i], this.adjacencyMatrix[i].join(' '))
        }
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