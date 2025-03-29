import { saveToLocalStorage, loadFromLocalStorage } from "../utils/localStorage.ts";

export type Coordinate = { x: number, y: number }; // Degrees x (longitude) and y (latitude)
export type Place = { name: string, location: Coordinate }; // A place is either a restaurant or a shelter
export type PlaceDist = { place: Place, dist: number }; // Place paired with distance to a specific coordinate
export type PlaceString = "restaurants" | "shelters"; // String used as the key for local storage

// Calculates the distance between two points
function dist(pt1: Coordinate, pt2: Coordinate): number {
    const avg_lat = (pt1.y + pt2.y) / 2; // Average latitude to approximate distortion of longitude 
    const lon = Math.cos(avg_lat * Math.PI / 180) * 69; // Math.PI / 180 converts degrees to radians
    const dy = (pt2.y - pt1.y) * 69; // Convert to miles
    const dx = (pt2.x - pt1.x) * lon;
    return Math.sqrt(dx * dx + dy * dy); 
}

// adds a restaurant to the list of restaurants stored in local storage
function addPlace(e: Place, key: PlaceString): void {
    const places: Place[] = loadFromLocalStorage(key, []);
    places.push(e);
    saveToLocalStorage(key, places);
}

// adds a list of restaurants to the list of restaurants stored in local storage
function addPlaces(places: Place[], key: PlaceString): void {
    places.forEach(rs => {
        addPlace(rs, key);
    });
}

// returns an array of restaurants paired with their distance from the input location
function calcDistances(location: Coordinate, key: PlaceString): PlaceDist[] {
    const res: PlaceDist[] = []
    const places: Place[] = loadFromLocalStorage(key, []);
    places.forEach(r => {
        res.push({ place: r, dist: dist(location, r.location)});
    });
    return res;
}

// returns a list of restaurants paired with their distance from location filtered by certain distance from location
function distFilter(location: Coordinate, dist: number, key: PlaceString): PlaceDist[] {
    const res: PlaceDist[] = calcDistances(location, key);
    return res.filter(pd => pd.dist <= dist);
}

// in the page add a list of restaurants to local storage then have an input for location and distance criterion to filter
// then display a list of restaurants names and how far they are from location
// use https://www.nhc.noaa.gov/gccalc.shtml to check if dist correctly converts to miles
export { addPlaces, distFilter };