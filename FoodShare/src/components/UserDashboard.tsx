import React, { useState, ChangeEvent } from 'react';
import {Card, Button, Input, Select, Table, Badge } from 'react-daisyui';
import { MockData } from '../MockData/mock_data.tsx';
// Mock data for demonstration
const mockRestaurants = [
  { id: 1, name: "Fresh Eats", type: "Restaurant", distance: "0.8 miles" },
  { id: 2, name: "Green Grocers", type: "Grocery", distance: "1.2 miles" },
  { id: 3, name: "Cafe Delicious", type: "Restaurant", distance: "0.5 miles" },
];

const mockFoodItems = [
  { id: 1, name: "Fresh Bread", provider: "Fresh Eats", category: "Bakery", quantity: 10, expires: "24 hours" },
  { id: 2, name: "Mixed Vegetables", provider: "Green Grocers", category: "Produce", quantity: 5, expires: "48 hours" },
  { id: 3, name: "Prepared Meals", provider: "Cafe Delicious", category: "Ready-to-eat", quantity: 8, expires: "12 hours" },
];

const mockPastRequests = [
  { id: 101, item: "Fresh Bread", provider: "Fresh Eats", requestDate: "2023-11-15", status: "Completed" },
  { id: 102, item: "Mixed Vegetables", provider: "Green Grocers", requestDate: "2023-11-10", status: "Pending" },
];

const UserDashboard: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>("available");
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [selectedCategory, setSelectedCategory] = useState<string>("");
    
    const filteredFoodItems = mockFoodItems.filter(item => {
        return (
            (searchTerm === "" || item.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
            (selectedCategory === "" || item.category === selectedCategory)
        );
    });
    
    const categories = [...new Set(mockFoodItems.map(item => item.category))];
    
    return (
        <div className="bg-green-200 p-4 w-full max-w-8xl mx-auto text-black">
            <h1 className="text-2xl font-bold mb-6">User Dashboard</h1>

            <div className="mb-6 flex space-x-4 border-b">
                <button
                    onClick={() => setActiveTab("available")}
                    className={`px-4 py-2 font-medium ${
                        activeTab === "available" ? "border-b-2 border-blue-500 text-black" : "text-green"
                    }`}
                >
                    Available Food
                </button>
                <button
                    onClick={() => setActiveTab("providers")}
                    className={`px-4 py-2 font-medium ${
                        activeTab === "providers" ? "border-b-2 border-blue-500 text-black" : "text-green"
                    }`}
                >
                    Providers
                </button>
                <button
                    onClick={() => setActiveTab("requests")}
                    className={`px-4 py-2 font-medium ${
                        activeTab === "requests" ? "border-b-2 border-blue-500 text-black" : "text-green"
                    }`}
                >
                    My Requests
                </button>
            </div>
            
            {activeTab === "available" && (
                <div>
                    <div className="flex flex-col md:flex-row gap-4 mb-6">
                        <Input 
                            placeholder="Search for food items..." 
                            value={searchTerm}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                            className="flex-grow bg-white"
                        />
                        <Select 
                            value={selectedCategory}
                            onChange={(e: ChangeEvent<HTMLSelectElement>) => setSelectedCategory(e.target.value)}
                            className="w-full md:w-48 text-black bg-white"
                        >
                            <option value="">All Categories</option>
                            {categories.map(category => (
                                <option key={category} value={category}>{category}</option>
                            ))}
                        </Select>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filteredFoodItems.map(item => (
                            <Card key={item.id} className="shadow-md">
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <p>From: {item.provider}</p>
                                    <p>Category: {item.category}</p>
                                    <p>Quantity: {item.quantity} units</p>
                                    <p>Expires in: {item.expires}</p>
                                    <Card.Actions className="justify-end">
                                        <Button className="bg-green-900 text-white">Request Item</Button>
                                    </Card.Actions>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                </div>
            )}
            
            {activeTab === "providers" && (
                <MockData></MockData>
            )}
            
            {activeTab === "requests" && (
                <div>
                    <h2 className="text-xl font-semibold mb-4">My Requests & Pickups</h2>
                    <div className="overflow-x-auto">
                        <Table className="w-full">
                            <Table.Head>
                                <span className="text-black">Request ID</span>
                                <span className="text-black">Item</span>
                                <span className="text-black">Provider</span>
                                <span className="text-black">Date</span>
                                <span className="text-black">Status</span>
                            </Table.Head>
                            <Table.Body>
                                {mockPastRequests.map(request => (
                                    <Table.Row key={request.id}>
                                        <span>#{request.id}</span>
                                        <span>{request.item}</span>
                                        <span>{request.provider}</span>
                                        <span>{request.requestDate}</span>
                                        <span>
                                            <Badge color={request.status === "Completed" ? "success" : "warning"}>
                                                {request.status}
                                            </Badge>
                                        </span>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table>
                    </div>
                </div>
            )}
        </div>
    );
}

export default UserDashboard;