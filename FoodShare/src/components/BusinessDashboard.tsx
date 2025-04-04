import React, { useState } from 'react';
import { Card, Table } from 'react-daisyui';

// Mock data
const mockBusinesses = [
  { id: 1, name: "Fresh Eats" },
  { id: 2, name: "Green Grocers" },
  { id: 3, name: "Cafe Delicious" },
];

const mockFoodInventory = [
  { id: 1, provider: "Fresh Eats", item: "Fresh Bread", quantity: 10, category: "Bakery" },
  { id: 2, provider: "Green Grocers", item: "Mixed Vegetables", quantity: 5, category: "Produce" },
  { id: 3, provider: "Cafe Delicious", item: "Prepared Meals", quantity: 8, category: "Ready-to-eat" },
];

const BusinessDashboard: React.FC = () => {
  const [selectedBusiness, setSelectedBusiness] = useState<string | null>(null);
  
  return (
    <div className="p-4 w-full max-w-8xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Business Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {mockBusinesses.map(business => (
          <Card 
            key={business.id} 
            className="shadow-md cursor-pointer" 
            onClick={() => setSelectedBusiness(business.name)}
          >
            <Card.Body>
              <Card.Title>{business.name}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </div>
      
      {selectedBusiness && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Food Inventory for {selectedBusiness}</h2>
          <div className="overflow-x-auto">
            <Table className="w-full">
              <Table.Head>
                <span>Item</span>
                <span>Category</span>
                <span>Quantity</span>
              </Table.Head>
              <Table.Body>
                {mockFoodInventory.filter(item => item.provider === selectedBusiness).map(food => (
                  <Table.Row key={food.id}>
                    <span>{food.item}</span>
                    <span>{food.category}</span>
                    <span>{food.quantity}</span>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </div>
        </div>
      )}
    </div>
  );
};

export default BusinessDashboard;
