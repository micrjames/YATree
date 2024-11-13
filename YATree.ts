import { Node } from "./NodeCollection/Node";
import { YAQ } from "./YAQ/YAQ";

export class YATree<T> {
   private _root: Node<T> | null;
   private _level: number;

   constructor(rootNode: Node<T> | null = null) {
	  this._root = rootNode;
	  this._level = 0;
   }

   traverseTo(node: Node<T>): Node<T> | null {
	  let front_node: Node<T> | null;
	  const q = new YAQ<Node<T>>();
	  q.enqueue(this._root);
	  while(!q.is_empty) {
		 front_node = q.dequeue();
		 if(front_node?.Key === node?.Key) return front_node;
		 let front_node_children = front_node.children;
		 let front_node_children_size = front_node_children.size;
		 if(front_node_children_size > 0) {
			let front_node_child = front_node_children.next();
			this._level++;
			console.log(this._level);
			while(!front_node_child.done) {
			   q.enqueue(front_node_child.value);
			   front_node_child = front_node_children.next();
			}
		 }
	  }
	  return null;
   }

   // height: maximum depth of subtree node and farthest leaf
   get height(): number {
	  this._level = 0;
	  this.traverseTo(null);
	  return this.level; 
   }

   // level: 1 + num edges between root and node.
   get level(): number {
	  return this._level + 1;
   }

   get root(): Node<T> | null {
	  return this._root;
   }
}
