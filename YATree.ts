import { Node } from "./Node";

export class YATree<T> {
   private root: Node<T> | null;
   private _height: number;
   private _level: number;
   // leaf: node with no children.

   constructor() {
	  this.root = null;
	  this._height = 0;
	  this._level = 0;
   }

   // height: maximum depth of subtree node and farthest leaf
   get height(): number {
	if(!this.root) return 0
   }

   // level: 1 + num edges between root and node.
   get level(): number {
	  if(!this.root) return 0
   }
}






