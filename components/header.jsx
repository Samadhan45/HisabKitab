import React from "react";
import { Button } from "./ui/button";
import { PenBox, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { checkUser } from "@/lib/checkUser";
import Image from "next/image";

const Header = async () => {
  await checkUser();

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src={"/logo.png"}
            alt="HisabKitab Logo"
            width={200}
            height={80}
            className="h-10 md:h-12 w-auto object-contain"
          />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <SignedOut>
            <a href="#features" className="text-muted-foreground hover:text-primary font-medium transition-colors">
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-muted-foreground hover:text-primary font-medium transition-colors"
            >
              How It Works
            </a>
          </SignedOut>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <SignedIn>
            <Link
              href="/dashboard"
              className="text-muted-foreground hover:text-primary flex items-center gap-2"
            >
              <Button variant="ghost" className="hidden md:flex">
                <LayoutDashboard size={18} className="mr-2" />
                Dashboard
              </Button>
            </Link>
            <a href="/transaction/create">
              <Button className="flex items-center gap-2">
                <PenBox size={18} />
                <span className="hidden md:inline">Add Transaction</span>
              </Button>
            </a>
          </SignedIn>
          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
              <Button variant="ghost">
                Login
              </Button>
            </SignInButton>
            <SignInButton forceRedirectUrl="/dashboard">
              <Button>
                Get Started
              </Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10 ring-2 ring-primary/20 hover:ring-primary/40 transition-all",
                },
              }}
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;

