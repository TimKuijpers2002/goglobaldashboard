import {toast} from "react-toastify";

export default function ErrorNotifier(message){

    const notifyError = (message) => {
        toast.error(message, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
    });
    }

    return notifyError(message);
}