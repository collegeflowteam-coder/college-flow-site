import { useMemo, useState } from "react";

type Match = {
  school: string;
  fit: string;
  type: string;
  note: string;
};

type View = "home" | "signup" | "login" | "dashboard";
type DashboardTab = "overview" | "profile" | "status" | "matches" | "upgrade";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

type DashboardNavButtonProps = {
  value: DashboardTab;
  label: string;
  activeTab: DashboardTab;
  onSelect: (tab: DashboardTab) => void;
};

type AuthCardProps = {
  mode: "signup" | "login";
  studentName: string;
  studentEmail: string;
  setStudentName: (value: string) => void;
  setStudentEmail: (value: string) => void;
  onBack: () => void;
  onPrimary: () => void;
  onSwapMode: () => void;
  primaryButton: string;
  secondaryButton: string;
};

type DashboardShellProps = {
  studentName: string;
  studentEmail: string;
  major: string;
  budget: string;
  locations: string;
  goal: string;
  plan: string;
  status: string;
  matches: Match[];
  packages: {
    name: string;
    price: string;
    subtitle: string;
    features: string[];
    cta: string;
    highlight: boolean;
  }[];
  tab: DashboardTab;
  setTab: (tab: DashboardTab) => void;
  setView: (view: View) => void;
  setStudentName: (value: string) => void;
  setStudentEmail: (value: string) => void;
  setMajor: (value: string) => void;
  setBudget: (value: string) => void;
  setLocations: (value: string) => void;
  setGoal: (value: string) => void;
  setPlan: (value: string) => void;
  setStatus: (value: string) => void;
  formLink: string;
  primaryButton: string;
  secondaryButton: string;
};

function NavLink({ href, children }: NavLinkProps) {
  return (
    <a href={href} className="text-sm text-slate-600 transition hover:text-slate-900">
      {children}
    </a>
  );
}

function DashboardNavButton({ value, label, activeTab, onSelect }: DashboardNavButtonProps) {
  const active = activeTab === value;

  return (
    <button
      onClick={() => onSelect(value)}
      className={`w-full rounded-2xl px-4 py-3 text-left text-sm font-medium transition ${
        active ? "bg-slate-900 text-white" : "bg-white text-slate-600 hover:bg-slate-50"
      }`}
    >
      {label}
    </button>
  );
}

