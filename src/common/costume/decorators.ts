export const ResponseTimeDecorators = () => () => console.log('hi');

function Log(message: string) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    console.log(`{message}: {target.constructor.name}.{propertyKey}`);
  };
}
