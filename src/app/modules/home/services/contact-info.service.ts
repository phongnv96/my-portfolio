import { toast } from 'react-hot-toast';

import { apiPathUrl } from '../constants';
import { ContactInfoType } from '../types/ContactFormType';

const contactInfoCreateMessage = async (message: ContactInfoType) => {
    const api = async () => {
        try {
            const res = await fetch(apiPathUrl.createMessage, {
                method: "POST",
                body: JSON.stringify(message),
            })
            if (res.status !== 200) {
                return Promise.reject("Some error happened, please try again!")
            }
        } catch (error) {
            return Promise.reject("Some error happened, please try again!")
        }
    };
    toast.promise(api(), {
        loading: "Sending messages...",
        error: (data) => data ,
        success: "Thanks for leavening your message, I'll reply as soon as possible!"
    }, { duration: 3000 })
}

export { contactInfoCreateMessage };