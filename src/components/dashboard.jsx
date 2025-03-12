import React from "react";
import { useLocalStorage } from "./custom-hook";


export default function Dashboard() {
    const [name] = useLocalStorage("username", "Leila")
    return(
        <div>
            <h1>Dashboard</h1>
            <p>Welcome,{name}</p>
        </div>
    );
}