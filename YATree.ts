import { Node } from "./NodeCollection/Node";
import { YAQ } from "./YAQ/YAQ";

export class YATree<T> {
   private _root: Node<T> | null;
   // leaf: node with no children.

   constructor(rootNode: Node<T> | null = null) {
	  this._root = rootNode;
   }

   traverseTo(node: Node<T> = null) {
	  const q = new YAQ<Node<T>>();
	  q.enqueue(this.root);
	  while(!q.is_empty) {
		 const front_node = q.dequeue();
	  }
   }

   // height: maximum depth of subtree node and farthest leaf
   get height(): number {
	  if(!this._root) return 0;
	  return 0;
   }

   // level: 1 + num edges between root and node.
   get level(): number {
	  if(!this._root) return 0;
	  return 1;
   }

   get root(): Node<T> | null {
	  return this._root;
   }
}
