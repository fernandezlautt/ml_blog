"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Search,
  Brain,
  Home,
  BookOpen,
  FlaskConical,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Tutorials", href: "/tutorials", icon: BookOpen },
    { name: "Research", href: "/research", icon: FlaskConical },
    { name: "About", href: "/blog/about", icon: Users },
  ];

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        className={`fixed top-4 right-4 z-50 xl:hidden`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        <span className="sr-only">Toggle menu</span>
      </Button>

      <nav
        className={`fixed left-0 top-0 z-40 h-full w-64 bg-zinc-900 text-zinc-100 transform transition-transform duration-200 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"} xl:translate-x-0`}
      >
        <ScrollArea className="h-full">
          <div className="p-4">
            <div className="flex items-center mb-8 ">
              <Brain className="h-8 w-8 text-zinc-100" />
              <span className="ml-2 text-xl font-bold">ML Blog</span>
            </div>

            <div className="mb-8">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-zinc-400" />
                <Input
                  type="search"
                  placeholder="Search"
                  className="pl-8 bg-zinc-800 border-zinc-700 text-zinc-100 placeholder-zinc-400"
                />
              </div>
            </div>

            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="flex items-center p-2 rounded-md hover:bg-zinc-800 transition-colors"
                  >
                    <item.icon className="h-5 w-5 mr-3" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </ScrollArea>
      </nav>
    </>
  );
};

export default Navbar;
