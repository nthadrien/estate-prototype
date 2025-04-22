
import type { Review , Estate , Building , Reservation } from "./dataTypes.ts";

//   this function generates uuids:
function generateShortUUID():string {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < 8; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
  

export function generateAllData (count:number) {

    const estates: Estate[] = [];
    const reviews : Review[] = [];
    const buildings : Building[] = [];

    const possibleTypes = ["Apartment", "House", "Condo", "Villa", "Townhouse"];
    const possibleConstructedIn = ["2012","2013", "2014", "2015", "2018","2016"]
    const possibleMadeIn = ["2019","2020", "2021", "2022", "2023", "Never"];
    const possibleAmenitiesArrays = [
      ["Pool", "Gym"],
      ["Garden", "Parking"],
      ["Balcony", "Elevator"],
      ["Fireplace", "Security System"],
      ["Pet-friendly"],
    ];
    const buildingNames = ["The Grand Tower", "Oakwood Residences", "Central Plaza", "Riverview Apartments", "Sunset Villas","Hilton Palace"];
    const cityNames = ["Yaoundé", "Douala", "Bamenda", "Bafoussam", "Maroua"];
    const streetNames = ["Rue de la Paix", "Avenue de l'Unité", "Boulevard du 20 Mai", "Chemin de l'Espoir", "Route de l'Avenir"];
    const possibleBuildingAmenitiesArrays = [
      ["Elevator", "Security", "Parking"],
      ["Gym", "Pool", "Common Area"],
      ["Rooftop Terrace", "Concierge", "Garden"],
      ["Kids Play Area", "Business Center", "Pet-friendly"],
      ["Bike Storage", "Laundry Facilities"],
      ["wifi", "cable"]
    ];

    const possibleLastRenovations = ["2019","2020", "2021", "2022", "2023", "Never"];
    const usernames = ["Alice", "Bob", "Charlie", "David", "Eve", "Grace", "Henry", "Ivy"];
    const messages = [
        "Great experience!",
        "The agent was very helpful.",
        "Loved the environment.",
        "Clean and well-maintained.",
        "Good value for the price.",
        "Could have been better.",
        "Not what I expected.",
        "Highly recommended!",
    ];


    // generating random building
  
    for (let i = 0; i < count; i++) {
        const randomName = buildingNames[Math.floor(Math.random() * buildingNames.length)];
        const randomCity = cityNames[Math.floor(Math.random() * cityNames.length)];
        const randomStreet = streetNames[Math.floor(Math.random() * streetNames.length)];
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        const randomAmenities = possibleBuildingAmenitiesArrays[Math.floor(Math.random() * possibleAmenitiesArrays.length)];
        const randomConstructedIn = possibleConstructedIn[Math.floor(Math.random() * possibleAmenitiesArrays.length)];
        const building : Building = {
          id: generateShortUUID(),
          name: randomName,
          address: `${randomNumber} ${randomStreet}, ${randomCity}`,
          geoAddress: `${Math.random() * 10}, ${Math.random() * 10}`, // Simple random coordinates
          estates: Array.from({ length: Math.floor(Math.random() * 10) + 1 }).map(() => generateShortUUID()), // 1-5 short UUIDs for estates
          desc: `A modern building located in ${randomCity}.`,
          building_amenities: randomAmenities,
          constructedIn: randomConstructedIn,
          createdAt : new Date().toDateString()
        };
        buildings.push(building);
      }
    // Generate Randoms estates now to see how to manage
    for( let x of buildings ) {
        const randomType = possibleTypes[Math.floor(Math.random() * possibleTypes.length)];
        const randomMadeIn = possibleMadeIn[Math.floor(Math.random() * possibleMadeIn.length)];
        const randomAmenities = possibleAmenitiesArrays[Math.floor(Math.random() * possibleAmenitiesArrays.length)];
        const randomLastRenovation = possibleLastRenovations[Math.floor(Math.random() * possibleLastRenovations.length)];
        const randomRooms = randomType === "room" ? 1 : ["villa","house","townhouse"].includes(randomType.toLowerCase()) ?  Math.ceil(Math.random() * 4) :Math.floor(Math.random() * 2)
        const randomGuset = Math.floor(Math.random() *1.2) * randomRooms;

        const estate: Estate = {
            id: generateShortUUID(), 
            type: randomType,
            desc: `A lovely ${randomType} in a great location.`,
            madeIn: randomMadeIn,
            amenities: randomAmenities,
            buildingId: x.id,
            reviews: Array.from({ length: Math.floor(Math.random() * 3) }).map(() => generateShortUUID()), // Array of 0-2 random UUIDs
            reservations: Array.from({ length: Math.floor(Math.random() * 2) }).map(() => generateShortUUID()), // Array of 0-1 random UUIDs
            lastRenovations: randomLastRenovation,
            numOfGuest:  randomGuset,
            numOfRooms: randomRooms,
            numOfBaths: randomRooms,
            address: x.address,
            pricePerHour: Math.floor(Math.random() * 3.2),
            pricePerDay: Math.floor(Math.random() * 2),
            pricePerMonth: Math.floor(Math.random() * 140.5),
        };
        estates.push(estate);
    }

    // generate reviews 
    for ( let estate of estates ) {

        const eachReviews = estate.reviews;

        for(let j of eachReviews ) {
            const randomUsername = usernames[Math.floor(Math.random() * usernames.length)];
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            const createdAt = new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString(); // Random date within the last 30 days

            const review: Review = {
                id: j ,
                createdAt: createdAt,
                username: randomUsername,
                message: randomMessage,
                rate: {
                    agent: Math.floor(Math.random() * 5) + 1, // Random rating from 1 to 5
                    enviroment: Math.floor(Math.random() * 5) + 1,
                    sanitation: Math.floor(Math.random() * 5) + 1,
                    comparism: Math.floor(Math.random() * 5) + 1,
                },
            };
            reviews.push(review);
        }

    }

    return {estates , buildings , reviews };
}
  

// Example of how to use the function:

export const output = () => {
    console.log(generateAllData(20));
}