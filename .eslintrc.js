"use strict";

module.exports = {
    "extends": ["eslint:recommended"],
    "plugins": ["node"],
  	"parserOptions": {
  		"ecmaVersion": 2019
  	},
    "env": {"browser": true},
    "globals": {},
      "rules": {
        "node/exports-style": "error",           //`module.exports`と`exports.*`を混ぜて使うと警告します。
        "node/no-deprecated-api": "error",       //Node.jsの非推奨APIを使用すると警告します。
        "node/no-missing-import": "error",       //`import`構文で存在しないファイルを読もうとすると警告します。
        "node/no-missing-require": "error",      //`require()`で存在しないファイルを読もうとすると警告します。
        "node/no-unpublished-bin": "error",      //CLIのエントリポイントが無視リストに入っていた場合に警告します。
        "node/no-unpublished-import": "error",   //`import`構文で公開後に読めなくなるモジュールを読もうとすると警告します。
        "node/no-unpublished-require": "error",  //`require()`で公開後に読めなくなるモジュールを読もうとすると警告します。
        "node/no-unsupported-features": "error", //指定したNode.jsのバージョンでサポートされていない構文を使おうとすると警告します。
        "node/process-exit-as-throw": "error",   //`process.exit()`の実行パスを修正します。
        "node/shebang": "error",                 //シバンの誤りを指摘します。
	    	"brace-style": ["error", "stroustrup", { "allowSingleLine": true }],
	    	"comma-dangle": ["error", "always-multiline"],
    		"comma-spacing": "error",
    		"comma-style": "error",
    		"curly": ["error", "multi-line", "consistent"],
    		"dot-location": ["error", "property"],
    		"handle-callback-err": "off",
    		"indent": ["error", "tab"],
    		"max-nested-callbacks": ["error", { "max": 4 }],
    		"max-statements-per-line": ["error", { "max": 2 }],
    		"no-console": "off",
    		"no-empty-function": "error",
    		"no-floating-decimal": "error",
	    	"no-inline-comments": "error",
	    	"no-lonely-if": "error",
	    	"no-multi-spaces": "error",
	    	"no-multiple-empty-lines": ["error", { "max": 2, "maxEOF": 1, "maxBOF": 0 }],
	    	"no-shadow": ["error", { "allow": ["err", "resolve", "reject"] }],
      	"no-trailing-spaces": ["error"],
	    	"no-var": "error",
    		"object-curly-spacing": ["error", "always"],
    		"prefer-const": "error",
		    "quotes": ["error", "single"],
    		"semi": ["error", "always"],
    		"space-before-blocks": "error",
		    "space-before-function-paren": ["error", {
			    "anonymous": "never",
    			"named": "never",
    			"asyncArrow": "always"
    		}],
	    	"space-in-parens": "error",
	    	"space-infix-ops": "error",
	    	"space-unary-ops": "error",
	    	"spaced-comment": "error",
	    	"yoda": "error"
    },
    "env": {
        "es6": true,
        "node": true
    },
}
