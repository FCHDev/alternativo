import React from 'react';
import Link from "next/link";

const Test = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <Link href="/admin">Admin</Link>
        </div>
    );
};

export default Test;