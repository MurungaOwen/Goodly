import axiosInstance from "./axiosConfig";

interface donationtData {
    amount: number,
    cause: string,
    name: string;
    phone: string
}

export async function donateApi(donation: donationtData){
    try {
        const response = await axiosInstance.post("/payment/mpesa/stk", donation)
        return response.data
    } catch (error) {
        console.log("Error posting data")
    }
}