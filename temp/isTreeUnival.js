// Is tree unival?
// If each node of the binary tree has the same value, then the binary tree is a single-valued binary tree.
// Only if the given tree is a single-valued binary tree, it returns true; otherwise, it returns false

const root = {
    val: 2,
    left: {
        val: 2,
        left: { val: 5, left: 4, right: 5 },
        right: { val: 2, left: 4, right: 4 },
    },
    right: { val: 2, left: 4, right: 6 },
}


const isUnival = root => {

    if (!root) {
        return true
    }

    const { left, right } = root
    

    const isLeftUnival = isUnival(left)
    const isRightUnival = isUnival(right)

    if (!isLeftUnival || !isRightUnival) {
        return false
    }

    if (root.val && left !== left.val || root.val && right !== right.val) {

        return false
    }
    
    return true
}


console.log(isUnival(root))