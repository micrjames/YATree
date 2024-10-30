import { YATree } from "../YATree";

describe("A YATree", () => {
   let tree: YATree<number>;
   beforeAll(() => {
	  tree = new YATree();
   });
   describe("Created", () => {
	  test.todo("Should exist.");
	  test.todo("Should have a single node.");
	  test.todo("Should only exist as the 'root node'.");
	  test.todo("Should have a 'level' of 1.");
	  test.todo("Should have a 'height' of 1.");
   });
});
/*
	let rootNode = new Node<string>(‘Root’);
	let child1 = new Node<string>(‘Child 1’);
	let child2 = new Node<string>(‘Child 2’);
	let subChild = new Node<string>(‘Sub Child’);

	// Add child nodes
	rootNode.addChild(child1);
	rootNode.addChild(child2);
	child1.addChild(subChild);
*/
