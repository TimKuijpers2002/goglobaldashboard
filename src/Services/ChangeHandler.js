import React from "react"

export default function ChangeHandler() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const ChangeHandlerMethod = (e) => {
        switch (e.target.name) {
            case "Name" :
                setName(e.target.value);
                break;
            case "Email" :
                setEmail(e.target.value);
                break;
            case "Password" :
                setPassword(e.target.value);
                break;
            default:
        }
    }
}