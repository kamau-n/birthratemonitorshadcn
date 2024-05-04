import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { rules } from "eslint-plugin-react/configs/all";


export default [
  js.configs.recommended,
  {

  rules:{
    "no-unused-vars": "error",
    "no-undef": "error",
    "no-unused-expressions": "error",
    

    

  }
}
];