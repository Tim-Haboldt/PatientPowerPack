import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Book,
    ChevronRight,
    FileText,
    Key,
    Share2,
    Shield,
    UserCircle,
    Volume2,
} from "lucide-react";
import Link from "next/link";

export default function PatientLandingPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <header className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                        <span className="block">Your Health, Your Control</span>
                        <span className="block text-blue-600">
                            Empowerment through knowledge
                        </span>
                    </h1>
                    <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                        Take charge of your healthcare journey with our
                        simplified, easy-to-use medical records system.
                    </p>
                </header>

                <main>
                    <section className="mb-16">
                        <div className="flex flex-row gap-4 items-center  mb-8">
                            <h2 className="text-3xl font-bold text-gray-900">
                                Why Choose Our Platform?
                            </h2>
                            <Link href="/hospital">
                                (
                                <span className="text-blue-600">
                                    For Hospitals
                                </span>
                                )
                            </Link>
                        </div>
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <Book className="mr-2 h-6 w-6 text-blue-500" />
                                        Empowerment through education
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p>
                                        Understand your disease pathway in
                                        patient-friendly language.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <Volume2 className="mr-2 h-6 w-6 text-blue-500" />
                                        Empowerment through communication
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p>
                                        Quickly share the medical information
                                        you wish to to be shared with healthcare
                                        providers for better, faster care.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <Key className="mr-2 h-6 w-6 text-blue-500" />
                                        Empowerment through access to medical
                                        data
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p>
                                        Access your entire medical history in
                                        one secure location, anytime you need
                                        it.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    <section className="mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">
                            How It Works for You
                        </h2>
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <UserCircle className="mr-2 h-6 w-6 text-blue-500" />
                                    Your Personal Health Hub
                                </CardTitle>
                                <CardDescription>
                                    Empowering you to manage your health
                                    information
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="list-disc pl-5 space-y-4">
                                    <li>
                                        Access your complete medical history
                                        anytime, anywhere
                                    </li>
                                    <li>
                                        Add personal notes, allergies, and
                                        treatment experiences
                                    </li>
                                    <li>
                                        Easily share your records with new
                                        healthcare providers
                                    </li>
                                    <li>
                                        Receive notifications for upcoming
                                        appointments and medication reminders
                                    </li>
                                    <li>
                                        Track your health progress over time
                                    </li>
                                    <li>
                                        Securely communicate with your
                                        healthcare team
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </section>

                    <section className="mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">
                            Patient Benefits
                        </h2>
                        <div className="grid gap-8 md:grid-cols-2">
                            <Card>
                                <CardHeader>
                                    <CardTitle>
                                        Improved Care Coordination
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p>
                                        Ensure all your healthcare providers
                                        have access to the medical history you
                                        wish to share, leading to
                                        better-informed decisions and
                                        coordinated care.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>
                                        Emergency Preparedness
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p>
                                        In case of emergencies, your critical
                                        health information is readily available
                                        to medical professionals, potentially
                                        saving crucial time.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Medication Management</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p>
                                        Keep track of your medications, dosages,
                                        and schedules all in one place, reducing
                                        the risk of medication errors.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Health Ownership</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p>
                                        Take an active role in your healthcare
                                        by having a comprehensive view of your
                                        health data and history.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    <section className="text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Ready to Take Control of Your Health?
                        </h2>
                        <p className="mb-8 text-xl text-gray-600">
                            Join thousands of patients who have already
                            empowered their healthcare journey.
                        </p>
                        <Link href="/signin">
                            <Button size="lg" className="text-lg">
                                Sign Up Now{" "}
                                <ChevronRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                    </section>
                </main>
            </div>
        </div>
    );
}
