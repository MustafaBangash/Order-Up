m = 6  # width
n = 6  # height
maze = [
    [1, 1, 1, 1, 1, 1],
    [1, 0, 0, 1, 0, 1],
    [1, 1, 0, 1, 0, 1],
    [1, 0, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1]
]
graph = {}
for i in range(n):
    for j in range(m):
        graph[int(i*n + j + 1)] = []
        if maze[i-1][j] == 0:
            graph[i*n + j].append((i-1)*n + j)
        if maze[i+1][j] == 0:
            graph[i*n + j].append((i+1)*n + j)
        if maze[i][j-1] == 0:
            graph[i*n + j].append((i)*n + j-1)
        if maze[i][j+1] == 0:
            graph[i*n + j].append((i)*n + j+1)
visited = []
queue = []

print(graph)


def bfs(visited, graph, node):
    visited.append(node)
    queue.append(node)

    while queue:
        s = queue.pop(0)
        print(s, end=" ")

        for neighbour in graph[s]:
            if neighbour not in visited:
                visited.append(neighbour)
                queue.append(neighbour)


bfs(visited, graph, 8)
