import React from 'react';

const ProceedsPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Proceeds</h1>
                <table className="w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border border-gray-300 px-4 py-2 text-left">Date</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
                            <th className="border border-gray-300 px-4 py-2 text-right">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">2023-10-01</td>
                            <td className="border border-gray-300 px-4 py-2">Product Sale</td>
                            <td className="border border-gray-300 px-4 py-2 text-right">$500</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">2023-10-02</td>
                            <td className="border border-gray-300 px-4 py-2">Service Fee</td>
                            <td className="border border-gray-300 px-4 py-2 text-right">$200</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">2023-10-03</td>
                            <td className="border border-gray-300 px-4 py-2">Subscription</td>
                            <td className="border border-gray-300 px-4 py-2 text-right">$150</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProceedsPage;