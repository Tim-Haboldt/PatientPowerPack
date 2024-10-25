import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    ChevronRight,
    FileText,
    Share2,
    Shield,
    Building2,
    Clock,
    TrendingUp,
} from "lucide-react";

export default function HospitalLandingPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <header className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                        <span className="block">Streamline Patient Care</span>
                        <span className="block text-blue-600">
                            Advanced Medical Records for Hospitals
                        </span>
                    </h1>
                    <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                        Revolutionize your hospital's record management and
                        enhance patient care with our secure, efficient system.
                    </p>
                </header>

                <main>
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">
                            Why Choose Our Platform?
                        </h2>
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <FileText className="mr-2 h-6 w-6 text-blue-500" />
                                        Comprehensive Records
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p>
                                        Access complete patient histories for
                                        more informed decision-making and better
                                        care coordination.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <Share2 className="mr-2 h-6 w-6 text-blue-500" />
                                        Seamless Integration
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p>
                                        Easily integrate with existing hospital
                                        systems for a smooth transition and
                                        improved workflow.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <Shield className="mr-2 h-6 w-6 text-blue-500" />
                                        HIPAA Compliant
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p>
                                        Our system adheres to the highest
                                        standards of data protection, ensuring
                                        HIPAA compliance at all times.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    <section className="mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">
                            How It Works for Hospitals
                        </h2>
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <Building2 className="mr-2 h-6 w-6 text-blue-500" />
                                    Streamlined Hospital Operations
                                </CardTitle>
                                <CardDescription>
                                    Enhancing efficiency and patient care
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="list-disc pl-5 space-y-4">
                                    <li>
                                        Quickly access and update patient
                                        records in real-time
                                    </li>
                                    <li>
                                        Seamlessly share information across
                                        departments for better coordination
                                    </li>
                                    <li>
                                        Generate comprehensive reports for
                                        analysis and quality improvement
                                    </li>
                                    <li>
                                        Integrate with existing hospital
                                        management systems
                                    </li>
                                    <li>
                                        Ensure compliance with data protection
                                        regulations
                                    </li>
                                    <li>
                                        Improve communication between healthcare
                                        providers and patients
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </section>

                    <section className="mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">
                            Hospital Benefits
                        </h2>
                        <div className="grid gap-8 md:grid-cols-2">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <Clock className="mr-2 h-6 w-6 text-blue-500" />
                                        Increased Efficiency
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p>
                                        Reduce administrative overhead and
                                        streamline workflows, allowing your
                                        staff to focus more on patient care.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <TrendingUp className="mr-2 h-6 w-6 text-blue-500" />
                                        Improved Patient Outcomes
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p>
                                        With access to comprehensive patient
                                        histories, make more informed decisions
                                        leading to better treatment outcomes.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <Shield className="mr-2 h-6 w-6 text-blue-500" />
                                        Risk Mitigation
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p>
                                        Reduce the risk of medical errors and
                                        ensure compliance with data protection
                                        regulations.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <Share2 className="mr-2 h-6 w-6 text-blue-500" />
                                        Enhanced Collaboration
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p>
                                        Facilitate better communication and
                                        coordination among healthcare providers,
                                        both within and outside your hospital.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    <section className="text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Ready to Transform Your Hospital's Record
                            Management?
                        </h2>
                        <p className="mb-8 text-xl text-gray-600">
                            Join leading hospitals in revolutionizing patient
                            care and operational efficiency.
                        </p>
                        <Button size="lg" className="text-lg">
                            Schedule a Demo{" "}
                            <ChevronRight className="ml-2 h-5 w-5" />
                        </Button>
                    </section>
                </main>
            </div>
        </div>
    );
}
