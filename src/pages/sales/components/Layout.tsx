interface LayoutProps {
    children: React.ReactNode;
  }
  
  const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
      <div className="p-4 bg-gray-100 min-h-screen">
        {children}
      </div>
    );
  };
  
  export default Layout;