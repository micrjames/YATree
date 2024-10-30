import { NodeCollection } from "./NodeCollection";

export class Node<T> {
   private _Key: T;
   private _children: NodeCollection<T>;

   constructor(data?: T, ...children: Array<Node<T>>) {
	  this._Key = data;
	  this._children = new NodeCollection(...children);
   }

   addChild(child: Node<T>) {
	  const childrenArr = Array.from({length: this._children.size}, (_, idx) => this._children.item(idx));
	  const newChildrenArr = [...childrenArr, child];
	  this._children = new NodeCollection(...newChildrenArr); 
   }
   get Key(): T {
	  return this._Key;
   }
   get children(): NodeCollection<T> {
	  return this._children;
   }
}
