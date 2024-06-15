import { useState } from "react";

export default function Input({ onAdd }) {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {

    }

    return (
        <form onSubmit={handleSubmit}>

        </form>
    );
}