import {BASE_URL} from "../components/utility/constants";

const propertiesAPI = `${BASE_URL}/api/v1/properties`;

export const fetchProperties = async (data) => {
    try {
        console.log(data)
        const response = await fetch(`${propertiesAPI}/search`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "destination":data.destination,
                "startDate":data.startDate,
                "endDate":data.endDate,
                "numberOfBeds":data.numberOfBeds,
            }),
        })
        if(response.status===200){
            return response.json()
        }
    } catch (error) {
        console.error('Error fetching properties:', error.message);
    }
};