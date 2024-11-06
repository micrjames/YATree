import { YATree } from "../YATree";
import { Node } from "../NodeCollection/Node";

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
   });
});
