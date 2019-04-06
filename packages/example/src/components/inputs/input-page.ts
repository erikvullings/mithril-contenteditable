import { CodeBlock } from 'mithril-materialized';
import { ContentEditable } from 'mithril-contenteditable';
import m from 'mithril';

export const InputPage = () => {
  const state = {
    html: '<b>Edit me, please...</b>',
  };
  return {
    view: () =>
      m('.col.s12', [
        m('h2.header', 'ContentEditable'),

        m(ContentEditable, {
          html: state.html,
          onchange: html => {
            state.html = html;
            console.log(html);
          },
          onkeydown: e => {
            if (e.key === ',') {
              e.preventDefault();
            }
          },
          tagName: 'div',
          // By default, &amp; etc are replaced by their normal counterpart when loosing focus.
          // cleanupHtml: false,
          // By default, don't allow the user to enter newlines
          // preventNewline: false,
          // By default, select all text when the element receives focus
          // selectAllOnFocus: false,
          // By default, when pasting text, remove all HTML and keep the plain text.
          // pasteAsPlainText: false,
        }),

        m(CodeBlock, {
          code: `import { ContentEditable } from 'mithril-contenteditable';
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
    }),
`,
        }),
      ]),
  };
};
