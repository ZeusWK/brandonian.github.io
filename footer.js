const footerHTML = `
  <style>
    html, body {
      margin: 0;
      min-height: 100vh;
    }
    body {
      display: flex;
      flex-direction: column;
    }
    .contact-footer {
      width: 100%;
      margin-top: auto;
      padding: 1.75rem 3rem;
      background-color: #f8fafc;
      border-top: 1px solid #e2e8f0;
      box-sizing: border-box;
      font-family: system-ui, -apple-system, sans-serif;
    }
    .contact-links {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
    }
    .contact-item {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      color: #0f172a;
      text-decoration: none;
      font-size: 0.95rem;
      font-weight: 500;
      user-select: text;
      transition: color 0.15s ease;
    }
    .contact-item:hover {
      color: #b25555;
      text-decoration: underline;
      text-underline-offset: 4px;
    }
    .contact-item::selection,
    .contact-item span::selection {
      background-color: #b25555;
      color: #ffffff;
    }
    @media (max-width: 540px) {
      .contact-footer {
        padding: 1.5rem 1.25rem;
      }
    }
  </style>
  <footer class="contact-footer">
    <div class="contact-links">
      <a href="mailto:bl75@rice.edu" class="contact-item">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect width="20" height="16" x="2" y="4" rx="2"/>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
        </svg>
        <span>bl75@rice.edu</span>
      </a>
      <a href="https://www.linkedin.com/in/bl750/" target="_blank" rel="noopener noreferrer" class="contact-item">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
          <rect width="4" height="12" x="2" y="9"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
        <span>linkedin.com/in/bl750</span>
      </a>
    </div>
  </footer>
`;

document.body.insertAdjacentHTML("beforeend", footerHTML);