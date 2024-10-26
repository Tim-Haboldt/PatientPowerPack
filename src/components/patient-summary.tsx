"use client";

import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LockIcon, User } from "lucide-react";
import { useState } from "react";
import React from "react";
import { useToast } from "@/hooks/use-toast";

export default function PatientSummary() {
    const [loggedIn, setLoggedIn] = useState(false);

    return !loggedIn ? (
        <PatientLogin setLoggedIn={setLoggedIn} />
    ) : (
        <PatientInformationShowCase />
    );
}

function PatientLogin({ setLoggedIn }: { setLoggedIn: (b: boolean) => void }) {
    const [code, setCode] = useState("");

    const { toast } = useToast();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (code === "564738") {
            setLoggedIn(true);
        } else
            toast({
                title: "Invalid Code",
                variant: "destructive",
            });
    };

    return (
        <div className="container mx-auto p-4 max-w-md bg-inherited h-screen overflow-hidden">
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">
                        Patient Data Access
                    </CardTitle>
                    <CardDescription>
                        Enter the access code to view patient information
                    </CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmit}>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="code">Access Code</Label>
                                <Input
                                    id="code"
                                    type="number"
                                    placeholder="Enter 6-digit code"
                                    value={code}
                                    onChange={(e) => setCode(e.target.value)}
                                    required
                                    min="0"
                                    max="999999"
                                    className="text-center text-2xl tracking-widest"
                                />
                            </div>
                            <p className="text-sm text-muted-foreground">
                                For security reasons, a unique 6-digit code is
                                required to access patient data. This code is
                                provided by the medical staff and changes
                                regularly.
                            </p>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button type="submit" className="w-full">
                            <LockIcon className="w-4 h-4 mr-2" />
                            Access Patient Data
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
}

function PatientInformationShowCase() {
    return (
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Your Medical Summary</h1>
            <Card className="mb-6">
                <CardHeader>
                    <CardTitle>Patient Information</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center">
                    <Image
                        src="/anna-profile.jpeg"
                        alt="Anna Kumari"
                        width={64}
                        height={64}
                        className="rounded-full mr-4"
                    />
                    <div>
                        <p>
                            <strong>Name:</strong> Anna Kumari
                        </p>
                        <p>
                            <strong>Age:</strong> 45 years old
                        </p>
                    </div>
                </CardContent>
            </Card>

            <Card className="mb-6">
                <CardHeader>
                    <CardTitle>Main Diagnosis</CardTitle>
                    <CardDescription>
                        This section describes the primary condition we're
                        treating
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p>
                        You have been diagnosed with early-stage breast cancer.
                        Here's what that means:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>
                            The cancer is small (about 17mm) and hasn't spread
                            beyond your breast.
                        </li>
                        <li>
                            It's a type called "ductal invasive carcinoma",
                            which means it started in the milk ducts.
                        </li>
                        <li>
                            Your cancer is sensitive to hormones (estrogen and
                            progesterone), which helps guide our treatment plan.
                        </li>
                    </ul>
                </CardContent>
            </Card>

            <Card className="mb-6">
                <CardHeader>
                    <CardTitle>Other Health Concerns</CardTitle>
                    <CardDescription>
                        These are additional health issues we're monitoring
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>
                            Osteoporosis: A condition that makes bones more
                            fragile
                        </li>
                        <li>
                            Low Vitamin D levels: Vitamin D is important for
                            bone health and overall wellbeing
                        </li>
                    </ul>
                </CardContent>
            </Card>

            <Card className="mb-6">
                <CardHeader>
                    <CardTitle>How We Found It</CardTitle>
                    <CardDescription>
                        This explains how your condition was discovered and
                        confirmed
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p>
                        In May 2024, you had an infrared camera breast
                        screening. This showed a small area of concern that
                        couldn't be felt by touch. We then did more tests,
                        including ultrasound, mammogram, and a biopsy, which
                        confirmed the diagnosis of early-stage breast cancer.
                    </p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Treatment Plan</CardTitle>
                    <CardDescription>
                        This is the course of treatment recommended by our
                        medical team
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <ol className="list-decimal pl-5 space-y-2">
                        <li>
                            Chemotherapy: This will be given before surgery to
                            shrink the tumor. It includes two types of
                            medications given over several months.
                        </li>
                        <li>
                            Surgery: We plan to remove the tumor while
                            preserving as much of your breast as possible. We'll
                            also check the lymph nodes under your arm.
                        </li>
                        <li>
                            Radiation Therapy: This treatment uses targeted
                            radiation to destroy any remaining cancer cells
                            after surgery.
                        </li>
                        <li>
                            Hormone Therapy: Since your cancer is sensitive to
                            hormones, you'll take a medication called tamoxifen
                            to help prevent the cancer from returning.
                        </li>
                    </ol>
                </CardContent>
            </Card>
        </div>
    );
}
