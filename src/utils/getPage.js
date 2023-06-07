import { resolve } from "path";

const pageName = (page) => resolve("public/pages", page + ".html");

export default pageName;
