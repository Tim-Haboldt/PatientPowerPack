import PatientSummary from "@/components/patient-summary";
import { redirect } from "next/navigation";
import { PageProps } from "../../../../../.next/types/app/layout";

export default async function PatientSummaryServer({ params }: PageProps) {
    const { id } = await params;

    if (id !== "24039") {
        return redirect("/");
    }

    return <PatientSummary doctorView={true} />;
}
