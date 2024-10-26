"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    console.log(pathname);

    return (
        <nav className="bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0 flex items-center mt-9">
                        <Link href="/">
                            <Image
                                src="/HealX_Logo.svg"
                                alt="Company-Logo"
                                width={110}
                                height={110}
                            />
                        </Link>
                    </div>
                    {pathname !== "/dashboard" ? (
                        <div className="flex items-center space-x-4">
                            <Link href="/signin">
                                <Button variant="ghost">Log in</Button>
                            </Link>

                            <Link href="/signin">
                                <Button>Sign up</Button>
                            </Link>
                        </div>
                    ) : (
                        <div />
                    )}
                </div>
            </div>
        </nav>
    );
}
