'use client'
// You cannot use react hooks directly in next js because it is a server side rendering framework, so you have to add the above line 

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import Link from "next/link"; // You can use the link component to navigate to different pages in your app
import { cn } from "@/utils/cn";

function Navbar({ className }: { className?: string }) {

    const [active, setActive] = useState<string | null>(null);

    return (
        <div className={cn("fixed top-10 inset-x-0 md:max-w-2xl max-w-3/4 mx-auto z-50", className)}> 
            <Menu setActive={setActive}>
                <Link href="/">
                <MenuItem setActive={setActive} active={active} item="Home"/>
                </Link>
                
                <MenuItem setActive={setActive} active={active} item="Our Courses">
                <div className="flex flex-col space-y-4 text-sm">
                 <HoveredLink href="/courses">All courses</HoveredLink>
                 <HoveredLink href="/courses">Basic Music Theory</HoveredLink>
                 <HoveredLink href="/courses">Advanced Composition</HoveredLink>
                 <HoveredLink href="/courses">Songwriting</HoveredLink>
                 <HoveredLink href="/courses">Music Production</HoveredLink>
                 </div>
                </MenuItem>

                <Link href="/contact">
                <MenuItem setActive={setActive} active={active} item="Contact"/>
                </Link>
            </Menu>
        </div>
    )
}


export default Navbar
