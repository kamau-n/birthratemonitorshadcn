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
import { DataTable } from "./dashboard/data-table";
import { payments } from "@/features/dashboards/types";
import { columns } from "./dashboard/columns";
import { Children, ReactNode } from "react";

export default function Home( ) {
    
    return (
        <main className="border-2  rounded-md">  
        
            <div className="flex justify-between p-2 m-2">
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
            <div className="border-2 p-2 gap-1 rounded flex ">
                <div className="h-screen basis-1/6 p-1  rounded-md border-2">
                    <ComboboxDemo />
                </div>
                <div className="basis-5/6 border-2 flex gap-3 rounded-md">
                    <div className="basis-1/2 p-2">
                        <h2 className="text-lg font-normal">DashBoard</h2>
                    </div>
                    <div className="basis-1/2 p-2">
                        
                      
                    </div>
                </div>
            </div>
        </main>
    );
}
