// Declare module for CSS Modules
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}
