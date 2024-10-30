import { YATree } from "../YATree";
import { Node } from "../NodeCollection/Node";

describe("A YATree", () => {
   let tree: YATree<number>;
   beforeAll(() => {
	  tree = new YATree();
   });
   describe("Created", () => {
	  let treeRoot: Node<number>;
	  let height: number;
	  let level: number;
	  beforeAll(() => {
		 treeRoot = tree.root;
		 height = tree.height;
		 level = tree.level;
	  });
	  describe("With no nodes", () => {
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
		 test("Should have a 'level' of 0.", () => {
			expect(level).toBe(0);
		 });
		 test("Should have a 'height' of 0.", () => {
			expect(height).toBe(0);
		 });
	  });
   });
});
