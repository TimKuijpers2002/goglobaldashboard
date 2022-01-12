import {toast} from "react-toastify";

export default function SuccesNotifier(message){

    const notifySucces = (message) => {
        toast.success(message, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
    });
}

    return notifySucces(message);
}