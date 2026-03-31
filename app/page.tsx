export default function HomePage() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      features: [
        "Student profile and fit quiz",
        "5 starter college matches",
        "Basic school-fit explanations",
        "Limited AI advisor access",
      ],
    },
    {
      name: "Starter",
      price: "$19/mo",
      features: [
        "Expanded match list",
        "Saved colleges dashboard",
        "25 AI advisor questions per month",
        "Budget and scholarship guidance",
      ],
    },
    {
      name: "Premium",
      price: "$49/mo",
      features: [
        "Full personalized match report",
        "Unlimited or high-cap AI advising",
        "School comparison tools",
        "Application strategy suggestions",
      ],
    },
  ];

  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#ffffff",
        color: "#111827",
        minHeight: "100vh",
      }}
    >
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "32px 20px 80px",
        }}
      >
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "48px",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div>
            <h1 style={{ margin: 0, fontSize: "28px" }}>College Flow</h1>
            <p style={{ margin: "6px 0 0", color: "#6b7280" }}>
              Personalized college guidance
            </p>
          </div>
          <div>
           <a
  href="https://forms.gle/bwH6wQFTpyC6FM7J9"
  target="_blank"
  rel="noreferrer"
  style={{
    display: "inline-block",
    backgroundColor: "#111827",
    color: "white",
    textDecoration: "none",
    padding: "12px 18px",
    borderRadius: "10px",
    cursor: "pointer",
  }}
>
  Get Free Matches
</a>
          </div>
        </header>

        <section style={{ marginBottom: "60px" }}>
          <h2 style={{ fontSize: "48px", marginBottom: "16px" }}>
            Find colleges that actually fit you.
          </h2>
          <p
            style={{
              fontSize: "20px",
              lineHeight: 1.6,
              maxWidth: "760px",
              color: "#4b5563",
            }}
          >
            College Flow helps students discover schools based on budget,
            major, goals, location, and lifestyle — then gives them guidance
            that feels personal and clear.
          </p>
        </section>

        <section style={{ marginBottom: "60px" }}>
          <h3 style={{ fontSize: "28px", marginBottom: "16px" }}>
            How it works
          </h3>
          <ol style={{ lineHeight: 1.9, fontSize: "18px", color: "#374151" }}>
            <li>Build your student profile</li>
            <li>Get best-fit college matches</li>
            <li>Use AI guidance to compare and decide</li>
          </ol>
        </section>

        <section style={{ marginBottom: "60px" }}>
          <h3 style={{ fontSize: "28px", marginBottom: "20px" }}>Pricing</h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "20px",
            }}
          >
            {plans.map((plan) => (
              <div
                key={plan.name}
                style={{
                  border: "1px solid #e5e7eb",
                  borderRadius: "16px",
                  padding: "24px",
                  boxShadow: "0 6px 18px rgba(0,0,0,0.05)",
                }}
              >
                <h4 style={{ marginTop: 0, fontSize: "24px" }}>{plan.name}</h4>
                <p style={{ fontSize: "32px", fontWeight: 700 }}>{plan.price}</p>
                <ul style={{ paddingLeft: "20px", color: "#4b5563", lineHeight: 1.8 }}>
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: "60px" }}>
          <h3 style={{ fontSize: "28px", marginBottom: "16px" }}>
            Why College Flow
          </h3>
          <p style={{ fontSize: "18px", lineHeight: 1.7, color: "#4b5563" }}>
            Too many students choose schools based on random rankings or pressure.
            College Flow is built to make the process more personal, more practical,
            and less overwhelming.
          </p>
        </section>

        <footer
          style={{
            borderTop: "1px solid #e5e7eb",
            paddingTop: "24px",
            color: "#6b7280",
          }}
        >
          <p>College Flow • Built for students and families</p>
          <p>collegeflowteam@gmail.com</p>
        </footer>
      </section>
    </main>
  );
}
