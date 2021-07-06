// children.filter possibilita encontrar algum elemento específico que foi passado como children
export default function If(props) {
  const { test, children } = props;

  const elseChild = children.filter((child) => child.type && child.type.name === 'Else')[0];

  const ifChildren = children.filter((child) => child !== elseChild);

  if (test) {
    return ifChildren;
  } if (elseChild) {
    return elseChild;
  }
  return false;
}

export const Else = (props) => props.children;
