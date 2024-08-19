import axiosInstance from "./axiosConfig";

interface ContactData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export async function sendMessage(message: ContactData){
    try {
        const response = await axiosInstance.post("/users/contact", message)
        return response.data
    } catch (error) {
        console.log("Error posting data")
    }
}