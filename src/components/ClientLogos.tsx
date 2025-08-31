const ClientLogos = () => {
  const clients = [
    { name: "Tech Corp", placeholder: "TECH CORP" },
    { name: "Global Industries", placeholder: "GLOBAL IND" },
    { name: "Finance Plus", placeholder: "FINANCE+" },
    { name: "Health Systems", placeholder: "HEALTH SYS" },
    { name: "Retail Chain", placeholder: "RETAIL CO" },
    { name: "Manufacturing Co", placeholder: "MFG GROUP" }
  ];

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Trusted by Leading Companies
          </h2>
          <p className="text-muted-foreground">
            Join 100+ companies that trust NLR Global Services
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 h-24 flex items-center justify-center hover:shadow-lg transition-shadow"
            >
              <span className="text-muted-foreground font-semibold text-sm">
                {client.placeholder}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;