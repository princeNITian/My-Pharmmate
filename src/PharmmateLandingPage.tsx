// PharmMate Landing Page - Single-file React component (TypeScript-friendly)
// TailwindCSS utility classes used throughout.
// Drop this into a Next.js / Create React App project with Tailwind configured.

export default function PharmMateLandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header />
      <main className="max-w-7xl mx-auto px-6 lg:px-8">
        <Hero />
        <ProblemSolution />
        <HowItWorks />
        <CoreModules />
        <UiPreview />
        <Benefits />
        <Testimonials />
        <Pricing />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}

/* -------------------------
   Small subcomponents
   -------------------------*/

function Header() {
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo />
          <nav className="hidden md:flex gap-8 font-medium text-sm">
            <a className="hover:text-primary-600" href="#marketplace">
              Marketplace
            </a>
            <a className="hover:text-primary-600" href="#pcd">
              Franchise
            </a>
            <a className="hover:text-primary-600" href="#private-label">
              Private Label
            </a>
            <a className="hover:text-primary-600" href="#pricing">
              Pricing
            </a>
            <a className="hover:text-primary-600" href="#contact">
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              className="hidden md:inline-block px-4 py-2 text-sm"
              href="#login"
            >
              Login
            </a>
            <a
              className="inline-block px-4 py-2 bg-primary-600 text-white rounded-md shadow hover:bg-primary-700"
              href="#get-started"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold">
        PM
      </div>
      <div className="text-lg font-semibold">PharmMate</div>
    </div>
  );
}

function Hero() {
  return (
    <section className="py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
          Your Pharmacy Business. Simplified. Scalable. Profitable.
        </h1>
        <p className="mt-6 text-lg max-w-prose">
          Buy medicines smarter, secure exclusive franchise rights, and launch
          your own private-label brands — all from one platform. Reduce
          procurement costs, claim product exclusivity for your region, and
          create your own brand with certified manufacturers.
        </p>
        <div className="mt-8 flex gap-4">
          <a
            href="#get-started"
            className="px-5 py-3 bg-primary-600 text-white rounded-md shadow-md hover:bg-primary-700"
          >
            Get Started
          </a>
          <a
            href="#book-demo"
            className="px-5 py-3 border border-gray-200 rounded-md"
          >
            Book a Demo
          </a>
        </div>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
          <Stat label="Verified Distributors" value="+120" />
          <Stat label="Retailers Onboarded" value="+450" />
          <Stat label="Manufacturing Partners" value="+25" />
        </div>
      </div>

      <div className="w-full">
        {/* Right side visual: simplified marketplace illustration */}
        <div className="border rounded-xl bg-white shadow p-6">
          <MarketplacePreview />
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="p-4 bg-white rounded-md shadow-sm">
      <div className="text-xl font-semibold">{value}</div>
      <div className="text-xs text-gray-500">{label}</div>
    </div>
  );
}

function MarketplacePreview() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs text-gray-400">Marketplace</div>
          <div className="font-medium">Paracetamol 500mg</div>
          <div className="text-sm text-gray-500">
            Medi Distributors • In stock
          </div>
        </div>
        <div className="text-right">
          <div className="font-semibold">₹25</div>
          <div className="text-xs text-gray-400">/strip</div>
        </div>
      </div>

      <div className="h-0.5 bg-gray-100 my-2" />

      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-600">Order Quantity</div>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1 border rounded">-</button>
          <div className="px-3 py-1">50</div>
          <button className="px-3 py-1 border rounded">+</button>
        </div>
      </div>

      <div className="pt-4 flex items-center justify-between">
        <div className="text-sm text-gray-600">Total</div>
        <div className="font-semibold">₹1250</div>
      </div>

      <div className="mt-4 flex gap-3">
        <button className="flex-1 px-4 py-2 bg-primary-600 text-white rounded">
          Buy Now
        </button>
        <button className="px-4 py-2 border rounded">Add to Cart</button>
      </div>
    </div>
  );
}

function ProblemSolution() {
  return (
    <section className="mt-12 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-bold">
            The Pharmacy Market is Broken. PharmMate Fixes It.
          </h2>
          <p className="mt-4 text-gray-600 max-w-prose">
            High margins, commodity product sets, and lack of manufacturing
            access make it hard for retailers to grow. PharmMate solves this
            with direct B2B sourcing, PCD franchise rights, and private-label
            manufacturing.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card
            title="High distributor margins"
            desc="Buy directly from verified distributors and reduce procurement cost."
          />
          <Card
            title="Zero product differentiation"
            desc="Secure PCD rights and become the exclusive seller in your region."
          />
          <Card
            title="Hard to build a brand"
            desc="Launch private-label products without manufacturing expertise."
          />
          <Card
            title="Inventory uncertainty"
            desc="Real-time inventory visibility from distributors."
          />
        </div>
      </div>
    </section>
  );
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{desc}</p>
    </div>
  );
}

