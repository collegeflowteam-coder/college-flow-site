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

import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
);

export default function CollegeFlowWebsite() {
  const [view, setView] = useState<View>("home");
  const [tab, setTab] = useState<DashboardTab>("overview");

  const formLink = "https://forms.gle/Gc7tm9yBr7HkPZyp9";
  const contactEmail = "collegeflowteam@gmail.com";

  const [studentName, setStudentName] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [password, setPassword] = useState("");

  const [major, setMajor] = useState("");
  const [budget, setBudget] = useState("");
  const [locations, setLocations] = useState("");
  const [goal, setGoal] = useState("");
  const [plan, setPlan] = useState("Free");
  const [status, setStatus] = useState("Form not submitted");

  const handleSignup = async () => {
    if (!studentEmail || !password) return alert("Enter email + password");

    const { error } = await supabase.auth.signUp({
      email: studentEmail,
      password,
    });

    if (error) return alert(error.message);

    alert("Account created! Check your email to confirm.");
    setView("dashboard");
  };

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email: studentEmail,
      password,
    });

    if (error) return alert(error.message);

    setView("dashboard");
  };

  if (view === "signup") {
    return (
      <div className="p-10">
        <h1>Create Account</h1>
        <input
          placeholder="Name"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
        />
        <input
          placeholder="Email"
          value={studentEmail}
          onChange={(e) => setStudentEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSignup}>Sign Up</button>
      </div>
    );
  }

  if (view === "login") {
    return (
      <div className="p-10">
        <h1>Login</h1>
        <input
          placeholder="Email"
          value={studentEmail}
          onChange={(e) => setStudentEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  }

  if (view === "dashboard") {
    return <div className="p-10">Dashboard (connected to real auth now 🔥)</div>;
  }

  return (
    <div className="p-10">
      <h1>College Flow</h1>
      <button onClick={() => setView("signup")}>Sign Up</button>
      <button onClick={() => setView("login")}>Login</button>
    </div>
  );
}
