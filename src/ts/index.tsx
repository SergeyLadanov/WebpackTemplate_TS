import { createRoot } from 'react-dom/client';
import '../scss/styles.scss';

// Clear the existing HTML content
//document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const root = createRoot(document.getElementById('app'));
root.render(
  <button type="button" className="btn btn-primary me-3" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample">Toggle offcanvas</button>
);