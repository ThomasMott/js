//learning breadth first traversal with tutorial from Brian Holt

const breadthFirstTraverse = (queue, array) => {
  // fill code in here
  if (!queue || !queue.length) retun array;
  
  while (queue.length) {
    const node = queue.shift();
    array.push(node.value); //[A , B]
    if (node.left) queue.push(node.left); //was empty now has left object inside it
    if (node.right) queue.push(node.right); // [left obj, right obj, right obj]
  }
  return array;
}


// unit tests
// do not modify the below code
describe('tests', function() {
  const answer = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K' ];
  
  const tree = {
    value: "A",
    left: {
      value: "B",
      left: {
        value: "D",
        left: {
          value: "G",
          left: null,
          right: null
        },
        right: null
      },
      right: {
        value: "E",
        left: null,
        right: {
          value: "H",
          left: {
            value: "K",
            left: null,
            right: null
          }
        }
      }
    },
    right: {
      value: "C",
      left: {
        value: "F",
        left: {
          value: "I",
          left: null,
          right: null
        },
        right: {
          value: "J",
          left: null,
          right: null
        }
      },
      right: null
    }
  };
  
  render(tree, answer);
  
  it('breadthFirstTraverse', () => {
    expect(breadthFirstTraverse([tree], [])).toEqual(answer);
  });
});