function HowItWorks() {
  return (
    <section id="how" className="mt-12 py-12">
      <h2 className="text-2xl font-bold">How PharmMate Works</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
        <Step
          number={1}
          title="Discover"
          desc="Search medicines and suppliers in your pincode."
        />
        <Step
          number={2}
          title="Order"
          desc="Place B2B orders with verified distributors."
        />
        <Step
          number={3}
          title="Apply PCD"
          desc="Request exclusive selling rights in your region."
        />
        <Step
          number={4}
          title="Manufacture"
          desc="Order private-label production from certified units."
        />
      </div>

      <div className="mt-8">
        <ExampleTransaction />
      </div>
    </section>
  );
}

function Step({
  number,
  title,
  desc,
}: {
  number: number;
  title: string;
  desc: string;
}) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <div className="w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center mx-auto font-bold">
        {number}
      </div>
      <h4 className="mt-4 font-semibold">{title}</h4>
      <p className="mt-2 text-sm text-gray-600">{desc}</p>
    </div>
  );
}

function ExampleTransaction() {
  return (
    <div className="mt-6 p-6 bg-gradient-to-r from-white to-gray-50 rounded-lg border">
      <h3 className="font-semibold">Real Example</h3>
      <p className="text-sm text-gray-600 mt-2">
        Raj Medical Store ordered{" "}
        <strong>50 strips of Paracetamol 500mg</strong> from{" "}
        <strong>Medi Distributors</strong>. The order (ORD-1001) was confirmed
        and paid via UPI. Inventory updated on Medi Distributors' profile.
      </p>

      <div className="mt-4 text-xs text-gray-500">
        <div>
          <strong>Order:</strong> ORD-1001
        </div>
        <div>
          <strong>Total:</strong> ₹1250
        </div>
        <div>
          <strong>Payment:</strong> UPI (Completed)
        </div>
      </div>
    </div>
  );
}

function CoreModules() {
  return (
    <section id="core" className="mt-12 py-12">
      <h2 className="text-2xl font-bold">Core Modules</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <FeatureCard
          title="B2B Marketplace"
          desc="Search, compare and order medicines from verified distributors nearby."
          ctaText="Browse Marketplace"
        />
        <FeatureCard
          title="PCD Franchise Rights"
          desc="Apply for exclusive selling rights in your pin code or district."
          ctaText="Apply for Franchise"
        />
        <FeatureCard
          title="Private Label Manufacturing"
          desc="Create your own brand with certified manufacturing partners."
          ctaText="Start Manufacturing"
        />
      </div>
    </section>
  );
}

function FeatureCard({
  title,
  desc,
  ctaText,
}: {
  title: string;
  desc: string;
  ctaText: string;
}) {
  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-md bg-gray-100 flex items-center justify-center">
          Icon
        </div>
        <div>
          <h4 className="font-semibold">{title}</h4>
          <p className="mt-2 text-sm text-gray-600">{desc}</p>
          <div className="mt-4">
            <a
              className="text-sm font-medium text-primary-600 hover:underline"
              href="#"
            >
              {ctaText} →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function UiPreview() {
  return (
    <section className="mt-12 py-12">
      <h2 className="text-2xl font-bold">Inside the Platform</h2>
      <p className="mt-2 text-sm text-gray-600 max-w-prose">
        Sneak peek of the product screens your team will use — marketplace,
        inventory, PCD approvals and manufacturing requests.
      </p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <ScreenshotCard
          title="Product Search"
          desc="Search medicines by name, SKU, or HSN code."
        />
        <ScreenshotCard
          title="Order & Checkout"
          desc="Place B2B orders with quantity and delivery options."
        />
        <ScreenshotCard
          title="PCD Management"
          desc="Apply for and manage exclusive product rights by region."
        />
      </div>
    </section>
  );
}

function ScreenshotCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="h-40 bg-gray-50 rounded flex items-center justify-center text-gray-400">
        UI Mock
      </div>
      <h4 className="mt-3 font-semibold">{title}</h4>
      <p className="text-sm text-gray-600 mt-2">{desc}</p>
    </div>
  );
}

