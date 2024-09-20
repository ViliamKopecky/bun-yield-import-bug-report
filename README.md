# yield import not working in compiled bun

To install dependencies:

```bash
bun install
```

To run the good version:

```bash
bun run good
```

```
$ bun run ./index.tsx
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><!--$--><p style="font-size:14px;line-height:24px;margin:16px 0">Test</p><!--/$-->
```

To run the bad version:

```bash
bun run bad
```

```
$ bun run build && bun run start
$ bun build --compile ./index.tsx --outfile ./dist/index.bun
  [92ms]  bundle  90 modules
 [106ms] compile  ./dist/index.bun
$ ./dist/index.bun
22477 |   return result;
22478 | });
22479 | var render2 = (element, options) => __async(undefined, null, function* () {
22480 |   const suspendedElement = /* @__PURE__ */ import_jsx_runtime.jsx(import_react.Suspense, { children: element });
22481 |   const { default: reactDOMServer } = yield Promise.resolve().then(() => (init_server_node(), exports_server_node));
22482 |   if (Object.hasOwn(reactDOMServer, "renderToReadableStream")) {
                           ^
TypeError: undefined is not an object (evaluating 'Object.hasOwn(reactDOMServer, "renderToReadableStream")')
      at /$bunfs/root/index.bun:22482:20
      at fulfilled (/$bunfs/root/index.bun:22417:28)

Bun v1.1.29 (macOS arm64)
error: script "start" exited with code 1
error: script "bad" exited with code 1
```

This project was created using `bun init` in bun v1.1.29. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
