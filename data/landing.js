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
    icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
    title: "Advanced Financial Analytics",
    description:
      "Get detailed insights into your spending and investments with AI-powered analytics, perfect for the Indian financial landscape.",
  },
  {
    icon: <Receipt className="h-8 w-8 text-blue-600" />,
    title: "Smart Bill & Receipt Scanner",
    description:
      "Automatically extract data from your electricity bills, grocery receipts, and more using advanced AI technology, simplifying your expense management.",
  },
  {
    icon: <PieChart className="h-8 w-8 text-blue-600" />,
    title: "Personalized Budget Planning",
    description: "Create and manage budgets tailored to Indian income and expenditure patterns with intelligent recommendations.",
  },
  {
    icon: <CreditCard className="h-8 w-8 text-blue-600" />,
    title: "Multi-Bank & Wallet Support",
    description: "Manage multiple bank accounts, credit cards, and popular digital wallets like PayTM and Google Pay, all in one secure place.",
  },
  {
    icon: <Globe className="h-8 w-8 text-blue-600" />,
    title: "Multi-Currency & NRI Support",
    description: "Full support for Indian Rupees and other major currencies with real-time conversion, making it ideal for NRIs and international transactions.",
  },
  {
    icon: <Zap className="h-8 w-8 text-blue-600" />,
    title: "Automated Tax & Investment Insights",
    description: "Get automated financial insights and recommendations specifically for tax savings (e.g., Section 80C) and smart investment opportunities in India.",
  },
];

// How It Works Data
export const howItWorksData = [
  {
    icon: <CreditCard className="h-8 w-8 text-blue-600" />,
    title: "1. Create Your Welth Account",
    description:
      "Get started in minutes with our simple and secure sign-up process, compliant with Indian data privacy standards.",
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
    title: "2. Link Your Accounts & Track Spending",
    description:
      "Securely link your Indian bank accounts and digital wallets to automatically categorize and track your transactions in real-time.",
  },
  {
    icon: <PieChart className="h-8 w-8 text-blue-600" />,
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
      "Welth has made managing our household budget so easy! The receipt scanner is a lifesaver for tracking daily expenses, and the insights help me save a lot.",
  },
  {
    name: <span style={{ color: '#00FFFF' }}>Amit Kulkarni</span>, // Cyan color
    role: "Software Engineer",
    // image: "https://randomuser.me/api/portraits/lego/6.jpg",
    quote:
      "As a freelancer, Welth helps me keep my business and personal finances separate and organized. The automated insights are brilliant for tax planning.",
  },
  {
    name: <span style={{ color: '#FF6347' }}>Renuka Deshmukh</span>, // Tomato color
    role: "Startup Founder",
    // image: "https://randomuser.me/api/portraits/women/67.jpg",
    quote:
      "Welth is an indispensable tool for our startup. The multi-account support and advanced analytics give us a clear picture of our cash flow, crucial for growth in India.",
  },
];