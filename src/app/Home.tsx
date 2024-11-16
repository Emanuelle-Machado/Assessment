"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const HomePage = () => {
    const [makes, setMakes] = useState<string[]>([]);
    const [selectedMake, setSelectedMake] = useState<string>("");
    const [selectedYear, setSelectedYear] = useState<string>("");
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);

    useEffect(() => {
        const fetchMakes = async () => {
            const res = await fetch(
                "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json"
            );
            const data = await res.json();
            setMakes(data.Results.map((result: { MakeName: string }) => result.MakeName));
        };

        fetchMakes();
    }, []);

    useEffect(() => {
        if (selectedMake && selectedYear) {
            setIsButtonEnabled(true);
        } else {
            setIsButtonEnabled(false);
        }
    }, [selectedMake, selectedYear]);

    const generateYears = () => {
        const currentYear = new Date().getFullYear();
        const years = [];
        for (let year = 2015; year <= currentYear; year++) {
            years.push(year.toString());
        }
        return years;
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow rounded">
            <h1 className="text-2xl font-semibold text-gray-700 mb-4">Car Search</h1>

            <div className="mb-4">
                <label className="block text-gray-700">Select Vehicle Make</label>
                <select
                    value={selectedMake}
                    onChange={(e) => setSelectedMake(e.target.value)}
                    className="border p-2 w-full mt-1"
                >
                    <option value="">Select a Make</option>
                    {makes.map((make, index) => (
                        <option key={index} value={make}>
                            {make}
                        </option>
                    ))}
                </select>
            </div>

            <div className="mb-4">
                <label className="block text-gray-700">Select Model Year</label>
                <select
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="border p-2 w-full mt-1"
                >
                    <option value="">Select a Year</option>
                    {generateYears().map((year) => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
            </div>

            <Link href={`/result/${selectedMake}/${selectedYear}`}>
                <button
                    type="button"
                    className={`w-full py-2 text-white bg-blue-500 rounded mt-4 ${isButtonEnabled ? "cursor-pointer" : "cursor-not-allowed opacity-50"
                        }`}
                    disabled={!isButtonEnabled}
                >
                    Next
                </button>
            </Link>
        </div>
    );
};

export default HomePage;
