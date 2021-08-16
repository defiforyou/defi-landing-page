/* eslint-disable no-prototype-builtins */
export default async (property) => {
  while (!window.hasOwnProperty(property)) { await new Promise(resolve => setTimeout(resolve, 200)) }
}
