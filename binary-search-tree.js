class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let newNode = new Node(val);
    if(!this.root){
      this.root = newNode;
      return this;
    }
    let currentNode = this.root;
    while(currentNode){
      if(val === currentNode.val) return;
      if(val < currentNode.val) {
        if(!currentNode.left){
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      }else{
        if(!currentNode.right){
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    let newNode = new Node(val);
    if(!this.root) this.root = newNode;
    else insertBST(this.root, newNode);

    function insertBST(currentNode, newNode){
      if(newNode.val === currentNode.val) return;
      if(newNode.val < currentNode.val) {
        if(!currentNode.left) 
          currentNode.left = newNode;
        else 
          insertBST(currentNode.left, newNode);
      }else{
        if(!currentNode.right) 
          currentNode.right = newNode;
        else 
          insertBST(currentNode.right, newNode);
      }
    }
  }
  
  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let currentNode = this.root;
    while(currentNode) {
      if(currentNode.val === val) return currentNode;
      if(currentNode.val > val) {
        currentNode = currentNode.left;
      }else{
        currentNode = currentNode.right;
      }
    }
    return;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    function findBST(currentNode, val){
      if(!currentNode) return;
      if(currentNode.val === val) {
          return currentNode;
      }else{
        if(currentNode.val > val)
          return findBST(currentNode.left, val);
        else
          return findBST(currentNode.right, val);
      }
    }
    return findBST(this.root, val);
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    const arr = [];
    function traverse(node) {
      arr.push(node.val);
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
    }
    traverse(this.root);
    return arr;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    const arr = [];
    function traverse(node) {
      if(node.left) traverse(node.left);
      arr.push(node.val);
      if(node.right) traverse(node.right);
    }
    traverse(this.root);
    return arr;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    const arr = [];
    function traverse(node) {
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
      arr.push(node.val);
    }
    traverse(this.root);
    return arr;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    const arr = [];
    const queue = [];
    queue.push(this.root);
    while(queue.length){
      let currentNode = queue.shift();
      arr.push(currentNode.val);
      if(currentNode.left) queue.push(currentNode.left);
      if(currentNode.right) queue.push(currentNode.right);
    }
    return arr;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
