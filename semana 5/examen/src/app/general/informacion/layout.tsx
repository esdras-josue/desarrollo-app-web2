'use client'
import NavBar from "@/app/components/NavBar"

export default function NameLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <NavBar></NavBar>
            {children}
        </div>
    )
}