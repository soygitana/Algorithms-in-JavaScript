const tree = {
  name: "John",
  children: [
    {
      name: "John",
      children: [],
    },
    {
      name: "John",
      children: [
        { name: "John", children: [] },
        { name: "Jim", children: [] },
      ],
    },
  ],
};

function printChildrenRecursive(t) {
  if (t.children.length === 0) {
    return;
  }

  t.children.forEach((child) => {
    printChildrenRecursive(child);
    console.log(child.name);
  });
}

console.log(printChildrenRecursive(tree));
