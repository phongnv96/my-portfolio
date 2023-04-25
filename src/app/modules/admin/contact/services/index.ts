import { toast } from 'react-hot-toast';

const getAllMessage = async () => {
    let dataRes: any = [];
    const callApi = async () => {
        try {
            const res = await fetch("/api/contact");
            dataRes = await res.json();
            if (res.status === 401) {
                return Promise.reject("Unauthorize please login to view!")
            } else if (res.status !== 200) {
                return Promise.reject("Something errors please try again!")
            }
        } catch (error) {
            return Promise.reject(error);
        }
    }
    await toast.promise(callApi(), {
        success: "Loading data success",
        error: (data) => data,
        loading: "Fetching data from server!",
    })
    return dataRes;
}

export { getAllMessage };