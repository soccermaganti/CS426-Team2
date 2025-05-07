import { Coordinate, Place, PlaceDist, addPlaces, distFilter } from "../utils/distFilterFunctions.ts";
import { loadFromLocalStorage, removeFromLocalStorage } from "../utils/localStorage.ts";
import { LabeledInput  } from "./labeled_input.tsx";
import { useState } from "react";
import { Button, Table } from 'react-daisyui';

const mock_data_r: Place[] = [
    { name: "Lili's Restaurant", location: { x: 42.37863, y: -72.51972} }, // Amherst, MA
    { name: "Antonio's Pizza", location: { x: 42.37617, y: -72.51964} }, // Amherst, MA
    { name: "Ginger Japanese Cuisine", location: { x: 42.49221, y: -71.27936 } }, 
    { name: "Mahbub Restaurant", location: { x: 3.12838, y: 101.67029} }, // Kuala Lumpur, Malaysia
    { name: "Joe's BBQ", location: { x: 29.7604, y: -95.3698 } }, // Houston, TX
    { name: "The French Laundry", location: { x: 38.4043, y: -122.3647 } }, // Yountville, CA
    { name: "Katz's Delicatessen", location: { x: 40.7223, y: -73.9876 } }, // New York, NY
    { name: "Pike Place Chowder", location: { x: 47.6097, y: -122.3411 } }, // Seattle, WA
    { name: "Lou Malnati's Pizzeria", location: { x: 41.8905, y: -87.6278 } }, // Chicago, IL
    { name: "Mother's Restaurant", location: { x: 29.9506, y: -90.0668 } }, // New Orleans, LA
    { name: "Commander's Palace", location: { x: 29.9201, y: -90.0849 } }, // New Orleans, LA
    { name: "Primanti Bros.", location: { x: 40.4406, y: -79.9959 } }, // Pittsburgh, PA
    { name: "Franklin Barbecue", location: { x: 30.2708, y: -97.7312 } }, // Austin, TX
    { name: "Mike's Pastry", location: { x: 42.3630, y: -71.0560 } }, // Boston, MA
    { name: "In-N-Out Burger", location: { x: 34.0522, y: -118.2437 } }, // Los Angeles, CA
    { name: "Dinosaur Bar-B-Que", location: { x: 43.0481, y: -76.1474 } }, // Syracuse, NY
    { name: "Cafe du Monde", location: { x: 29.9574, y: -90.0633 } }, // New Orleans, LA
    { name: "Shake Shack", location: { x: 40.7411, y: -73.9881 } }, // NYC, NY
    { name: "Pappy's Smokehouse", location: { x: 38.6353, y: -90.2340 } }, // St. Louis, MO
    { name: "Big Bob Gibson BBQ", location: { x: 34.6059, y: -86.9843 } }, // Decatur, AL
    { name: "The Varsity", location: { x: 33.7726, y: -84.3898 } }, // Atlanta, GA
    { name: "Peter Luger Steak House", location: { x: 40.7099, y: -73.9627 } }, // Brooklyn, NY
    { name: "Russ & Daughters", location: { x: 40.7220, y: -73.9882 } }, // NYC, NY
    { name: "Roscoe's House of Chicken and Waffles", location: { x: 34.0489, y: -118.2498 } }, // Los Angeles, CA
];


const MockData = () => {
    if (loadFromLocalStorage("restaurants", []).length !== mock_data_r.length) {
        removeFromLocalStorage("restaurants");
        addPlaces(mock_data_r, "restaurants");
    }

    // default location set for somewhere in Amherst, MA
    const [longitude, setLongitude] = useState(42.37236);
    const [latitude, setLatitude] = useState(-72.52213);
    const [distance, setDistance] = useState(5);
    const [filteredRestaurants, setFilteredRestaurants] = useState<PlaceDist[]>([]);

    // Temporary state for input fields so that when the field is empty NaN does not try to get parsed
    const [tempLongitude, setTempLongitude] = useState(longitude.toString());
    const [tempLatitude, setTempLatitude] = useState(latitude.toString());
    const [tempDistance, setTempDistance] = useState(distance.toString());

    const handleFilter = () => {
        setLongitude(parseFloat(tempLongitude));
        setLatitude(parseFloat(tempLatitude));
        setDistance(parseFloat(tempDistance));

        const location: Coordinate = { x: parseFloat(tempLongitude), y: parseFloat(tempLatitude) };
        const res = distFilter(location, parseFloat(tempDistance), "restaurants");
        // SORT RES BY DISTANCE ASCENDING
        setFilteredRestaurants(res);
    };

    const updateDistanceDiv = () => {
        const distanceDiv = document.getElementById('distanceDiv');
        if (distanceDiv) {
            distanceDiv.textContent = `Restaurants within ${parseFloat(tempDistance)} miles:`;
        }
    }

    const handleClick = () => {
        // Prevents doing anything with inputs if any of them are empty
        if (tempDistance === "" || tempLongitude === "" || tempLatitude === "") {
            return;
        }
        handleFilter();
        updateDistanceDiv();
    }

    return (
        <div className="p-4 w-full max-w-4xl mx-auto">
            <h2 className="text-xl font-semibold mb-4">Find Nearby Restaurants</h2>
            <div className="bg-green-100 p-6 rounded-lg shadow-md">
                <LabeledInput label="Longitude" type="number" placeholder="42.373" value={tempLongitude} setValue={setTempLongitude} />
                <LabeledInput label="Latitude" type="number" placeholder="-72.522" value={tempLatitude} setValue={setTempLatitude} />
                <LabeledInput label="Distance (miles)" type="number" placeholder="5" value={tempDistance} setValue={setTempDistance} />
                <Button onClick={handleClick} className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition">Find Restaurants</Button>
            </div>
            
            <div className="overflow-x-auto mt-6">
                <Table className="w-full">
                    <Table.Head>
                        <span className="text-black">Name</span>
                        <span className="text-black">Distance (miles)</span>
                    </Table.Head>
                    <Table.Body>
                        {filteredRestaurants.map((rd, i) => (
                            <Table.Row key={i}>
                                <span>{rd.place.name}</span>
                                <span>{rd.dist.toFixed(2)}</span>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </div>
        </div>
    )
}

export { MockData, mock_data_r };