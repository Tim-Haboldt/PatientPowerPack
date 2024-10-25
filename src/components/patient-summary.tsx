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
    // In a real application, this data would come from a backend API
    const patient = {
        name: "Anna Humari",
        age: 32,
        gender: "Female",
        roomNumber: "205",
        bloodType: "B-",
        admissionDate: "2023-10-18",
        doctor: "Dr. Michael Chen",
        bloodReports: [
            {
                test: "Hemoglobin",
                value: "13.2 g/dL",
                normalRange: "12.0 - 15.5 g/dL",
            },
            {
                test: "White Blood Cells",
                value: "7.5 x10^9/L",
                normalRange: "4.5 - 11.0 x10^9/L",
            },
            {
                test: "Platelets",
                value: "250 x10^9/L",
                normalRange: "150 - 450 x10^9/L",
            },
            {
                test: "Glucose (Fasting)",
                value: "92 mg/dL",
                normalRange: "70 - 100 mg/dL",
            },
            {
                test: "Creatinine",
                value: "0.9 mg/dL",
                normalRange: "0.6 - 1.2 mg/dL",
            },
        ],
        recentTreatments: [
            { date: "2023-10-22", treatment: "Physical Therapy Session" },
            { date: "2023-10-20", treatment: "MRI Scan" },
            { date: "2023-10-19", treatment: "Blood Work" },
        ],
        upcomingAppointments: [
            {
                date: "2023-10-26",
                time: "11:30 AM",
                type: "Follow-up Consultation",
            },
            { date: "2023-10-28", time: "3:00 PM", type: "Physical Therapy" },
        ],
        medicalTeamNotes:
            "Patient is progressing well. Continue with current treatment plan and monitor blood glucose levels.",
    };

    return (
        <div className="container mx-auto p-4 max-w-4xl bg-transparent">
            <Card>
                <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4">
                        <Avatar className="w-20 h-20">
                            <Image
                                src="/anna-profile.jpeg"
                                alt="profile-pic"
                                width="80"
                                height="80"
                            />
                            <AvatarImage
                                src="/anna-profile?height=80&width=80"
                                alt={patient.name}
                            />
                            <AvatarFallback>
                                <User className="w-10 h-10" />
                            </AvatarFallback>
                        </Avatar>
                        <div>
                            <CardTitle className="text-2xl">
                                {patient.name}
                            </CardTitle>
                            <CardDescription>
                                {patient.age} years old • {patient.gender} •
                                Room {patient.roomNumber}
                            </CardDescription>
                            <Badge variant="outline" className="mt-2">
                                Blood Type: {patient.bloodType}
                            </Badge>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-6 md:grid-cols-2">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">
                                    Blood Reports
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ScrollArea className="h-[250px]">
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Test</TableHead>
                                                <TableHead>Value</TableHead>
                                                <TableHead>
                                                    Normal Range
                                                </TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {patient.bloodReports.map(
                                                (report, index) => (
                                                    <TableRow key={index}>
                                                        <TableCell>
                                                            {report.test}
                                                        </TableCell>
                                                        <TableCell>
                                                            {report.value}
                                                        </TableCell>
                                                        <TableCell>
                                                            {report.normalRange}
                                                        </TableCell>
                                                    </TableRow>
                                                )
                                            )}
                                        </TableBody>
                                    </Table>
                                </ScrollArea>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">
                                    Recent Treatments
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ScrollArea className="h-[120px]">
                                    {patient.recentTreatments.map(
                                        (treatment, index) => (
                                            <div
                                                key={index}
                                                className="flex justify-between items-center mb-2"
                                            >
                                                <span className="text-sm font-medium">
                                                    {treatment.treatment}
                                                </span>
                                                <span className="text-sm text-muted-foreground">
                                                    {treatment.date}
                                                </span>
                                            </div>
                                        )
                                    )}
                                </ScrollArea>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">
                                    Upcoming Appointments
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ScrollArea className="h-[120px]">
                                    {patient.upcomingAppointments.map(
                                        (appointment, index) => (
                                            <div key={index} className="mb-3">
                                                <div className="flex justify-between items-center">
                                                    <span className="font-medium">
                                                        {appointment.type}
                                                    </span>
                                                    <Badge variant="secondary">
                                                        {appointment.date}
                                                    </Badge>
                                                </div>
                                                <span className="text-sm text-muted-foreground">
                                                    {appointment.time}
                                                </span>
                                            </div>
                                        )
                                    )}
                                </ScrollArea>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">
                                    Medical Team Notes
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm">
                                    {patient.medicalTeamNotes}
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                    <Separator className="my-6" />
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-sm text-muted-foreground">
                                Attending Physician
                            </p>
                            <p className="font-medium">{patient.doctor}</p>
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">
                                Admission Date
                            </p>
                            <p className="font-medium">
                                {patient.admissionDate}
                            </p>
                        </div>
                        <Button>Contact Medical Team</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
