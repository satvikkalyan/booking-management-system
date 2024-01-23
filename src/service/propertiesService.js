import {BASE_URL} from "../components/utility/constants";

const propertiesAPI = `${BASE_URL}/api/v1/property`;

export const fetchProperties = async ({
                                          destination,
                                          startDate,
                                          endDate,
                                          numberOfBeds,
                                      }) => {
    try {
        return await fetch(propertiesAPI, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                destination,
                startDate,
                endDate,
                numberOfBeds,
            }),
        })
    } catch (error) {
        console.error('Error fetching properties:', error.message);
    }
};