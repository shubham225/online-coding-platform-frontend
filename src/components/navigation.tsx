import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

type PropsType = { path: string };

const navarLinkStyle = cn(
  "relative inline-flex h-10 items-center justify-center px-4 py-2 text-sm font-normal transition-colors",
  "text-accent-foreground hover:text-accent-foreground focus:text-accent-foreground",
  " focus:text-primary",
  // underline animation (from left)
  "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300",
  "hover:after:w-full"
);

const navMenuItems: { href: string; name: string | React.ReactNode }[] = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/problems",
    name: "Practice",
  },
  // {
  //   href: "/admin",
  //   name: "Admin",
  // },
  {
    href: "/contribute-question",
    name: "Contribute",
  },
  {
    href: "/about",
    name: "About",
  },
];

export default function Navigation({ path }: PropsType) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navMenuItems.map((item) => (
          <NavigationMenuItem key={item.href}>
            <NavigationMenuLink asChild>
              <Link
                href={item.href}
                className={cn(
                  navarLinkStyle,
                  path === item.href && "text-primary"
                )}
              >
                {item.name}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
