import React from 'react';
import { Mail } from 'lucide-react';

// LinkedIn SVG Icon Component
export const Linkedin = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20" {...props}>
    <path fill="currentColor" d="M17.04 17.043h-2.962v-4.64c0-1.107-.023-2.531-1.544-2.531c-1.544 0-1.78 1.204-1.78 2.449v4.722H7.793V7.5h2.844v1.3h.039c.397-.75 1.364-1.54 2.808-1.54c3.001 0 3.556 1.974 3.556 4.545v5.238ZM4.447 6.194c-.954 0-1.72-.771-1.72-1.72s.767-1.72 1.72-1.72a1.72 1.72 0 0 1 0 3.44Zm1.484 10.85h-2.97V7.5h2.97v9.543ZM18.521 0H1.476C.66 0 0 .645 0 1.44v17.12C0 19.355.66 20 1.476 20h17.042c.815 0 1.482-.644 1.482-1.44V1.44C20 .646 19.333 0 18.518 0h.003Z"></path>
  </svg>
);

// TikTok SVG Icon Component
export const Tiktok = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path fill="currentColor" d="M20.357 7.75a.537.537 0 0 0-.495-.516a4.723 4.723 0 0 1-2.415-.938a4.85 4.85 0 0 1-1.887-3.3a.538.538 0 0 0-.517-.496h-2.108a.517.517 0 0 0-.517.527v12.59a2.794 2.794 0 0 1-2.974 2.762a2.815 2.815 0 0 1-2.51-3.711A2.836 2.836 0 0 1 9.93 12.78a.506.506 0 0 0 .558-.506V9.807s-.896-.063-1.202-.063a5.271 5.271 0 0 0-4.101 1.93a5.789 5.789 0 0 0-1.37 2.52a5.862 5.862 0 0 0 2.14 6.072A5.926 5.926 0 0 0 9.591 21.5a5.946 5.946 0 0 0 4.207-1.719a5.841 5.841 0 0 0 1.75-4.133V8.71a7.844 7.844 0 0 0 4.218 1.613a.517.517 0 0 0 .548-.527V7.751z"></path>
  </svg>
);


function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border py-6 md:py-8 mt-10 bg-card text-card-foreground">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-4">

        {/* Left side: Copyright */}
        <p className="text-sm text-muted-foreground text-center md:text-left order-2 md:order-1">
          &copy; {currentYear} Zimeng Yan. Weston, FL.
        </p>

        {/* Right side: Social Links and Text */}
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-6 gap-y-2 order-1 md:order-2">
          <a
            href="mailto:amyyan189@gmail.com"
            className="flex items-center text-muted-foreground hover:text-primary transition-colors text-sm group"
            aria-label="Email Amy Yan at amyyan189@gmail.com"
          >
            <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
            <span>
              amyyan189@gmail.com
            </span>
          </a>

          <div className="flex items-center gap-x-3">
            <a
              href="https://www.linkedin.com/in/amy-yan-28ba46327"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/amy-yan-28ba46327"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary"
              aria-label="LinkedIn"
            >
              <p className="text-sm text-muted-foreground">
                Linkedin
              </p>
            </a>

            <a
              href="https://www.tiktok.com/@yolkifirstaid?_t=ZG-90TRlh9Ic6q&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary"
              aria-label="TikTok"
            >
              <Tiktok className="h-5 w-5" />
            </a>
            <a
              href="https://www.tiktok.com/@yolkifirstaid?_t=ZG-90TRlh9Ic6q&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary"
              aria-label="TikTok"
            >
              <p className="text-sm text-muted-foreground">
                TikTok Passion Project: @yolkifirstaid
              </p>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
