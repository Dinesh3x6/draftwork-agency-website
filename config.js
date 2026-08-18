// Draftwork Frontend API Configuration
// Local Development: Resolves to http://localhost:8080
// Vercel Production: Points to live Render backend https://draftwork-api.onrender.com

(function () {
  if (typeof window !== 'undefined') {
    window.API_BASE_URL = window.API_BASE_URL || (
      (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
        ? 'http://localhost:8080'
        : 'https://draftwork-api.onrender.com'
    );
  }
})();
