import { injectGlobal } from 'styled-components'

export default function injectGlobalStyles() {
  injectGlobal`
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }
  `
}
