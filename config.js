// Draftwork Frontend API Configuration
// For Local Development: Automatically resolves to http://localhost:8080 or relative origin
// For Vercel Production: Set window.API_BASE_URL to your Render Web Service URL e.g.:
// window.API_BASE_URL = 'https://draftwork-api.onrender.com';

(function () {
  if (typeof window !== 'undefined') {
    window.API_BASE_URL = window.API_BASE_URL || (
      (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
        ? 'http://localhost:8080'
        : ''
    );
  }
})();
