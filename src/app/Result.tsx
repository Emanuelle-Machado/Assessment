// src/app/result/[makeId]/[year]/page.tsx
import { useEffect, useState } from "react";

interface Vehicle {
    Model_Name: string;
}

const ResultsPage = ({ params }: { params: { makeId: string; year: string } }) => {
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchVehicleModels = async () => {
            setLoading(true);
            try {
                const res = await fetch(
                    `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${params.makeId}/modelyear/${params.year}?format=json`
                );
                const data = await res.json();
                setVehicles(data.Results);
            } catch {
                setError("Failed to fetch vehicle models.");
            } finally {
                setLoading(false);
            }
        };

        fetchVehicleModels();
    }, [params]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded">
            <h1 className="text-2xl font-semibold text-gray-700 mb-4">
                Models for {params.makeId} ({params.year})
            </h1>

            <ul>
                {vehicles.map((vehicle, index) => (
                    <li key={index} className="border-b py-2">
                        {vehicle.Model_Name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ResultsPage;

export async function generateStaticParams() {
    return [
        { makeId: "Toyota", year: "2020" },
        { makeId: "Honda", year: "2021" }
    ].map((params) => ({
        params,
    }));
}
