class Node { // Node class for binary tree, this is the basic building block of a binary tree
  constructor(data, left = null, right = null) { // data is the value of the node, left and right are the left and right children of the node
    this.data = data; // data of the node
    this.left = left; // left child of the node
    this.right = right; // right children of the node
  }
}

class BST { // Binary Search Tree class which is a binary tree with the following properties:
  constructor() { // 1. The left subtree of a node contains only nodes with keys lesser than the node’s key.
    this.root = null;
  }

  insert(data) { // 2. The right subtree of a node contains only nodes with keys greater than the node’s key.
    const node = this.root;  // 3. The left and right subtree each must also be a binary search tree.
    if (node === null) { // 4. There must be no duplicate nodes.
      this.root = new Node(data); // 5. The tree must be a binary tree.
      return; 
    } else { // If the root node is not null, then we will have to find the correct position to insert the node
      const searchTree = function(node) { // This function will search for the correct position to insert the node
        if (data < node.data) { // If the data is less than the current node's data, then we will have to go to the left subtree
          if (node.left === null) { // If the left child of the node is null, then we will insert the node there
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }

  find(data) {
    let current = this.root;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current;
  }

  // Inorder traversal (Left, Root, Right)
  inorder(node = this.root, result = []) {
    if (node !== null) {
      this.inorder(node.left, result);
      result.push(node.data);
      this.inorder(node.right, result);
    }
    return result;
  }

  // Reverse inorder traversal (Right, Root, Left)
  reverseInorder(node = this.root, result = []) {
    if (node !== null) {
      this.reverseInorder(node.right, result);
      result.push(node.data);
      this.reverseInorder(node.left, result);
    }
    return result;
  }
  print() {
    let result = '';
    let queue = [];
    if (this.root !== null) {
      queue.push(this.root);
      while(queue.length > 0) {
        let levelSize = queue.length;
        let level = '';
        while(levelSize > 0) {
          let node = queue.shift();
          level += node.data.toString() + ' ';
          if (node.left !== null) {
            queue.push(node.left);
          }
          if (node.right !== null) {
            queue.push(node.right);
          }
          levelSize--;
        }
        result = level + '\n' + result;
      }
    }
    console.log(result);
  }
}


let bst = new BST();
bst.insert(10);
bst.insert(20);
bst.insert(5);
bst.insert(4);
bst.insert(3);
bst.insert(7);
bst.insert(6);
bst.insert(1);
bst.insert(2);

console.log(bst.inorder());
console.log(bst.reverseInorder());

bst.print();
bst.print();