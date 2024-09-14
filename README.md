# stylus/scss + stylelint-config-clean-order = ❤️

> Inspired by [@cedric-ruiu/stylelint-config](https://github.com/Cedric-ruiu/stylelint-config)

- Based on Stylelint v16
- Support lint Sass language (extend `stylelint-config-standard-scss`)
- Support lint Stylus language (extend `stylelint-stylus/standard`)
- Support lint HTML files (extend stylelint-config-html)
- Support lint Vue files (including Sass, extend stylelint-config-html)
- Support Tailwind rules
- Support UnoCSS rules
- Logical sorting properties (A reasonably derivative version based on `stylelint-config-clean-order`)
- Reasonable defaults, best practices, only one-line of config

> Requirements
> - Stylelint v16.0.0 and above

## Installation

```sh
npm install --save-dev stylelint @mutoe/stylelint-config

yarn add --dev stylelint @mutoe/stylelint-config

pnpm add --save-dev stylelint @mutoe/stylelint-config

bun add --dev stylelint @mutoe/stylelint-config
```

## Usage

Set your stylelint config to:

```json
{
  "extends": "@mutoe/stylelint-config"
}
```

You can easily [extend](https://github.com/stylelint/stylelint/blob/master/docs/user-guide/configure.md#extends) the config to your needs.
