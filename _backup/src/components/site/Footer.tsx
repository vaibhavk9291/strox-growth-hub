const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="container">
      <div className="grid md:grid-cols-4 gap-8 mb-12">
        <div>
          <a href="#" className="flex items-center gap-2 font-display font-bold text-lg mb-4">
            <img src="/logo.jpg" alt="Intellobyte" className="w-8 h-8 rounded-full object-cover" />
            <span>Intellobyte</span>
          </a>
          <p className="text-sm text-muted-foreground">Premium web design & branding studio building digital experiences that convert.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-foreground">Web Design</a></li>
            <li><a href="#" className="hover:text-foreground">Branding</a></li>
            <li><a href="#" className="hover:text-foreground">SEO</a></li>
            <li><a href="#" className="hover:text-foreground">E-commerce</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-foreground">About</a></li>
            <li><a href="#" className="hover:text-foreground">Work</a></li>
            <li><a href="#" className="hover:text-foreground">Process</a></li>
            <li><a href="#" className="hover:text-foreground">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Get in touch</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>hello@intellobyte.com</li>
            <li>+1 (555) 123-4567</li>
            <li>Worldwide · Remote</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Intellobyte. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground">Privacy</a>
          <a href="#" className="hover:text-foreground">Terms</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
