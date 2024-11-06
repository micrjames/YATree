import { YATree } from "../YATree";
import { Node } from "../NodeCollection/Node";
import {NodeCollection} from "../NodeCollection/NodeCollection";

describe("A YATree", () => {
   describe("Created", () => {
	  let nLevel: number;
	  let nHeight: number;
	  beforeAll(() => {
		 nLevel = 0;
		 nHeight = 0;
	  });
	  describe("With no root node", () => {
		 let tree: YATree<number>;
		 let treeRoot: Node<number>;
		 let height: number;
		 let level: number;
		 beforeAll(() => {
			tree = new YATree();
			treeRoot = tree.root;
			height = tree.height;
			level = tree.level;
		 });
		 test("Should exist.", () => {
			expect(tree).toBeDefined();
		 });
		 test("Should have no nodes.", () => {
			expect(treeRoot).toBeNull();
		 });
		 test("Should have no Key value.", () => {
			const nodeKey = treeRoot?.Key;
			expect(nodeKey).toBeUndefined();
		 });
		 test(`Should have a 'level' of ${nLevel}.`, () => {
			expect(level).toBe(nLevel);
		 });
		 test(`Should have a 'height' of ${nHeight}.`, () => {
			expect(height).toBe(nHeight);
		 });
	  });
	  describe("With root node", () => {
		 describe("Without children", () => {
			let nodeKeyValue: number;
			let tree: YATree<number>;
			let treeRoot: Node<number>;
			let height: number;
			let level: number;
			beforeAll(() => {
			   nodeKeyValue = 1;
			   tree = new YATree(new Node(nodeKeyValue));
			   treeRoot = tree.root;
			   height = tree.height;
			   level = tree.level;

			   const rootFirstChild = treeRoot.children.next().value;
			   do {
				  nLevel++;
			   } while(rootFirstChild);
			});
			test("Should exist.", () => {
			   expect(tree).toBeDefined();
			});
			test("Should have a node.", () => {
			   expect(treeRoot).not.toBeNull();
			});
			test("Should have the Key value.", () => {
			   const nodeKey = treeRoot?.Key;
			   expect(nodeKey).toBe(nodeKeyValue);
			});
			test(`Should have a 'level' of ${nLevel}.`, () => {
			   expect(level).toBe(nLevel);
			});
			test(`Should have a 'height' of ${nHeight}.`, () => {
			   expect(height).toBe(nHeight);
			});
		 });
		 describe("With children", () => {
			let nodeKeyValue: number;
			let tree: YATree<number>;
			let treeRoot: Node<number>;
			let treeRootChildren: NodeCollection<number>;
			let treeRootChildrenKeys: number[];
			let treeRootChildrenKeysSize: number;
			let treeRootChildrenSize: number;
			let height: number;
			let level: number;
			beforeAll(() => {
			   nodeKeyValue = 1;
			   treeRootChildrenKeys = [2, 3];
			   treeRootChildrenKeysSize = treeRootChildrenKeys.length;
			   tree = new YATree(new Node(nodeKeyValue,
										  new Node(treeRootChildrenKeys[0]),
			   							  new Node(treeRootChildrenKeys[1])
								));
			   treeRoot = tree.root;
			   treeRootChildren = treeRoot.children;
			   treeRootChildrenSize = treeRootChildren.size;
			   height = tree.height;
			   level = tree.level;
			});
			test("Should have children.", () => {
			   expect(treeRootChildren).toBeDefined();
			});
			test(`Should have ${treeRootChildrenKeysSize} children.`, () => {
			   expect(treeRootChildrenSize).toBe(treeRootChildrenKeysSize);
			});
			test.todo(`Should have ${treeRootChildrenKeys[0]} as the key of the first child node.`);
			test.todo(`Should have ${treeRootChildrenKeys[1]} as the key of the second/last child node.`);
			test.todo("Should have the children at the level of one more than at the root node.");
			test.todo("Should have ${treeRootChildrenKeys[0]} as the first child sibling at that level.");
			test.todo("Should have ${treeRootChildrenKeys[1]} as the second/last child sibling at that level.");
			test.todo("Should have height of one more than at the root node");
		 });
	  });
   });
});
