// 타입스크립트로 map 함수 구현
function map<T, U>(array: T[], f: (item: T) => U): U[] {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result[i] = f(array[i]);
  }
  return result;
}

let arr = [1, 2, 3, 4, 5];
let ret = map(arr, (elem) => elem * 2);
console.log(ret);

//

type TreeNode = {
  value: string;
};

type LeafNode = TreeNode & {
  isLeaf: true;
};

type InnerNode = TreeNode & {
  child: [TreeNode] | [TreeNode, TreeNode];
};

let a: TreeNode = {
  value: "first",
};

let b: LeafNode = {
  value: "last",
  isLeaf: true,
};

let c: InnerNode = {
  value: "second",
  child: [b],
};
