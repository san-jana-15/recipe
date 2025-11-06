const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Sanjana RVB. Built with passion and React.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