function Benefits() {
  const items = [
    {
      icon: "💰",
      title: "Higher profit margins",
      desc: "Lower procurement cost by buying directly from verified distributors.",
    },
    {
      icon: "🚚",
      title: "Faster procurement",
      desc: "Near real-time inventory and direct shipping.",
    },
    {
      icon: "🛡️",
      title: "Exclusive rights",
      desc: "PCD franchise model ensures regional exclusivity.",
    },
    {
      icon: "🏷️",
      title: "Private label",
      desc: "Become a brand owner with third-party manufacturing.",
    },
  ];

  return (
    <section className="mt-12 py-12 bg-gradient-to-b from-white to-gray-50">
      <h2 className="text-2xl font-bold">Benefits</h2>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((it) => (
          <div
            key={it.title}
            className="p-4 bg-white rounded-lg shadow-sm text-center"
          >
            <div className="text-2xl">{it.icon}</div>
            <div className="mt-2 font-semibold">{it.title}</div>
            <div className="mt-1 text-sm text-gray-600">{it.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="mt-12 py-12">
      <h2 className="text-2xl font-bold">What our users say</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Testimonial
          quote="PharmMate helped me increase margins by 18% and launch my own brand."
          name="Raj Medical Store, Patna"
        />
        <Testimonial
          quote="Inventory updates are real-time and ordering is super simple."
          name="Sunrise Pharmacy, Bangalore"
        />
        <Testimonial
          quote="PCD rights gave us a strong regional edge."
          name="Green Chemists, Lucknow"
        />
      </div>
    </section>
  );
}

function Testimonial({ quote, name }: { quote: string; name: string }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <p className="text-gray-700">“{quote}”</p>
      <div className="mt-4 text-sm font-semibold">{name}</div>
    </div>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="mt-12 py-12">
      <h2 className="text-2xl font-bold">Pricing</h2>
      <p className="mt-2 text-sm text-gray-600 max-w-prose">
        Simple, transparent plans built for retailers, franchise owners and
        brand entrepreneurs.
      </p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <PricingCard
          title="Basic"
          price="Free"
          features={["Marketplace access", "Order tracking"]}
        />
        <PricingCard
          title="Franchise"
          price="₹2,999/mo"
          features={["PCD Applications", "Priority support", "Higher limits"]}
        />
        <PricingCard
          title="Brand Owner"
          price="Custom"
          features={["Manufacturing assistance", "Dedicated account manager"]}
        />
      </div>
    </section>
  );
}

function PricingCard({
  title,
  price,
  features,
}: {
  title: string;
  price: string;
  features: string[];
}) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="mt-2 text-2xl font-bold">{price}</div>
      <ul className="mt-4 space-y-2 text-sm text-gray-600">
        {features.map((f) => (
          <li key={f}>• {f}</li>
        ))}
      </ul>
      <div className="mt-6">
        <a
          className="inline-block w-full text-center px-4 py-2 bg-primary-600 text-white rounded-md"
          href="#contact"
        >
          Choose plan
        </a>
      </div>
    </div>
  );
}

function FinalCta() {
  return (
    <section className="mt-12 py-12 text-center bg-white rounded-lg shadow p-8">
      <h2 className="text-2xl font-bold">
        Ready to grow your pharmacy business?
      </h2>
      <p className="mt-2 text-gray-600">
        Start with PharmMate today. Onboarding in 10 minutes — no hidden fees.
      </p>
      <div className="mt-6 flex items-center justify-center gap-4">
        <a
          className="px-6 py-3 bg-primary-600 text-white rounded-md"
          href="#get-started"
        >
          Get Started
        </a>
        <a className="px-6 py-3 border rounded-md" href="#book-demo">
          Request Demo
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mt-12 bg-white border-t">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <Logo />
          <p className="mt-4 text-sm text-gray-600 max-w-sm">
            PharmMate — B2B marketplace and private-label manufacturing gateway
            for pharmacies, distributors, and manufacturers.
          </p>
        </div>
        <div className="text-sm text-gray-700">
          <div className="font-semibold">Product</div>
          <ul className="mt-2 space-y-1">
            <li>
              <a className="hover:underline" href="#marketplace">
                Marketplace
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#pcd">
                PCD
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#private-label">
                Manufacturing
              </a>
            </li>
          </ul>
        </div>
        <div className="text-sm text-gray-700">
          <div className="font-semibold">Contact</div>
          <div className="mt-2">support@pharmmate.example</div>
          <div className="mt-1">+91 98765 43210</div>
        </div>
      </div>
      <div className="text-center text-xs text-gray-400 py-4">
        © {new Date().getFullYear()} PharmMate. All rights reserved.
      </div>
    </footer>
  );
}

/* -------------------------
   Tailwind color alias for primary
   In your Tailwind config add:
   theme: { extend: { colors: { 'primary-600': '#0f766e' } } }
   -------------------------*/
