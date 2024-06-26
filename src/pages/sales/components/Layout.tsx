interface LayoutProps {
    children: React.ReactNode;
  }
  
  const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
      <div className="grid grid-cols-1 gap-4 p-4 bg-gray-100 min-h-screen">
        {children}
      </div>
    );
  };
  
  export default Layout;
  