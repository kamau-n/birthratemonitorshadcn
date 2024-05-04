"use client";
import { ComboboxDemo } from "@/components/ui/ComboboxDemo";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarTrigger,
} from "@/components/ui/menubar";
import { MenubarMenu } from "@radix-ui/react-menubar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main className="border-2  rounded-md">
            <div className="flex justify-between p-2 m-2">
                <ComboboxDemo />
                <div className="flex gap-3">
                    <h4>Home</h4>
                    <Link href="/auth">Login</Link>
                    <h4>Settings</h4>
                </div>
                <div className="flex gap-3">
                    <Input placeholder="Search" />
                    <Avatar>
                        <AvatarImage
                            src="https://github.com/shadcn.png"
                            alt="@shadcn"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </main>
    );
}
