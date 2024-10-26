"use client";

import { useState } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    CalendarDays,
    FileText,
    Activity,
    Pill,
    ChevronRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function PatientDashboard() {
    const [activeTab, setActiveTab] = useState("overview");

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Main content */}
            <div className="flex-1 p-8 overflow-auto">
                <header className="mb-8 flex items-center justify-between">
                    <div className="flex items-center">
                        <Avatar className="h-20 w-20 mr-4">
                            <AvatarImage
                                src="/placeholder.svg?height=80&width=80"
                                alt="Anna Kumari"
                            />
                            <AvatarFallback>AK</AvatarFallback>
                        </Avatar>
                        <div>
                            <h1 className="text-3xl font-bold">Anna Kumari</h1>
                            <p className="text-gray-500">
                                45 years old | Female
                            </p>
                        </div>
                    </div>
                    <Link href="http://34.208.222.127">
                        <Button>Personal Chat</Button>
                    </Link>
                </header>

                <Tabs
                    value={activeTab}
                    onValueChange={setActiveTab}
                    className="space-y-4"
                >
                    <TabsList>
                        <TabsTrigger value="overview">Overview</TabsTrigger>
                        <TabsTrigger value="diagnostics">
                            Diagnostics
                        </TabsTrigger>
                        <TabsTrigger value="treatment">Treatment</TabsTrigger>
                        <TabsTrigger value="share-data">Share Data</TabsTrigger>
                    </TabsList>
                    <TabsContent value="overview" className="space-y-4">
                        <Card>
                            <CardHeader>
                                <CardTitle>Main Diagnoses</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>
                                        Stage I early breast cancer, cT1c N0 M0
                                    </li>
                                    <li>
                                        Luminal B type, ductal invasive
                                        carcinoma
                                    </li>
                                    <li>ER 90%, PR 60%, HER2neu negative</li>
                                    <li>G3, Ki67 20%</li>
                                </ul>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Other Relevant Diagnoses</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Osteoporosis</li>
                                    <li>Low Vitamin D levels</li>
                                </ul>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Patient History</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>
                                    The patient presented for an infrared camera
                                    breast cancer screening in May 2024. The
                                    infrared imaging highlighted a small,
                                    suspicious area that wasn't palpable.
                                    Further diagnostic tests confirmed the small
                                    area as a stage I breast cancer. Staging
                                    diagnostics did not display any metastases.
                                </p>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="diagnostics" className="space-y-4">
                        <Card>
                            <CardHeader>
                                <CardTitle>Diagnostic Results</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-4">
                                    <li>
                                        <strong>
                                            Infrared camera (02.05.24):
                                        </strong>{" "}
                                        Abnormal region of the right breast
                                    </li>
                                    <li>
                                        <strong>Sonography (04.06.24):</strong>{" "}
                                        Right side BI-RADs IV (17mm), left side
                                        BI-RADS II
                                    </li>
                                    <li>
                                        <strong>Mammography (04.06.24):</strong>{" "}
                                        Right side BI-RADs IV (17mm), left side
                                        BI-RADS II
                                    </li>
                                    <li>
                                        <strong>Histology (04.06.24):</strong>{" "}
                                        Ductal invasive carcinoma, G3
                                    </li>
                                    <li>
                                        <strong>Immunohistochemistry:</strong>{" "}
                                        ER 90%, PR 60%, HER2neu negative, Ki67
                                        20%
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Staging Diagnostics</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-4">
                                    <li>
                                        <strong>
                                            Sonography of the liver (26.06.24):
                                        </strong>{" "}
                                        Not suspicious
                                    </li>
                                    <li>
                                        <strong>
                                            X-ray of the chest (30.06.24):
                                        </strong>{" "}
                                        Not suspicious
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="treatment" className="space-y-4">
                        <Card>
                            <CardHeader>
                                <CardTitle>
                                    Tumor Board Recommendation (14.07.24)
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>
                                        Neoadjuvant chemotherapy with 4 cycles
                                        of Epirubicin and Cylophosphamide
                                        followed by 12 cycles of weekly
                                        Paclitaxel
                                    </li>
                                    <li>
                                        Breast-conserving surgery of the breast
                                        and axilla
                                    </li>
                                    <li>Radiotherapy</li>
                                    <li>
                                        Adjuvant endocrine treatment with
                                        tamoxifen
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="share-data" className="space-y-4">
                        <Card>
                            <CardHeader>
                                <CardTitle>Share you data</CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-col justify-center items-center">
                                <h3 className="text-xl">
                                    Share Data for Relatives
                                </h3>
                                <Link href="/patient/24039/family">
                                    <Image
                                        src="/hospital.jpeg"
                                        alt="hospital share link"
                                        width="300"
                                        height="300"
                                    />
                                </Link>
                                <span className="mb-10">Code: 564738</span>
                                <h3 className="text-xl">
                                    Share Data for Hospitals/Doctors
                                </h3>
                                <Link href="/patient/24039/doctor">
                                    <Image
                                        src="/patient.jpeg"
                                        alt="patient share link"
                                        width="300"
                                        height="300"
                                    />
                                </Link>
                                <span>Code: 102938</span>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>

                <Card className="mt-8">
                    <CardHeader>
                        <CardTitle>Timeline</CardTitle>
                        <CardDescription>
                            Key events in patient's treatment
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ScrollArea className="h-[200px]">
                            <ul className="space-y-4">
                                <li className="flex items-center">
                                    <CalendarDays className="mr-2 h-4 w-4" />
                                    <span className="font-semibold mr-2">
                                        02.05.2024:
                                    </span>
                                    <span>
                                        Infrared camera breast cancer screening
                                    </span>
                                </li>
                                <li className="flex items-center">
                                    <CalendarDays className="mr-2 h-4 w-4" />
                                    <span className="font-semibold mr-2">
                                        04.06.2024:
                                    </span>
                                    <span>
                                        Sonography, Mammography, and Histology
                                    </span>
                                </li>
                                <li className="flex items-center">
                                    <CalendarDays className="mr-2 h-4 w-4" />
                                    <span className="font-semibold mr-2">
                                        26.06.2024:
                                    </span>
                                    <span>Liver Sonography</span>
                                </li>
                                <li className="flex items-center">
                                    <CalendarDays className="mr-2 h-4 w-4" />
                                    <span className="font-semibold mr-2">
                                        30.06.2024:
                                    </span>
                                    <span>Chest X-ray</span>
                                </li>
                                <li className="flex items-center">
                                    <CalendarDays className="mr-2 h-4 w-4" />
                                    <span className="font-semibold mr-2">
                                        14.07.2024:
                                    </span>
                                    <span>Tumor Board Recommendation</span>
                                </li>
                            </ul>
                        </ScrollArea>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
