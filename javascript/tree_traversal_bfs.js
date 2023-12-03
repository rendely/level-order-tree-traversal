class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function levelOrderTraversal(root) {

  if (!root) return [];

  const traversal = [];
  const nextNodes = [root];

  while (nextNodes.length > traversal.length){
    const thisNode = nextNodes[traversal.length];
    traversal.push(thisNode.value);
    if (thisNode.left) nextNodes.push(thisNode.left);
    if (thisNode.right) nextNodes.push(thisNode.right);

  }

  return traversal;

}

if (require.main === module) {
  let root = new Node(1, new Node(2), new Node(3));
  // add your own tests in here
  console.log("Expecting: [[1], [2, 3]]");
  console.log(levelOrderTraversal(root));

  console.log("");

  root = new Node(10, new Node(20, new Node(9), new Node(22)), new Node(30));

  console.log("Expecting: [[10], [20, 30], [9, 22]]");
  console.log(levelOrderTraversal(root));
}

module.exports = {
  Node,
  levelOrderTraversal
};

// Please add your pseudocode to this file
// And a written explanation of your solution
// If the root is empty return the value
// If the root has any children, add those to the start of the list
// Go through the children's children next adding them to the list
// Keep track of already visited nodes and need to visit nodes