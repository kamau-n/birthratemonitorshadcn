import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

export default function login() {
    return (
        <div className="flex justify-center items-center   h-screen">
            <Tabs defaultValue="account" className="w-[200px]">
                <TabsList className="bg-blue-100">
                    <TabsTrigger value="account">Login</TabsTrigger>
                    <TabsTrigger value="password">Register</TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                    <h2>Login</h2>
                </TabsContent>
                <TabsContent value="password">
                    Change your password here.
                </TabsContent>
            </Tabs>
        </div>
    );
}
