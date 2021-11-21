// Is tree unival?
// If each node of the binary tree has the same value, then the binary tree is a single-valued binary tree.
// Only if the given tree is a single-valued binary tree, it returns true; otherwise, it returns false

const tree = {
  name: "John",
  children: [
    {
      name: "Jim",
      children: [],
    },
    {
      name: "Zoe",
      children: [
        { name: "Kyle", children: [] },
        { name: "Sophia", children: [] },
      ],
    },
  ],
};

const isUnival = (root) => {
  if (!root) {
    return true;
  }

  if (root.left && root.left.val !== root.val) {
    return false;
  }

  if (root.right && root.right.val !== root.val) {
    return false;
  }

  return isUnival(root.left) && isUnival(root.right);
};

console.log(isUnival(tree));
