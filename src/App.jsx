import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';

function Button({ children, className = '', variant, asChild, ...props }) {
  const base =
    'inline-flex items-center justify-center rounded-2xl font-semibold transition focus:outline-none focus:ring-4 focus:ring-red-100 disabled:pointer-events-none disabled:opacity-50';
  const variantClass =
    variant === 'outline'
      ? 'border border-zinc-300 bg-white text-zinc-950 hover:bg-zinc-100'
      : 'bg-red-700 text-white hover:bg-red-800';

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      ...props,
      className: `${base} ${variantClass} ${className} ${
        children.props.className || ''
      }`.trim(),
    });
  }

  return (
    <button
      {...props}
      className={`${base} ${variantClass} ${className}`.trim()}
    >
      {children}
    </button>
  );
}

function Card({ children, className = '' }) {
  return <div className={className}>{children}</div>;
}

function CardContent({ children, className = '' }) {
  return <div className={className}>{children}</div>;
}

const business = {
  name: 'Pekin Information Technology Solutions, LLC',
  shortName: 'Pekin ITS',
  email: 'Matthew.peterson@pekinits.com',
  location: 'Pekin, Illinois',
  serviceArea: 'Pekin, Peoria, and surrounding Central Illinois communities',
};

function Icon({ name, className = 'h-6 w-6' }) {
  const common = {
    className,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': 'true',
  };

  const icons = {
    shield: (
      <svg {...common}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    laptop: (
      <svg {...common}>
        <rect x="4" y="5" width="16" height="10" rx="2" />
        <path d="M2 19h20" />
        <path d="M8 19h8" />
      </svg>
    ),
    home: (
      <svg {...common}>
        <path d="m3 10 9-7 9 7" />
        <path d="M5 10v10h14V10" />
        <path d="M9 20v-6h6v6" />
      </svg>
    ),
    network: (
      <svg {...common}>
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="8.5" y="14" width="7" height="7" rx="1" />
        <path d="M10 6.5h4" />
        <path d="M12 10v4" />
      </svg>
    ),
    wifi: (
      <svg {...common}>
        <path d="M5 13a10 10 0 0 1 14 0" />
        <path d="M8.5 16.5a5 5 0 0 1 7 0" />
        <path d="M12 20h.01" />
      </svg>
    ),
    hardDrive: (
      <svg {...common}>
        <rect x="3" y="6" width="18" height="12" rx="2" />
        <path d="M7 14h.01" />
        <path d="M11 14h6" />
      </svg>
    ),
    check: (
      <svg {...common}>
        <circle cx="12" cy="12" r="10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    arrowRight: (
      <svg {...common}>
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    ),
    mail: (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
    mapPin: (
      <svg {...common}>
        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    clock: (
      <svg {...common}>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    star: (
      <svg {...common}>
        <path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.3L5.8 21 7 14.2 2 9.3l6.9-1L12 2Z" />
      </svg>
    ),
    menu: (
      <svg {...common}>
        <path d="M4 6h16" />
        <path d="M4 12h16" />
        <path d="M4 18h16" />
      </svg>
    ),
    x: (
      <svg {...common}>
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    ),
    server: (
      <svg {...common}>
        <rect x="3" y="4" width="18" height="6" rx="2" />
        <rect x="3" y="14" width="18" height="6" rx="2" />
        <path d="M7 7h.01" />
        <path d="M7 17h.01" />
      </svg>
    ),
    people: (
      <svg {...common}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    briefcase: (
      <svg {...common}>
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  };

  return icons[name] || icons.check;
}

const services = [
  {
    icon: 'briefcase',
    title: 'Small Business IT Support',
    description:
      'Help for local offices, solo businesses, and small teams that need reliable support without hiring full-time IT.',
  },
  {
    icon: 'laptop',
    title: 'Computer Repair & Upgrades',
    description:
      'Diagnostics, Windows issues, slow computer cleanup, SSD installs, RAM upgrades, and hardware replacement.',
  },
  {
    icon: 'wifi',
    title: 'Wi-Fi & Network Help',
    description:
      'Router setup, signal issues, device connectivity, small office network cleanup, and troubleshooting.',
  },
  {
    icon: 'server',
    title: 'Office Technology Setup',
    description:
      'Workstations, printers, email, Microsoft 365, shared devices, and practical setup help for day-to-day operations.',
  },
  {
    icon: 'hardDrive',
    title: 'Data Transfer & Backup Help',
    description:
      'Move files to a new PC, organize important documents, and set up simple backup options for peace of mind.',
  },
  {
    icon: 'home',
    title: 'Residential Tech Support',
    description:
      'Friendly support for home computers, printers, internet issues, email setup, and general technology problems.',
  },
];

const process = [
  {
    title: 'Reach out with the issue',
    description:
      'Send a short message about what is happening, what device or system is affected, and where you are located.',
  },
  {
    title: 'Get a clear next step',
    description:
      'You will receive a practical recommendation, whether that is remote help, an on-site visit, or a repair appointment.',
  },
  {
    title: 'Get the work handled',
    description:
      'The goal is to fix the issue, explain what changed, and help prevent the same problem from coming back.',
  },
];

const localHighlights = [
  'Support for homes, small businesses, and local offices',
  'Help with everyday technology problems, not just large IT projects',
  'Remote and on-site help available depending on the issue',
  'Straightforward communication before work begins',
];

const iconTests = [
  'shield',
  'laptop',
  'home',
  'network',
  'wifi',
  'hardDrive',
  'check',
  'arrowRight',
  'mail',
  'mapPin',
  'clock',
  'star',
  'menu',
  'x',
  'server',
  'people',
  'briefcase',
];

function runIconSelfTest() {
  return iconTests.every((name) => typeof name === 'string' && name.length > 0);
}

export default function PekinITSWebsite() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    businessName: '',
    service: '',
    message: '',
  });
  const [formError, setFormError] = useState('');
  const year = useMemo(() => new Date().getFullYear(), []);
  const iconsReady = useMemo(() => runIconSelfTest(), []);

  const navItems = ['Services', 'Business Support', 'Process', 'Contact'];

  const scrollTo = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMobileOpen(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setFormError(
        'Please include your name, email, and a short description of what you need help with.'
      );
      return;
    }

    setFormError('');

    const subject = encodeURIComponent(
      `Service Request from ${form.name}${
        form.businessName ? ` - ${form.businessName}` : ''
      }`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nBusiness / Organization: ${
        form.businessName || 'Not provided'
      }\nService Needed: ${form.service || 'Not selected'}\n\nMessage:\n${
        form.message
      }`
    );

    window.location.href = `mailto:${business.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-stone-50 text-zinc-950">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-28 right-0 h-96 w-96 rounded-full bg-red-200/50 blur-3xl" />
        <div className="absolute top-[36rem] -left-20 h-96 w-96 rounded-full bg-zinc-200/70 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <button
            onClick={() => scrollTo('top')}
            className="flex items-center gap-3 text-left"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-red-700 text-white shadow-lg shadow-red-900/20">
              <Icon name="server" className="h-6 w-6" />
            </div>
            <div>
              <div className="text-lg font-black leading-tight text-zinc-950">
                {business.shortName}
              </div>
              <div className="text-xs font-medium text-zinc-600">
                Local IT Support
              </div>
            </div>
          </button>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() =>
                  scrollTo(item.toLowerCase().replaceAll(' ', '-'))
                }
                className="text-sm font-semibold text-zinc-700 transition hover:text-red-700"
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button
              onClick={() => scrollTo('contact')}
              className="rounded-2xl bg-red-700 px-5 text-white hover:bg-red-800"
            >
              Request Help
            </Button>
          </div>

          <button
            className="md:hidden text-zinc-950"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <Icon name={mobileOpen ? 'x' : 'menu'} className="h-6 w-6" />
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-zinc-200 bg-white px-4 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() =>
                    scrollTo(item.toLowerCase().replaceAll(' ', '-'))
                  }
                  className="rounded-xl px-3 py-2 text-left font-semibold text-zinc-700 hover:bg-red-50 hover:text-red-700"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <main id="top" className="relative">
        {!iconsReady && <div className="sr-only">Icon self-test failed</div>}

        <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-200 bg-white px-4 py-2 text-sm font-semibold text-red-800 shadow-sm">
              <Icon name="mapPin" className="h-4 w-4" />
              Pekin-based technology support for homes and businesses
            </div>

            <h1 className="max-w-4xl text-5xl font-black tracking-tight text-zinc-950 sm:text-6xl lg:text-7xl">
              Friendly IT help for homes and local businesses that need things
              to just work.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-700">
              {business.name} helps local businesses and residents with computer
              repair, Wi-Fi issues, office technology, data transfer, and
              practical IT support.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                onClick={() => scrollTo('contact')}
                className="h-12 rounded-2xl bg-red-700 px-6 text-base font-semibold text-white hover:bg-red-800"
              >
                Request IT Help{' '}
                <Icon name="arrowRight" className="ml-2 h-5 w-5" />
              </Button>
              <Button
                onClick={() => scrollTo('services')}
                variant="outline"
                className="h-12 rounded-2xl border-zinc-300 bg-white px-6 text-base font-semibold text-zinc-950 hover:bg-zinc-100"
              >
                View Services
              </Button>
            </div>

            <div className="mt-8 grid gap-3 text-sm font-medium text-zinc-700 sm:grid-cols-2">
              {localHighlights.slice(0, 4).map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <Icon
                    name="check"
                    className="mt-0.5 h-4 w-4 shrink-0 text-red-700"
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <Card className="overflow-hidden rounded-[2rem] border-zinc-200 bg-white shadow-2xl shadow-zinc-200/80">
              <CardContent className="p-7 sm:p-8">
                <div className="inline-flex rounded-full bg-red-50 px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-red-800">
                  Local Support Focus
                </div>
                <h2 className="mt-5 text-3xl font-black tracking-tight text-zinc-950">
                  Local support without the big-company feel.
                </h2>
                <p className="mt-4 text-base leading-7 text-zinc-700">
                  Technology problems slow down work and daily life. Pekin ITS
                  gives homes, local businesses, and small offices a dependable
                  local contact for everyday IT issues, quick fixes, and
                  practical guidance.
                </p>

                <div className="mt-7 grid gap-3">
                  {[
                    'Office computers and user support',
                    'Printers, Wi-Fi, and network troubleshooting',
                    'Hardware upgrades and repair guidance',
                    'Remote or on-site help when appropriate',
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-stone-50 p-4"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-red-700 text-white">
                        <Icon name="check" className="h-4 w-4" />
                      </div>
                      <div className="font-semibold text-zinc-800">{item}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        <section className="border-y border-zinc-200 bg-white">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
            {[
              ['mapPin', business.location],
              ['clock', 'Remote and on-site support'],
              ['mail', 'Email-first scheduling'],
            ].map(([iconName, text]) => (
              <div key={text} className="flex items-center gap-3 text-zinc-700">
                <div className="rounded-2xl bg-red-50 p-3 text-red-700">
                  <Icon name={iconName} className="h-5 w-5" />
                </div>
                <span className="font-bold">{text}</span>
              </div>
            ))}
          </div>
        </section>

        <section
          id="services"
          className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
        >
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-red-700">
              Services
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-zinc-950 sm:text-5xl">
              Practical IT services for local businesses and homes.
            </h2>
            <p className="mt-5 text-lg leading-8 text-zinc-700">
              Get help with the technology that keeps your workday moving. If
              the issue does not fit neatly into a category, send a message and
              describe what is happening.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card
                key={service.title}
                className="rounded-3xl border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-red-200 hover:shadow-xl hover:shadow-zinc-200/80"
              >
                <CardContent className="p-6">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-700">
                    <Icon name={service.icon} className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-black text-zinc-950">
                    {service.title}
                  </h3>
                  <p className="mt-3 leading-7 text-zinc-700">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="business-support" className="bg-zinc-950 text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-red-300">
                Business Support
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
                A local IT contact for everyday technology problems.
              </h2>
              <p className="mt-5 text-lg leading-8 text-zinc-200">
                Homes, solo businesses, and small offices often need dependable
                help without a complicated service contract. Pekin ITS is built
                for practical support when computers, printers, Wi-Fi, software,
                or setup issues get in the way.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                'New workstation setup',
                'Printer and scanner issues',
                'Microsoft 365 and email help',
                'Wi-Fi and router troubleshooting',
                'Device cleanup and upgrades',
                'General technical support',
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-white/10 bg-white/[0.06] p-5"
                >
                  <Icon name="check" className="mb-4 h-5 w-5 text-red-300" />
                  <div className="font-bold text-white">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="process"
          className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
        >
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-red-700">
                Process
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-zinc-950 sm:text-5xl">
                Simple from the first message.
              </h2>
              <p className="mt-5 text-lg leading-8 text-zinc-700">
                The process is designed to be easy for busy owners, office
                managers, and residents who just need help getting the issue
                handled.
              </p>
            </div>
            <div className="space-y-4">
              {process.map((step, index) => (
                <div
                  key={step.title}
                  className="flex gap-4 rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-red-700 text-lg font-black text-white">
                    {index + 1}
                  </div>
                  <div>
                    <div className="text-xl font-black text-zinc-950">
                      {step.title}
                    </div>
                    <p className="mt-1 leading-7 text-zinc-700">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <Card className="rounded-[2rem] border-red-200 bg-gradient-to-br from-red-700 to-zinc-950 text-white shadow-2xl shadow-red-950/20">
            <CardContent className="grid gap-8 p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:p-10">
              <div>
                <div className="flex items-center gap-2 text-red-100">
                  <Icon name="star" className="h-5 w-5" /> Local, practical, and
                  built for everyday technology needs
                </div>
                <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                  Need help with a computer, network, or business tech issue?
                </h2>
                <p className="mt-4 max-w-3xl text-zinc-100">
                  Send a quick message with what is happening and Pekin ITS will
                  follow up by email.
                </p>
              </div>
              <Button
                onClick={() => scrollTo('contact')}
                className="h-12 rounded-2xl bg-white px-6 font-black text-zinc-950 hover:bg-zinc-100"
              >
                Contact Pekin ITS
              </Button>
            </CardContent>
          </Card>
        </section>

        <section id="contact" className="border-t border-zinc-200 bg-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-red-700">
                Contact
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-zinc-950 sm:text-5xl">
                Request IT support.
              </h2>
              <p className="mt-5 text-lg leading-8 text-zinc-700">
                Fill out the form and your email app will open with the request
                ready to send. You can also email directly using the address
                below.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href={`mailto:${business.email}`}
                  className="flex items-center gap-4 rounded-3xl border border-zinc-200 bg-stone-50 p-5 transition hover:border-red-200 hover:bg-red-50"
                >
                  <Icon name="mail" className="h-6 w-6 text-red-700" />
                  <div>
                    <div className="font-black text-zinc-950">Email</div>
                    <div className="text-zinc-700">{business.email}</div>
                  </div>
                </a>
                <div className="flex items-center gap-4 rounded-3xl border border-zinc-200 bg-stone-50 p-5">
                  <Icon name="mapPin" className="h-6 w-6 text-red-700" />
                  <div>
                    <div className="font-black text-zinc-950">Service Area</div>
                    <div className="text-zinc-700">{business.serviceArea}</div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="rounded-[2rem] border-zinc-200 bg-stone-50 shadow-xl shadow-zinc-200/70">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-2xl font-black text-zinc-950">
                  Contact Form
                </h3>
                <p className="mt-3 text-zinc-700">
                  Share the basics and the message will be prepared as an email
                  to Pekin ITS.
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                  <div>
                    <label className="mb-2 block text-sm font-bold text-zinc-800">
                      Name
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-zinc-950 outline-none transition placeholder:text-zinc-400 focus:border-red-600 focus:ring-4 focus:ring-red-100"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-bold text-zinc-800">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-zinc-950 outline-none transition placeholder:text-zinc-400 focus:border-red-600 focus:ring-4 focus:ring-red-100"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-bold text-zinc-800">
                      Business / Organization Name
                    </label>
                    <input
                      name="businessName"
                      value={form.businessName}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-zinc-950 outline-none transition placeholder:text-zinc-400 focus:border-red-600 focus:ring-4 focus:ring-red-100"
                      placeholder="Optional"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-bold text-zinc-800">
                      Service Needed
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-zinc-950 outline-none transition focus:border-red-600 focus:ring-4 focus:ring-red-100"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service.title}>{service.title}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-bold text-zinc-800">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-zinc-950 outline-none transition placeholder:text-zinc-400 focus:border-red-600 focus:ring-4 focus:ring-red-100"
                      placeholder="Describe the issue, device, location, and how soon you need help."
                    />
                  </div>
                  {formError && (
                    <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-800">
                      {formError}
                    </div>
                  )}
                  <Button
                    type="submit"
                    className="h-12 w-full rounded-2xl bg-red-700 text-base font-black text-white hover:bg-red-800"
                  >
                    Prepare Email Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-zinc-600 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            © {year} {business.name}. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-4 font-semibold">
            <span>Local IT Support</span>
            <span>Computer Repair</span>
            <span>Consulting</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
