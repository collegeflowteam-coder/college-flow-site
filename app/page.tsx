export default function CollegeFlowWebsite() {
  const packages = [
    {
      name: "Free",
      price: "$0",
      subtitle: "Start here",
      features: [
        "Student profile + fit quiz",
        "5 starter college matches",
        "Basic school-fit explanations",
        "Limited AI advisor access",
        "Sample savings + cost tips",
      ],
      cta: "Get Free Matches",
      highlight: false,
    },
    {
      name: "Starter",
      price: "$19/mo",
      subtitle: "Best for most students",
      features: [
        "Expanded match list",
        "Deeper fit breakdowns",
        "Saved colleges dashboard",
        "25 AI advisor questions/month",
        "Budget and scholarship guidance",
      ],
      cta: "Unlock Starter",
      highlight: true,
    },
    {
      name: "Premium",
      price: "$49/mo",
      subtitle: "Full guidance experience",
      features: [
        "Unlimited or high-cap AI advising",
        "Full personalized match report",
        "College-to-college comparisons",
        "Application strategy suggestions",
        "Priority support + future human review add-on",
      ],
      cta: "Go Premium",
      highlight: false,
    },
  ];

  const steps = [
    {
      title: "Build your profile",
      text: "Tell College Flow your GPA, budget, intended major, preferred states, social vibe, weather, and career goals.",
    },
    {
      title: "See your best-fit schools",
      text: "Get college matches based on what actually matters to you, not just random rankings or hype.",
    },
    {
      title: "Use the AI advisor",
      text: "Ask follow-up questions, compare schools, and get guidance that feels personal and easy to understand.",
    },
  ];

  const results = [
    {
      school: "University of Arizona",
      fit: "91% fit",
      note: "Strong social scene, warm weather, good business pathways, and a large-campus feel.",
    },
    {
      school: "University of Nevada, Reno",
      fit: "87% fit",
      note: "Closer to home, more affordable, solid student life, and flexible major options.",
    },
    {
      school: "Arizona State University",
      fit: "89% fit",
      note: "Big-campus energy, broad major options, strong alumni network, and sunny location.",
    },
  ];

  const faqs = [
    {
      q: "Is College Flow free to try?",
      a: "Yes. Students can create an account, complete the fit quiz, and see starter matches before deciding whether to upgrade.",
    },
    {
      q: "How is this different from a generic college search?",
      a: "College Flow is built around personal fit: budget, goals, location, social preferences, and long-term outcomes — not just prestige.",
    },
    {
      q: "Does College Flow guarantee admission?",
      a: "No. It is a guidance platform designed to help students make smarter decisions and build a better college list.",
    },
    {
      q: "Can parents use it too?",
      a: "Yes. The platform can support both students and families, especially for cost, fit, and comparison questions.",
    },
  ];

  const formLink = "https://forms.gle/jsFdWdxJJh1Ta6eg7";
  const contactEmail = "collegeflowteam@gmail.com";

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-sm font-bold text-white shadow-sm">
              CF
            </div>
            <div>
              <p className="text-sm font-semibold tracking-wide text-slate-900">College Flow</p>
              <p className="text-xs text-slate-500">Personalized college guidance</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#how-it-works" className="text-sm text-slate-600 transition hover:text-slate-900">How It Works</a>
            <a href="#results" className="text-sm text-slate-600 transition hover:text-slate-900">Results</a>
            <a href="#pricing" className="text-sm text-slate-600 transition hover:text-slate-900">Pricing</a>
            <a href="#about" className="text-sm text-slate-600 transition hover:text-slate-900">About</a>
            <a href="#faq" className="text-sm text-slate-600 transition hover:text-slate-900">FAQ</a>
            <a href="#contact" className="text-sm text-slate-600 transition hover:text-slate-900">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={formLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
            >
              Get Free Matches
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.10),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.10),transparent_35%)]" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
            <div>
              <div className="mb-5 inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-600 shadow-sm">
                Built for students who want fit, clarity, and confidence
              </div>
              <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Find colleges that actually fit you.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                College Flow helps students discover schools based on budget, major, goals, location, and lifestyle — then gives them an AI advisor to guide the next step.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={formLink}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl bg-slate-900 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-slate-200 transition hover:-translate-y-0.5 hover:opacity-95"
                >
                  Get Your Free Matches
                </a>
                <a
                  href="#how-it-works"
                  className="rounded-2xl border border-slate-300 px-6 py-3 text-base font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  See How It Works
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-500">
                <div>✓ Free to start</div>
                <div>✓ Takes under 2 minutes</div>
                <div>✓ Built for real student fit</div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-200/70">
                <div className="rounded-[1.5rem] bg-slate-50 p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Student Dashboard</p>
                      <p className="text-xs text-slate-500">Welcome back, Hayden</p>
                    </div>
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">Free Plan</span>
                  </div>

                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="rounded-2xl bg-white p-4 shadow-sm">
                      <p className="text-xs uppercase tracking-wide text-slate-500">Profile completion</p>
                      <p className="mt-2 text-2xl font-bold">85%</p>
                      <div className="mt-3 h-2 rounded-full bg-slate-100">
                        <div className="h-2 w-[85%] rounded-full bg-slate-900" />
                      </div>
                    </div>
                    <div className="rounded-2xl bg-white p-4 shadow-sm">
                      <p className="text-xs uppercase tracking-wide text-slate-500">Starter matches</p>
                      <p className="mt-2 text-2xl font-bold">5</p>
                      <p className="mt-2 text-sm text-slate-500">Unlock full results with Starter</p>
                    </div>
                    <div className="rounded-2xl bg-white p-4 shadow-sm">
                      <p className="text-xs uppercase tracking-wide text-slate-500">AI advisor credits</p>
                      <p className="mt-2 text-2xl font-bold">2 left</p>
                      <p className="mt-2 text-sm text-slate-500">Ask better questions before you apply</p>
                    </div>
                  </div>

                  <div className="mt-4 grid gap-4 lg:grid-cols-[1.2fr,0.8fr]">
                    <div className="rounded-2xl bg-white p-4 shadow-sm">
                      <div className="mb-3 flex items-center justify-between">
                        <p className="font-semibold text-slate-900">Top college matches</p>
                        <button className="text-sm font-medium text-slate-500">View all</button>
                      </div>
                      <div className="space-y-3">
                        {results.map((item) => (
                          <div key={item.school} className="rounded-2xl border border-slate-100 p-4">
                            <div className="flex items-start justify-between gap-4">
                              <div>
                                <p className="font-semibold text-slate-900">{item.school}</p>
                                <p className="mt-1 text-sm text-slate-500">{item.note}</p>
                              </div>
                              <span className="whitespace-nowrap rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                                {item.fit}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-2xl bg-slate-900 p-4 text-white shadow-sm">
                      <div className="flex items-center justify-between">
                        <p className="font-semibold">AI College Advisor</p>
                        <span className="rounded-full bg-white/10 px-3 py-1 text-xs">Live</span>
                      </div>
                      <div className="mt-4 space-y-3 text-sm">
                        <div className="rounded-2xl bg-white/10 p-3">
                          Which of my top matches gives me the best mix of social life and business opportunities?
                        </div>
                        <div className="rounded-2xl bg-white p-3 text-slate-900">
                          Based on your profile, Arizona State looks especially strong because it combines a large student community, warm weather, and broad business pathways.
                        </div>
                      </div>
                      <a
                        href={formLink}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4 block w-full rounded-2xl bg-white px-4 py-3 text-center text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                      >
                        Start With Free Matches
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">How it works</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">A smarter way to narrow down colleges.</h2>
            <p className="mt-4 text-lg text-slate-600">
              College Flow helps students stop guessing and start choosing schools with more confidence.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-lg font-bold text-white">
                  {index + 1}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="results" className="bg-slate-50 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">What students get</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Results that feel personal, not random.</h2>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {[
                {
                  title: "Personalized match list",
                  text: "Students get recommendations based on fit factors like cost, environment, location, academics, and long-term goals.",
                },
                {
                  title: "AI-powered guidance",
                  text: "The chatbot answers follow-up questions and makes the whole process feel less overwhelming.",
                },
                {
                  title: "Clear upgrade path",
                  text: "Students can start free, then unlock deeper insights only when they see value in the platform.",
                },
              ].map((card) => (
                <div key={card.title} className="rounded-[2rem] bg-white p-8 shadow-sm">
                  <h3 className="text-xl font-semibold text-slate-900">{card.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Pricing</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Start free. Upgrade when you want deeper help.</h2>
            <p className="mt-4 text-lg text-slate-600">
              Transparent pricing that feels student-friendly and easy to understand.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-[2rem] border p-8 shadow-sm ${
                  pkg.highlight
                    ? "border-slate-900 bg-slate-900 text-white shadow-xl"
                    : "border-slate-200 bg-white text-slate-900"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xl font-semibold">{pkg.name}</p>
                    <p className={`mt-1 text-sm ${pkg.highlight ? "text-slate-300" : "text-slate-500"}`}>{pkg.subtitle}</p>
                  </div>
                  {pkg.highlight && (
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white">Most Popular</span>
                  )}
                </div>
                <p className="mt-6 text-4xl font-bold">{pkg.price}</p>
                <ul className="mt-6 space-y-3 text-sm">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span className="mt-0.5">✓</span>
                      <span className={pkg.highlight ? "text-slate-200" : "text-slate-600"}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={formLink}
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-8 block w-full rounded-2xl px-4 py-3 text-center text-sm font-semibold transition ${
                    pkg.highlight
                      ? "bg-white text-slate-900 hover:bg-slate-100"
                      : "bg-slate-900 text-white hover:opacity-90"
                  }`}
                >
                  {pkg.cta}
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="bg-slate-50 py-16">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr,1fr] lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Why College Flow</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Built to make the college search feel less confusing.</h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Too many students choose schools based on vague rankings, pressure, or incomplete information. College Flow is built to make the process more personal, more transparent, and more practical.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Student-first guidance",
                  "Fit over prestige-only thinking",
                  "Simple dashboard experience",
                  "Designed to feel modern and trustworthy",
                ].map((item) => (
                  <div key={item} className="rounded-2xl bg-white p-4 shadow-sm">
                    <p className="font-medium text-slate-900">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold text-slate-500">Example trust signals</p>
              <div className="mt-6 space-y-4 text-slate-600">
                <div className="rounded-2xl border border-slate-100 p-4">
                  <p className="font-semibold text-slate-900">Privacy-first messaging</p>
                  <p className="mt-1 text-sm">Student profile data is used to personalize guidance, not to overwhelm users with salesy nonsense.</p>
                </div>
                <div className="rounded-2xl border border-slate-100 p-4">
                  <p className="font-semibold text-slate-900">Transparent pricing</p>
                  <p className="mt-1 text-sm">Start free and only pay if you want deeper analysis, stronger tools, and more advisor access.</p>
                </div>
                <div className="rounded-2xl border border-slate-100 p-4">
                  <p className="font-semibold text-slate-900">Real guidance tone</p>
                  <p className="mt-1 text-sm">The product should feel like a trustworthy guide, not a spam funnel or fake admissions promise machine.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">FAQ</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Questions students and parents might ask</h2>
          </div>
          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">{faq.q}</h3>
                <p className="mt-2 leading-7 text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 pb-20 lg:px-8">
          <div className="mx-auto max-w-6xl rounded-[2.5rem] bg-slate-900 px-8 py-12 text-white shadow-2xl shadow-slate-200 lg:px-12">
            <div className="grid gap-8 lg:grid-cols-[1fr,auto] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Ready to start</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  Help students make better college decisions with more confidence.
                </h2>
                <p className="mt-4 max-w-2xl text-slate-300">
                  Start with a free profile, unlock personalized matches, and turn the college search into something clear, helpful, and actually worth using.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a
                  href={formLink}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                >
                  Get Free Matches
                </a>
                <a
                  href="#pricing"
                  className="rounded-2xl border border-white/20 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  View Pricing
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-slate-50 py-16">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[1.1fr,0.9fr] lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Contact</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Questions before you start?</h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                College Flow is built to help students and families make clearer college decisions based on fit, affordability, goals, and lifestyle. If you have questions before filling out the match form, reach out by email.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={`mailto:${contactEmail}`}
                  className="rounded-2xl bg-slate-900 px-6 py-3 text-center text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Email College Flow
                </a>
                <a
                  href={formLink}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-slate-300 px-6 py-3 text-center text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                >
                  Start My Free Matches
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold text-slate-500">What to expect</p>
              <div className="mt-6 space-y-4 text-sm text-slate-600">
                <div className="rounded-2xl border border-slate-100 p-4">
                  <p className="font-semibold text-slate-900">Quick intake</p>
                  <p className="mt-1">The free form takes only a couple of minutes and helps College Flow understand your goals, preferences, and budget.</p>
                </div>
                <div className="rounded-2xl border border-slate-100 p-4">
                  <p className="font-semibold text-slate-900">Student-first recommendations</p>
                  <p className="mt-1">Recommendations are built around fit and practicality, not hype, pressure, or prestige-only thinking.</p>
                </div>
                <div className="rounded-2xl border border-slate-100 p-4">
                  <p className="font-semibold text-slate-900">Built for families too</p>
                  <p className="mt-1">Parents can use College Flow to better understand cost, comparison, and school-fit conversations with their student.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="privacy" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Privacy Policy</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">How College Flow handles information</h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
              <p>College Flow collects the information that students or families choose to submit through the intake form, such as contact details, academic information, budget preferences, location preferences, and college goals.</p>
              <p>This information is used to provide more personalized college-match guidance, communicate about submitted requests, and improve the College Flow experience over time.</p>
              <p>College Flow does not promise admission outcomes and does not sell student data as part of the guidance process. Information should only be submitted by users who are comfortable sharing it for college-guidance purposes.</p>
              <p>If you would like your submitted information corrected or removed, contact <a href={`mailto:${contactEmail}`} className="font-medium text-slate-900 underline underline-offset-4">{contactEmail}</a>.</p>
            </div>
          </div>
        </section>

        <section id="terms" className="bg-slate-50 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Terms of Service</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Important use terms</h2>
              <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
                <p>College Flow provides guidance and educational support designed to help students build a better college list and think more clearly about school fit, affordability, and long-term goals.</p>
                <p>College Flow does not guarantee admission, scholarships, financial aid packages, transfer outcomes, or career results. Any recommendations are meant to support better decision-making, not replace official admissions or financial guidance.</p>
                <p>Users are responsible for reviewing official school websites, admissions requirements, deadlines, and tuition details before making any final college decision.</p>
                <p>By using College Flow, you agree to use the platform for lawful purposes and to submit accurate information to the best of your knowledge.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-10 lg:grid-cols-[1.2fr,0.8fr,0.8fr,0.8fr] lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-sm font-bold text-white">
                CF
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">College Flow</p>
                <p className="text-xs text-slate-500">College guidance made more personal</p>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-500">
              Built to help students choose colleges based on real fit factors like goals, cost, location, and lifestyle.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-900">Product</p>
            <div className="mt-4 space-y-3 text-sm text-slate-500">
              <a href="#how-it-works" className="block hover:text-slate-900">How It Works</a>
              <a href="#pricing" className="block hover:text-slate-900">Pricing</a>
              <a href="#results" className="block hover:text-slate-900">Results</a>
              <a href="#faq" className="block hover:text-slate-900">FAQ</a>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-900">Company</p>
            <div className="mt-4 space-y-3 text-sm text-slate-500">
              <a href="#about" className="block hover:text-slate-900">About</a>
              <a href="#contact" className="block hover:text-slate-900">Contact</a>
              <a href="#privacy" className="block hover:text-slate-900">Privacy Policy</a>
              <a href="#terms" className="block hover:text-slate-900">Terms of Service</a>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-900">Contact</p>
            <div className="mt-4 space-y-3 text-sm text-slate-500">
              <a href={`mailto:${contactEmail}`} className="hover:text-slate-900">{contactEmail}</a>
              <p>Built for students and families</p>
              <p>Start free anytime</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
