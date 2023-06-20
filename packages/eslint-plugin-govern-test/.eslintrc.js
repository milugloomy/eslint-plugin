module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "commonjs": true,
    "es2021": true
  },
  "overrides": [
    {
      "env": {
        "node": true
      },
      "files": [
        ".eslintrc.{js,cjs}"
      ],
      "parserOptions": {
        "sourceType": "script"
      }
    }
  ],
  "parserOptions": {
    "ecmaVersion": "latest"
  },
  "plugins": [
    "govern"
  ],
  "rules": {
    "govern/ecop-window": ["warn"],
    "govern/get": ["warn", false]
  }
}
