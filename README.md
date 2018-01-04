<div align=center>

![Markdown Exec - Execute commands in your Markdown and keep the output.](.github/banner.svg)

</div>

# Installation

```shell
yarn add markdown-exec --global
```

or

```shell
npm install markdown-exec --global
```

<br><br><br>

# Usage

The `markdown-exec` command takes one single argument: a file containing [XML Comment API](https://github.com/rmariuzzo/xml-comment-api)'s annotations.

```shell
markdown-exec ./README.md
```

The command will process the content of the given file and will search for XML comments that has the following format:

```xml
<!-- markdown-exec() --><!-- /markdown-exec -->
```

## Specify command to execute

**Before:**

```xml
<!-- markdown-exec(cmd:echo '123') --><!-- /markdown-exec -->
```

**After:**

```xml
<!-- markdown-exec(cmd:echo '123') -->123<!-- /markdown-exec -->
```

## Use a regular expression to reduce the command output

**Before:**

```xml
<!-- markdown-exec(cmd:echo 'test123', match:\d+) --><!-- /markdown-exec -->
```

**After:**

```xml
<!-- markdown-exec(cmd:echo 'test123', match:\d+) -->123<!-- /markdown-exec -->
```

## Tests

 - `yarn test` - run all tests once.
 - `yarn test -- --watch` - run all tests and watch for changes.

## Development

To start contributing to this project, please do:

 1. [Fork and clone this repo](https://github.com/rmariuzzo/markdown-exec/fork).
 2. Do your work.
 3. Create a PR.

## Releases

To release this project the following tasks should be done:

 1. Using [np](https://github.com/sindresorhus/np): `np`

---

<div align=center>

Made with :heart: by [Rubens Mariuzzo](https://github.com/rmariuzzo).

[MIT License](LICENSE)

</div>
