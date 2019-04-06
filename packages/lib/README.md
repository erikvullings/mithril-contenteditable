# mithril-contenteditable

Mithril component for a div with editable contents.

## Installation

```bash
npm i mithril mithril-contenteditable
# Also install the typings if you use TypeScript
npm i --save-dev @types/mithril
```

## Usage example

```ts
import { ContentEditable } from 'mithril-contenteditable';
import m from 'mithril';

...

    m(ContentEditable, {
      // Original HTML input
      html: state.html,
      // Returns the updated HTML code
      onchange: html => {
        state.html = html;
        console.log(html);
      },
      // Example to prevent the user from entering commas
      onkeydown: e => {
        if (e.key === ',') {
          e.preventDefault();
        }
      },
      // Replace the base tag, if needed
      tagName: 'div',
      // By default, &amp; etc are replaced by their normal counterpart when loosing focus.
      // cleanupHtml: false,
      // By default, don't allow the user to enter newlines
      // preventNewline: false,
      // By default, select all text when the element receives focus
      // selectAllOnFocus: false,
      // By default, when pasting text, remove all HTML and keep the plain text.
      // pasteAsPlainText: false,
    })

```

## Build instructions

Using `pnpm` (`npm i -g pnpm`), run the following commands:

```bash
pnpm m i
npm start
```
