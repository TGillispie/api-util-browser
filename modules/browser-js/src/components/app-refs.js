import { com } from '../dom-lib'
import javascriptLogo from '/javascript.svg'

export const appRefs = com((el) => {
  el.innerHTML = `
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
  `
})
