import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border py-6 md:py-8 mt-10 bg-card text-card-foreground">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <p className="text-sm text-muted-foreground">
          &copy; 2025 Zimeng Yan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
export default Footer;