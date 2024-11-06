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

			   const rootChild = treeRoot.children.next().value;
			   do {
				  nLevel++;
			   } while(rootChild);
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
			let treeRootFirstChild: Node<number>;
			let treeRootLastChild: Node<number>;
			let treeRootChildrenKeys: number[];
			let treeRootChildCollection: NodeCollection<number>;
			let treeRootChildrenKey2: number;
			let treeRootChildrenKey3: number;
			let treeRootChildrenKeysSize: number;
			let treeRootChildrenSize: number;
			let height: number;
			let level: number;
			beforeAll(() => {
			   nodeKeyValue = 1;
			   treeRootChildrenKey2 = 2
			   treeRootChildrenKey3 = 3;
			   treeRootChildrenKeys = [treeRootChildrenKey2, treeRootChildrenKey3];
			   treeRootChildrenKeysSize = treeRootChildrenKeys.length;
			   treeRootChildCollection = new NodeCollection(new Node(treeRootChildrenKeys[0]),
															new Node(treeRootChildrenKeys[1]));
			   tree = new YATree(new Node(nodeKeyValue,
										  treeRootChildCollection.item(0),
										  treeRootChildCollection.item(1)
								));
			   treeRoot = tree.root;
			   treeRootChildren = treeRoot.children;
			   treeRootChildrenSize = treeRootChildren.size;
			   height = tree.height;
			   level = tree.level;
			   nLevel++;nHeight++;
			   treeRootFirstChild = treeRootChildren.next().value;
			   treeRootLastChild = treeRootChildren.next().value;
			});
			test("Should have children.", () => {
			   expect(treeRootChildren).toBeDefined();
			});
			test(`Should have ${treeRootChildrenKeysSize} children.`, () => {
			   expect(treeRootChildrenSize).toBe(treeRootChildrenKeysSize);
			});
			test(`Should have ${treeRootChildrenKey2} as the key of the first child node.`, () => {
			   const treeRootFirstChildKey = treeRootFirstChild.Key;
			   expect(treeRootFirstChildKey).toBe(treeRootChildrenKey2);
			});
			test(`Should have ${treeRootChildrenKey3} as the key of the second/last child node.`, () => {
			   const treeRootLastChildKey = treeRootLastChild.Key;
			   expect(treeRootLastChildKey).toBe(treeRootChildrenKey3);
			});
			test("Should have the children at the level of one more than at the root node.", () => {
			   const childLevel = level + 1;
			   expect(childLevel).toBe(nLevel);
			});
			test("Should have ${treeRootFirstChild} as the first child sibling at that level.", () => {
			   const firstChild = treeRootChildCollection.next().value;
			   expect(treeRootFirstChild).toEqual(firstChild);
			});
			test("Should have ${treeRootLastChild} as the second/last child sibling at that level.", () => {
			   const lastChild = treeRootChildCollection.next().value;
			   expect(treeRootLastChild).toEqual(lastChild);
			});
			test("Should have height of one more than at the root node", () => {
			   const childHeight = height + 1;
			   expect(childHeight).toBe(nHeight);
			});
		 });
	  });
   });
});
