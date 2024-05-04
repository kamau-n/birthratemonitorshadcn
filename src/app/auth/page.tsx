"use client";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { loginSchema } from "@/features/authentication/types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function login() {
    const loginForm = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });
    var esLintTest = "This is a test";

    return (
        <div className="flex justify-center items-center    h-screen">
            <Tabs defaultValue="account" className="w-1/4 bg-slate-300 p-10 ">
                <TabsList className="bg-blue-100">
                    <TabsTrigger value="account">Login</TabsTrigger>
                    <TabsTrigger value="password">Register</TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                    <h2>Login</h2>
                    <Form {...loginForm}>
                        <form
                            onSubmit={loginForm.handleSubmit((data) =>
                                console.log(data)
                            )}
                        >
                            <FormField
                                control={loginForm.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Email" />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={loginForm.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Password"
                                                type="password"
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <Button type="submit">Submit</Button>
                        </form>
                    </Form>
                </TabsContent>
                <TabsContent value="password">
                    Change your password here.
                </TabsContent>
            </Tabs>
        </div>
    );
}
