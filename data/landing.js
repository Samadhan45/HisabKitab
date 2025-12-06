import {
  BarChart3,
  Receipt,
  PieChart,
  CreditCard,
  Globe,
  Zap,
} from "lucide-react";

// Stats Data
export const statsData = [
  {
    value: "50K+",
    label: "Active Users",
  },
  {
    value: "₹2B+",
    label: "Transactions Tracked",
  },
  {
    value: "99.9%",
    label: "Uptime",
  },
  {
    value: "4.9/5",
    label: "User Rating",
  },
];

// Features Data
export const featuresData = [
  {
    icon: <BarChart3 className="h-8 w-8 text-emerald-600" />,
    title: "Advanced Financial Analytics",
    description:
      "Get detailed insights into your spending and investments with AI-powered analytics, perfect for the Indian financial landscape.",
  },
  {
    icon: <Receipt className="h-8 w-8 text-emerald-600" />,
    title: "Smart Bill & Receipt Scanner",
    description:
      "Automatically extract data from your electricity bills, grocery receipts, and more using advanced AI technology, simplifying your expense management.",
  },
  {
    icon: <PieChart className="h-8 w-8 text-emerald-600" />,
    title: "Personalized Budget Planning",
    description: "Create and manage budgets tailored to Indian income and expenditure patterns with intelligent recommendations.",
  },
  {
    icon: <CreditCard className="h-8 w-8 text-emerald-600" />,
    title: "Multi-Bank & Wallet Support",
    description: "Manage multiple bank accounts, credit cards, and popular digital wallets like PayTM and Google Pay, all in one secure place.",
  },
  {
    icon: <Globe className="h-8 w-8 text-emerald-600" />,
    title: "Multi-Currency & NRI Support",
    description: "Full support for Indian Rupees and other major currencies with real-time conversion, making it ideal for NRIs and international transactions.",
  },
  {
    icon: <Zap className="h-8 w-8 text-emerald-600" />,
    title: "Automated Tax & Investment Insights",
    description: "Get automated financial insights and recommendations specifically for tax savings (e.g., Section 80C) and smart investment opportunities in India.",
  },
];

// How It Works Data
export const howItWorksData = [
  {
    icon: <CreditCard className="h-6 w-6 text-white" />,
    title: "1. Create Your HisabKitab Account",
    description:
      "Get started in minutes with our simple and secure sign-up process, compliant with Indian data privacy standards.",
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-white" />,
    title: "2. Link Your Accounts & Track Spending",
    description:
      "Securely link your Indian bank accounts and digital wallets to automatically categorize and track your transactions in real-time.",
  },
  {
    icon: <PieChart className="h-6 w-6 text-white" />,
    title: "3. Get Personalized Financial Insights",
    description:
      "Receive AI-powered insights and recommendations tailored to your financial habits, helping you save more and invest smarter in the Indian market.",
  },
];

// Testimonials Data
export const testimonialsData = [
  {
    name: <span style={{ color: '#FFD700' }}>Priya Patil</span>, // Gold color
    role: "Homemaker & Budget Planner",
    // image: "https://randomuser.me/api/portraits/women/68.jpg",
    quote:
      "HisabKitab has made managing our household budget so easy! The receipt scanner is a lifesaver for tracking daily expenses, and the insights help me save a lot.",
  },
  {
    name: <span style={{ color: '#00FFFF' }}>Amit Kulkarni</span>, // Cyan color
    role: "Software Engineer",
    // image: "https://randomuser.me/api/portraits/lego/6.jpg",
    quote:
      "As a freelancer, HisabKitab helps me keep my business and personal finances separate and organized. The automated insights are brilliant for tax planning.",
  },
  {
    name: <span style={{ color: '#FF6347' }}>Renuka Deshmukh</span>, // Tomato color
    role: "Startup Founder",
    // image: "https://randomuser.me/api/portraits/women/67.jpg",
    quote:
      "HisabKitab is an indispensable tool for our startup. The multi-account support and advanced analytics give us a clear picture of our cash flow, crucial for growth in India.",
  },
];

// Pricing Data
export const pricingData = [
  {
    name: "Free",
    price: "₹0",
    description: "Perfect for individuals starting to track their expenses.",
    features: [
      "Track up to 2 accounts",
      "Basic expense categorization",
      "Monthly budget planning",
      "5 Receipt scans/month",
      "Basic reports",
    ],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Pro",
    price: "₹199/mo",
    description: "For power users who want advanced insights and automation.",
    features: [
      "Unlimited accounts",
      "Advanced AI analytics & insights",
      "Smart recurring transactions",
      "Unlimited Receipt scans",
      "Export to CSV/PDF",
      "Priority Support",
    ],
    cta: "Start 14-Day Free Trial",
    popular: true,
  },
  {
    name: "Business",
    price: "₹499/mo",
    description: "Ideal for freelancers and small business owners.",
    features: [
      "Everything in Pro",
      "Business expense separation",
      "Tax estimation & reports (GST)",
      "Multi-user access (coming soon)",
      "dedicated account manager",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

// FAQ Data
export const faqData = [
  {
    question: "Is my financial data safe with HisabKitab?",
    answer:
      "Yes, absolutely. We use bank-grade 256-bit encryption to protect your data. We never store your bank credentials directly; we use secure, regulated partners to fetch read-only transaction data.",
  },
  {
    question: "Can I track expenses manually without linking a bank account?",
    answer:
      "Yes! You can add transactions manually, and our CSV import feature allows you to bulk upload statements from any bank if you prefer not to link directly.",
  },
  {
    question: "Does HisabKitab support Indian investments like Mutual Funds and Stocks?",
    answer:
      "Currently, we focus on expense and budget tracking. However, basic investment tracking is available, and we are working on direct integration with NSDL/CDSL for real-time portfolio tracking.",
  },
  {
    question: "Is there a mobile app available?",
    answer:
      "Our web platform is fully responsive and works perfectly on mobile browsers. A dedicated Android and iOS app is currently in development and will be launched soon!",
  },
  {
    question: "How does the receipt scanner work?",
    answer:
      "Our receipt scanner uses advanced AI (Gemini) to extract merchant details, date, and total amount from photos of your bills. It automatically categorizes the expense for you.",
  },
];
