"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertCircle } from "lucide-react";

export default function MedicalRecordsIndex() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Medical Records System</h1>

            <Tabs defaultValue="input">
                <TabsList className="mb-4">
                    <TabsTrigger value="input">Input Records</TabsTrigger>
                    <TabsTrigger value="view">View Records</TabsTrigger>
                </TabsList>

                <TabsContent value="input">
                    <Card>
                        <CardHeader>
                            <CardTitle>Add New Medical Record</CardTitle>
                            <CardDescription>
                                Enter patient information or personal medical
                                data
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form className="space-y-4">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Patient Name
                                    </label>
                                    <Input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="mt-1"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="record"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Medical Information
                                    </label>
                                    <Textarea
                                        id="record"
                                        name="record"
                                        required
                                        className="mt-1"
                                        rows={4}
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="type"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Record Type
                                    </label>
                                    <select
                                        id="type"
                                        name="type"
                                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                                    >
                                        <option value="hospital">
                                            Hospital Record
                                        </option>
                                        <option value="patient">
                                            Patient Input
                                        </option>
                                    </select>
                                </div>
                                <Button type="submit">Add Record</Button>
                            </form>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="view">
                    <Card>
                        <CardHeader>
                            <CardTitle>Medical Records</CardTitle>
                            <CardDescription>
                                View all stored medical records
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div></div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
