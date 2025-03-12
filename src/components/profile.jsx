import React from "react";
import useLocalStorage  from "./custom-hook";

export default function Profile() {
    const [name, setName] = useLocalStorage("username", "Leila");

    return(
        <div>
            <h1>Profile Page</h1>
            <input 
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
            />

        </div>
    );
}
