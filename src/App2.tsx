interface props {
  length: number;
}

function identity<T extends props>(arg: T): T {
  console.log(arg.length);
  return arg;
}
function identity2<T extends props>(arg: T): T {
  console.log(arg.length);
  return arg;
}
export default identity;
