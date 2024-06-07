// Import our custom CSS
// Example https://github.com/twbs/examples/tree/main/webpack
import '../scss/styles.scss';

// Import only the Bootstrap components we need
import { Popover } from 'bootstrap';

// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]')
  .forEach(popover => {
    new Popover(popover)
  })
