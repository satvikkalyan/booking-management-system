import {BASE_URL} from "../components/utility/constants";

const userAPI = `${BASE_URL}/api/v1/users`;

export const loginUser = async (credentials) => {
    try {
        const response = await fetch(`${userAPI}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        });
        if (response.ok) {
            return response;
        } else {
            return  new Error(`Login failed with status: ${response.status}`);
        }
    } catch (error) {
        return error;
    }
};

export const registerUser = async (user) => {
    return await fetch(`${userAPI}/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    })
}