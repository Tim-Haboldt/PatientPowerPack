import PatientSummary from "@/components/patient-summary";
import { redirect } from "next/navigation";

export default async function PatientSummaryServer({
    params,
}: {
    params: { id: string };
}) {
    const { id } = await params;

    if (id !== "24039") {
        return redirect("/");
    }

    return <PatientSummary />;
}
