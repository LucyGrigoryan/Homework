
//Task 1

var treeNodes = [
    { id: 0, parrent: null },
    { id: 1, parrent: 0 },
    { id: 2, parrent: 0 },
    { id: 3, parrent: 1 },
    { id: 4, parrent: 1 },
    { id: 5, parrent: 2 },
    { id: 6, parrent: 4 },
]

function nodesTree(array, tree = {}) {
    for (let node of array) {
        array.shift();
        if (node.parrent === null) {
            tree[node.id] = {};
        } else {
            for (let key in tree) {
                if (node.parrent === key)
                    tree[key][node.id] = {};
                break;
            } nodesTree(array, tree[node.id])
        }
    } return tree;
}
console.log(nodesTree(treeNodes));


// task 2

var treeNodes = [
    { id: 0, children: [1, 2] },
    { id: 1, children: [3, 4] },
    { id: 2, children: [5] },
    { id: 3, children: [] },
    { id: 4, children: [6] },
    { id: 5, children: [] },
    { id: 6, children: [] },
]


function nodesTree(array, tree = {}, current = array[0]) {
    tree[current.id] = {};
    for (let child of current.children) {
        const fillteredChild = array.find(function(val) {
            return val.id === child
        })
        nodesTree(array, tree[current.id], fillteredChild);
    }
    return tree;
}
console.log(nodesTree(treeNodes));