function AuthCard({
  mode,
  studentName,
  studentEmail,
  setStudentName,
  setStudentEmail,
  onBack,
  onPrimary,
  onSwapMode,
  primaryButton,
  secondaryButton,
}: AuthCardProps) {
  return (
    <div className="min-h-screen bg-slate-50 px-6 py-12 text-slate-900 lg:px-8">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-xl shadow-slate-200/60 lg:grid lg:grid-cols-[1fr,0.9fr]">
        <div className="p-8 lg:p-12">
          <button onClick={onBack} className="mb-8 text-sm font-medium text-slate-500 hover:text-slate-900">
            ← Back to site
          </button>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">College Flow</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">
            {mode === "signup" ? "Create your student account" : "Log back into your dashboard"}
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-8 text-slate-600">
            {mode === "signup"
              ? "Start building a personal dashboard where you can track your form status, recommendations, and future upgrades."
              : "Access your College Flow dashboard to review your status, profile, and personalized college recommendations."}
          </p>

          <div className="mt-8 grid gap-4">
            {mode === "signup" && (
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Full name</label>
                <input
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-900"
                  placeholder="Your full name"
                />
              </div>
            )}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
              <input
                value={studentEmail}
                onChange={(e) => setStudentEmail(e.target.value)}
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-900"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Password</label>
              <input
                type="password"
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-900"
                placeholder="Create a password"
              />
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button onClick={onPrimary} className={primaryButton}>
              {mode === "signup" ? "Create Account" : "Log In"}
            </button>
            <button onClick={onSwapMode} className={secondaryButton}>
              {mode === "signup" ? "Already have an account?" : "Need to create an account?"}
            </button>
          </div>
        </div>

        <div className="bg-slate-900 p-8 text-white lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Why accounts matter</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight">A personal student space makes the platform feel real.</h2>
          <div className="mt-8 space-y-4 text-sm text-slate-300">
            <div className="rounded-2xl bg-white/10 p-4">Track your form status from submission to review.</div>
            <div className="rounded-2xl bg-white/10 p-4">Store your personalized match list in one place.</div>
            <div className="rounded-2xl bg-white/10 p-4">Unlock future upgrades like Stripe billing and AI counselor access.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DashboardShell({
  studentName,
  studentEmail,
  major,
  budget,
  locations,
  goal,
  plan,
  status,
  matches,
  packages,
  tab,
  setTab,
  setView,
  setStudentName,
  setStudentEmail,
  setMajor,
  setBudget,
  setLocations,
  setGoal,
  setPlan,
  setStatus,
  formLink,
  primaryButton,
  secondaryButton,
}: DashboardShellProps) {
  const statusStages = ["Account created", "Form submitted", "Review in progress", "Matches ready"];

  const stageIsActive = (item: string) => {
    if (item === "Account created") {
      return ["Account created", "Form submitted", "Review in progress", "Matches ready"].includes(status);
    }
    if (item === "Form submitted") {
      return ["Form submitted", "Review in progress", "Matches ready"].includes(status);
    }
    if (item === "Review in progress") {
      return ["Review in progress", "Matches ready"].includes(status);
    }
    return status === "Matches ready";
  };

  const handleFormOpen = () => {
    if (status === "Account created" || status === "Form not submitted") {
      setStatus("Form submitted");
    }
    setTab("status");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <button onClick={() => setView("home")} className="flex items-center gap-3 text-left">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-sm font-bold text-white">
              CF
            </div>
            <div>
              <p className="text-sm font-semibold">College Flow</p>
              <p className="text-xs text-slate-500">Student Dashboard</p>
            </div>
          </button>

          <div className="flex items-center gap-3">
            <div className="hidden text-right sm:block">
              <p className="text-sm font-semibold text-slate-900">{studentName || "Student"}</p>
              <p className="text-xs text-slate-500">{plan} Plan</p>
            </div>
            <button
              onClick={() => setView("home")}
              className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              Back to Site
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto grid max-w-7xl gap-6 px-6 py-8 lg:grid-cols-[260px,1fr] lg:px-8">
        <aside className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm">
          <div className="mb-4 rounded-[1.5rem] bg-slate-900 p-5 text-white">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-300">Welcome back</p>
            <h2 className="mt-2 text-2xl font-bold">{studentName || "Student"}</h2>
            <p className="mt-1 text-sm text-slate-300">Track your progress, recommendations, and next steps.</p>
          </div>

          <div className="space-y-2">
            <DashboardNavButton value="overview" label="Overview" activeTab={tab} onSelect={setTab} />
            <DashboardNavButton value="profile" label="Profile" activeTab={tab} onSelect={setTab} />
            <DashboardNavButton value="status" label="Match Status" activeTab={tab} onSelect={setTab} />
            <DashboardNavButton value="matches" label="My Matches" activeTab={tab} onSelect={setTab} />
            <DashboardNavButton value="upgrade" label="Upgrade" activeTab={tab} onSelect={setTab} />
          </div>
        </aside>

        <section className="space-y-6">
          {tab === "overview" && (
            <>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Plan</p>
                  <p className="mt-3 text-3xl font-bold">{plan}</p>
                  <p className="mt-2 text-sm text-slate-500">Start free and upgrade when you want deeper support.</p>
                </div>
                <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Form Status</p>
                  <p className="mt-3 text-3xl font-bold">{status}</p>
                  <p className="mt-2 text-sm text-slate-500">Students can track exactly where they are in the process.</p>
                </div>
                <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Top Matches</p>
                  <p className="mt-3 text-3xl font-bold">{matches.length}</p>
                  <p className="mt-2 text-sm text-slate-500">Personalized recommendations appear here once your review is complete.</p>
                </div>
              </div>

              <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
                <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Next step</p>
                      <h3 className="mt-1 text-2xl font-bold">Complete your match intake</h3>
                    </div>
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                      Student Dashboard Live
                    </span>
                  </div>
                  <p className="mt-4 max-w-2xl text-slate-600">
                    Your dashboard is now personalized around your profile. The next step is submitting the College Flow form so your recommendations can move into review and then into your dashboard.
                  </p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={formLink}
                      target="_blank"
                      rel="noreferrer"
                      onClick={handleFormOpen}
                      className={primaryButton}
                    >
                      Complete Match Form
                    </a>
                    <button onClick={() => setTab("profile")} className={secondaryButton}>
                      Review Profile
                    </button>
                  </div>
                </div>

                <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="text-sm font-semibold text-slate-900">AI Counselor Preview</p>
                  <div className="mt-4 space-y-3 text-sm">
                    <div className="rounded-2xl bg-slate-100 p-3 text-slate-700">
                      Which of my top schools is best for business and social life?
                    </div>
                    <div className="rounded-2xl bg-slate-900 p-3 text-white">
                      Future premium AI guidance will help students compare schools, think through fit, and ask next-step questions inside their dashboard.
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-slate-500">This will become a real feature in the next build phase.</p>
                </div>
              </div>
            </>
          )}

          {tab === "profile" && (
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-slate-900">Student Profile</p>
                  <h3 className="mt-1 text-2xl font-bold">Your dashboard details</h3>
                </div>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">Personalized</span>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Full name</label>
                  <input
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-900"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
                  <input
                    value={studentEmail}
                    onChange={(e) => setStudentEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-900"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Intended major</label>
                  <input
                    value={major}
                    onChange={(e) => setMajor(e.target.value)}
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-900"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Budget</label>
                  <input
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-900"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-slate-700">Preferred locations</label>
                  <input
                    value={locations}
                    onChange={(e) => setLocations(e.target.value)}
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-900"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-slate-700">Goals</label>
                  <textarea
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    rows={4}
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-900"
                  />
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button onClick={() => setTab("overview")} className={primaryButton}>
                  Save Profile
                </button>
                <a
                  href={formLink}
                  target="_blank"
                  rel="noreferrer"
                  onClick={handleFormOpen}
                  className={secondaryButton}
                >
                  Open Match Form
                </a>
              </div>
            </div>
          )}

          {tab === "status" && (
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">Match Status</p>
              <h3 className="mt-1 text-2xl font-bold">Track where you are in the process</h3>
              <div className="mt-8 grid gap-4 md:grid-cols-4">
                {statusStages.map((item) => (
                  <div
                    key={item}
                    className={`rounded-[1.5rem] border p-5 ${
                      stageIsActive(item)
                        ? "border-slate-900 bg-slate-900 text-white"
                        : "border-slate-200 bg-slate-50 text-slate-500"
                    }`}
                  >
                    <p className="text-sm font-semibold">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[1.5rem] bg-slate-50 p-6">
                <p className="text-sm font-semibold text-slate-900">Current status</p>
                <p className="mt-2 text-3xl font-bold text-slate-900">{status}</p>
                <p className="mt-3 max-w-2xl text-slate-600">
                  Once your form is submitted, College Flow can move your profile into review and prepare your first personalized school list.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={formLink}
                    target="_blank"
                    rel="noreferrer"
                    onClick={handleFormOpen}
                    className={primaryButton}
                  >
                    Submit / Reopen Match Form
                  </a>
                  <button onClick={() => setStatus("Matches ready")} className={secondaryButton}>
                    Demo: Mark Matches Ready
                  </button>
                </div>
              </div>
            </div>
          )}

          {tab === "matches" && (
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-slate-900">My Matches</p>
                  <h3 className="mt-1 text-2xl font-bold">Your personalized recommendations</h3>
                </div>
                <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                  Manual recommendations for now
                </span>
              </div>

              <p className="mt-4 max-w-3xl text-slate-600">
                This is where students will see their personalized college list. Right now, this can be powered by your manual recommendations while the rest of the platform grows.
              </p>

              <div className="mt-6 space-y-4">
                {matches.map((item) => (
                  <div key={item.school} className="rounded-[1.5rem] border border-slate-200 p-5">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-xl font-semibold text-slate-900">{item.school}</p>
                        <p className="mt-1 text-sm font-medium text-slate-500">{item.type}</p>
                        <p className="mt-3 max-w-2xl text-slate-600">{item.note}</p>
                      </div>
                      <span className="whitespace-nowrap rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">
                        {item.fit}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tab === "upgrade" && (
            <div className="space-y-6">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">Upgrade your experience</p>
                <h3 className="mt-1 text-2xl font-bold">Move from free access to a deeper plan</h3>
                <p className="mt-4 max-w-3xl text-slate-600">
                  Stripe can be connected next so students can pay for stronger personalized recommendations, faster turnaround, and future AI counselor access.
                </p>
              </div>

              <div className="grid gap-6 lg:grid-cols-3">
                {packages.map((pkg) => (
                  <div
                    key={pkg.name}
                    className={`rounded-[2rem] border p-8 shadow-sm ${
                      pkg.highlight
                        ? "border-slate-900 bg-slate-900 text-white shadow-xl"
                        : "border-slate-200 bg-white text-slate-900"
                    }`}
                  >
                    <p className="text-xl font-semibold">{pkg.name}</p>
                    <p className={`mt-1 text-sm ${pkg.highlight ? "text-slate-300" : "text-slate-500"}`}>
                      {pkg.subtitle}
                    </p>
                    <p className="mt-6 text-4xl font-bold">{pkg.price}</p>
                    <ul className="mt-6 space-y-3 text-sm">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex gap-3">
                          <span>✓</span>
                          <span className={pkg.highlight ? "text-slate-200" : "text-slate-600"}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => setPlan(pkg.name)}
                      className={`mt-8 w-full rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                        pkg.highlight
                          ? "bg-white text-slate-900 hover:bg-slate-100"
                          : "bg-slate-900 text-white hover:opacity-90"
                      }`}
                    >
                      {pkg.name === plan ? "Current Plan" : pkg.cta}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default function CollegeFlowWebsite() {
  const [view, setView] = useState<View>("home");
  const [tab, setTab] = useState<DashboardTab>("overview");

  const formLink = "https://forms.gle/8GJKyGWV4oLTfAcU9";
  const contactEmail = "collegeflowteam@gmail.com";

  const [studentName, setStudentName] = useState("Hayden");
  const [studentEmail, setStudentEmail] = useState("");
  const [major, setMajor] = useState("Business");
  const [budget, setBudget] = useState("Under $30,000 per year");
  const [locations, setLocations] = useState("Arizona, Nevada, California");
  const [goal, setGoal] = useState(
    "Find a college with strong business opportunities, social life, and good long-term value."
  );
  const [plan, setPlan] = useState("Free");
  const [status, setStatus] = useState("Form not submitted");

  const matches: Match[] = useMemo(
    () => [
      {
        school: "Arizona State University",
        fit: "89% fit",
        type: "Target / Strong Fit",
        note: "Large campus, strong business pathways, warm weather, and broad student life opportunities.",
      },
      {
        school: "University of Arizona",
        fit: "91% fit",
        type: "Target / Strong Fit",
        note: "Great social scene, warm climate, and a strong big-school experience with wide academic options.",
      },
      {
        school: "University of Nevada, Reno",
        fit: "87% fit",
        type: "Value / Close-to-Home Option",
        note: "More affordable, flexible, and practical if cost and location both matter in your decision.",
      },
    ],
    []
  );

  const packages = [
    {
      name: "Free",
      price: "$0",
      subtitle: "Start here",
      features: [
        "Account + student dashboard",
        "Complete College Flow intake form",
        "Track your submission status",
        "Starter college recommendations preview",
      ],
      cta: "Start Free",
      highlight: false,
    },
    {
      name: "Starter",
      price: "$19/mo",
      subtitle: "Best for most students",
      features: [
        "Full personalized match list",
        "Deeper school-fit explanations",
        "Saved dashboard results",
        "Priority review turnaround",
      ],
      cta: "Unlock Starter",
      highlight: true,
    },
    {
      name: "Premium",
      price: "$49/mo",
      subtitle: "Full guidance experience",
      features: [
        "Detailed personalized recommendations",
        "Comparison notes between top schools",
        "More strategy and next-step support",
        "Future AI counselor access",
      ],
      cta: "Go Premium",
      highlight: false,
    },
  ];

  const faqs = [
    {
      q: "Do I need an account to use College Flow?",
      a: "Creating an account gives students a personal dashboard where they can track form status, view recommendations, and manage future upgrades.",
    },
    {
      q: "Does College Flow guarantee admission?",
      a: "No. College Flow is designed to help students make stronger, more informed college choices based on fit, affordability, and long-term goals.",
    },
    {
      q: "Is the AI counselor already live?",
      a: "The AI counselor is a planned premium feature. Right now, College Flow focuses on personalized guidance, dashboard access, and strong fit-based recommendations.",
    },
    {
      q: "Can parents use College Flow too?",
      a: "Yes. Parents can use College Flow to understand cost, fit, and better compare school options with their student.",
    },
  ];

  const primaryButton =
    "rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:opacity-95";
  const secondaryButton =
    "rounded-2xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50";

  const handleDemoSignup = () => {
    if (!studentEmail.trim()) return;
    setStatus("Account created");
    setView("dashboard");
    setTab("overview");
  };

  const handleDemoLogin = () => {
    setView("dashboard");
    setTab("overview");
    if (status === "Form not submitted") {
      setStatus("Account created");
    }
  };

  if (view === "signup") {
    return (
      <AuthCard
        mode="signup"
        studentName={studentName}
        studentEmail={studentEmail}
        setStudentName={setStudentName}
        setStudentEmail={setStudentEmail}
        onBack={() => setView("home")}
        onPrimary={handleDemoSignup}
        onSwapMode={() => setView("login")}
        primaryButton={primaryButton}
        secondaryButton={secondaryButton}
      />
    );
  }

  if (view === "login") {
    return (
      <AuthCard
        mode="login"
        studentName={studentName}
        studentEmail={studentEmail}
        setStudentName={setStudentName}
        setStudentEmail={setStudentEmail}
        onBack={() => setView("home")}
        onPrimary={handleDemoLogin}
        onSwapMode={() => setView("signup")}
        primaryButton={primaryButton}
        secondaryButton={secondaryButton}
      />
    );
  }

  if (view === "dashboard") {
    return (
      <DashboardShell
        studentName={studentName}
        studentEmail={studentEmail}
        major={major}
        budget={budget}
        locations={locations}
        goal={goal}
        plan={plan}
        status={status}
        matches={matches}
        packages={packages}
        tab={tab}
        setTab={setTab}
        setView={setView}
        setStudentName={setStudentName}
        setStudentEmail={setStudentEmail}
        setMajor={setMajor}
        setBudget={setBudget}
        setLocations={setLocations}
        setGoal={setGoal}
        setPlan={setPlan}
        setStatus={setStatus}
        formLink={formLink}
        primaryButton={primaryButton}
        secondaryButton={secondaryButton}
      />
    );
  }

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
            <NavLink href="#how-it-works">How It Works</NavLink>
            <NavLink href="#results">Results</NavLink>
            <NavLink href="#pricing">Pricing</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setView("login")}
              className="hidden rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 md:inline-flex"
            >
              Log In
            </button>
            <button
              onClick={() => setView("signup")}
              className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
            >
              Create Account
            </button>
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
                College Flow helps students discover schools based on budget, major, goals, location, and lifestyle — then gives them a real dashboard to track next steps, recommendations, and future counselor support.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <button
                  onClick={() => setView("signup")}
                  className="rounded-2xl bg-slate-900 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-slate-200 transition hover:-translate-y-0.5 hover:opacity-95"
                >
                  Create My Account
                </button>
                <a
                  href="#how-it-works"
                  className="rounded-2xl border border-slate-300 px-6 py-3 text-base font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  See How It Works
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-500">
                <div>✓ Real student dashboard</div>
                <div>✓ Free to start</div>
                <div>✓ Google Form intake for now</div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-200/70">
                <div className="rounded-[1.5rem] bg-slate-50 p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Student Dashboard</p>
                      <p className="text-xs text-slate-500">Welcome back, {studentName}</p>
                    </div>
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                      {plan} Plan
                    </span>
                  </div>

                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="rounded-2xl bg-white p-4 shadow-sm">
                      <p className="text-xs uppercase tracking-wide text-slate-500">Profile</p>
                      <p className="mt-2 text-2xl font-bold">Personal</p>
                      <p className="mt-2 text-sm text-slate-500">Each student gets their own account, status, and results.</p>
                    </div>
                    <div className="rounded-2xl bg-white p-4 shadow-sm">
                      <p className="text-xs uppercase tracking-wide text-slate-500">Current status</p>
                      <p className="mt-2 text-2xl font-bold">{status}</p>
                      <p className="mt-2 text-sm text-slate-500">A real product feel even before full automation.</p>
                    </div>
                    <div className="rounded-2xl bg-white p-4 shadow-sm">
                      <p className="text-xs uppercase tracking-wide text-slate-500">Future AI</p>
                      <p className="mt-2 text-2xl font-bold">Ready</p>
                      <p className="mt-2 text-sm text-slate-500">The counselor can plug into this dashboard later.</p>
                    </div>
                  </div>

                  <div className="mt-4 grid gap-4 lg:grid-cols-[1.2fr,0.8fr]">
                    <div className="rounded-2xl bg-white p-4 shadow-sm">
                      <div className="mb-3 flex items-center justify-between">
                        <p className="font-semibold text-slate-900">Top college matches</p>
                        <button onClick={() => setView("dashboard")} className="text-sm font-medium text-slate-500">
                          Open dashboard
                        </button>
                      </div>
                      <div className="space-y-3">
                        {matches.map((item) => (
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
                        <p className="font-semibold">Next phase</p>
                        <span className="rounded-full bg-white/10 px-3 py-1 text-xs">Phase 2</span>
                      </div>
                      <div className="mt-4 space-y-3 text-sm">
                        <div className="rounded-2xl bg-white/10 p-3">
                          Accounts make the experience feel personal before AI is fully live.
                        </div>
                        <div className="rounded-2xl bg-white p-3 text-slate-900">
                          Students can log in, see their own profile, track form status, and later view recommendations in one place.
                        </div>
                      </div>
                      <button
                        onClick={() => setView("signup")}
                        className="mt-4 w-full rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                      >
                        Build My Account
                      </button>
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
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">A smarter and more personal college flow.</h2>
            <p className="mt-4 text-lg text-slate-600">
              Students can create an account, complete the intake form, and track where they are in the recommendation process.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { title: "Create your account", text: "Students get a personal dashboard instead of a one-time form experience." },
              { title: "Complete the match intake", text: "The Google Form still powers intake for now, but the site feels like a real platform." },
              { title: "Track recommendations", text: "Recommendation status, results, and future upgrades all live inside the dashboard." },
            ].map((step, index) => (
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
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">A real product feel, even before full automation.</h2>
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {[
                { title: "Personal dashboard", text: "Each student gets a place to view their status, profile, and results." },
                { title: "Human-powered recommendations", text: "You can still manually create strong recommendations behind the scenes for now." },
                { title: "Scalable future", text: "Stripe, saved data, and AI counselor can plug into this structure next." },
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
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Plans designed to grow with the platform.</h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-[2rem] border p-8 shadow-sm ${
                  pkg.highlight ? "border-slate-900 bg-slate-900 text-white shadow-xl" : "border-slate-200 bg-white text-slate-900"
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
                      <span>✓</span>
                      <span className={pkg.highlight ? "text-slate-200" : "text-slate-600"}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setView("signup")}
                  className={`mt-8 w-full rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                    pkg.highlight ? "bg-white text-slate-900 hover:bg-slate-100" : "bg-slate-900 text-white hover:opacity-90"
                  }`}
                >
                  {pkg.cta}
                </button>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="bg-slate-50 py-16">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr,1fr] lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Why College Flow</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Built to feel premium before it is fully automated.</h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                College Flow can already feel personal because each student gets their own dashboard, their own status, and their own recommendations — even while you are still powering the recommendation engine manually.
              </p>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="space-y-4 text-slate-600">
                <div className="rounded-2xl border border-slate-100 p-4">
                  <p className="font-semibold text-slate-900">Personal account experience</p>
                  <p className="mt-1 text-sm">Students are not just filling out a form. They are entering a platform built around them.</p>
                </div>
                <div className="rounded-2xl border border-slate-100 p-4">
                  <p className="font-semibold text-slate-900">Manual now, scalable later</p>
                  <p className="mt-1 text-sm">You can handle personalized school recommendations first, then layer in AI and automation later.</p>
                </div>
                <div className="rounded-2xl border border-slate-100 p-4">
                  <p className="font-semibold text-slate-900">Better business foundation</p>
                  <p className="mt-1 text-sm">This gives you a stronger product base for Stripe, saved results, and future premium features.</p>
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

        <section id="contact" className="bg-slate-50 py-16">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[1.1fr,0.9fr] lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Contact</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Want to see the full experience?</h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                Create an account, open the match intake, and start using the dashboard experience now. Stripe and AI counselor features can be layered onto this next.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={`mailto:${contactEmail}`}
                  className="rounded-2xl bg-slate-900 px-6 py-3 text-center text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Email College Flow
                </a>
                <button
                  onClick={() => setView("signup")}
                  className="rounded-2xl border border-slate-300 px-6 py-3 text-center text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                >
                  Create My Account
                </button>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold text-slate-500">What Phase 2 unlocks</p>
              <div className="mt-6 space-y-4 text-sm text-slate-600">
                <div className="rounded-2xl border border-slate-100 p-4">
                  <p className="font-semibold text-slate-900">Real user flow</p>
                  <p className="mt-1">Landing page → account → dashboard → form → recommendation status.</p>
                </div>
                <div className="rounded-2xl border border-slate-100 p-4">
                  <p className="font-semibold text-slate-900">Better trust</p>
                  <p className="mt-1">Students feel like they are using a real product instead of just clicking into a form.</p>
                </div>
                <div className="rounded-2xl border border-slate-100 p-4">
                  <p className="font-semibold text-slate-900">Future paid features</p>
                  <p className="mt-1">This makes it much easier to add Stripe and AI counselor functionality later.</p>
                </div>
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
              <a href={`mailto:${contactEmail}`} className="block hover:text-slate-900">Email</a>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-900">Account</p>
            <div className="mt-4 space-y-3 text-sm text-slate-500">
              <button onClick={() => setView("signup")} className="block hover:text-slate-900">Create Account</button>
              <button onClick={() => setView("login")} className="block hover:text-slate-900">Log In</button>
              <button onClick={() => setView("dashboard")} className="block hover:text-slate-900">Dashboard Demo</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
