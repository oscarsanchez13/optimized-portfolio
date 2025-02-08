"use client";

export default function Footer() {
    return (
        <footer className="bg-black text-white py-4 text-center text-sm">
            <div className="container mx-auto px-4">
                <p className="italic text-gray-300">“It always seems impossible until it’s done.” — Nelson Mandela</p>
                <p className="text-gray-500 mt-1">&copy; {new Date().getFullYear()} Oscar Sanchez. All Rights Reserved.</p>
            </div>
        </footer>
    );
}