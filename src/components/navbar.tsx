import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link href="/">
                            <span className="text-2xl font-bold text-primary">
                                HealX
                            </span>
                        </Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link href="https://apphackathon100-sandbox.mxapps.io/index.html?profile=Responsive">
                            <Button variant="ghost">Log in</Button>
                        </Link>

                        <Link href="https://apphackathon100-sandbox.mxapps.io/index.html?profile=Responsive">
                            <Button>Sign up</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
