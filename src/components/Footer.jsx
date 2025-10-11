import React from 'react';
import { Mail } from 'lucide-react'; 


function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border py-6 md:py-8 mt-10 bg-card text-card-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Zimeng Yan. Weston, FL.
          </p>
          
          <a
            href="mailto:amyyan189@gmail.com"
            className="flex items-center text-muted-foreground hover:text-primary transition-colors text-sm group"
            aria-label="Email Amy Yan at amyyan189@gmail.com"
          >
            <Mail className="h-5 w-5 mr-2 flex-shrink-0 transition-colors group-hover:text-primary" />
            <span className="group-hover:text-primary transition-colors">
              amyyan189@gmail.com
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;