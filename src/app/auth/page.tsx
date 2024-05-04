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

export default function Login() {
    const loginForm = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });
    var esLintTest = "This is a test";

    return (
        <div className="flex justify-center items-center   h-screen">
            <div>
                <h3 className="scroll-m-20 text-xl text-center font-semibold tracking-tight">
                    Create an Account
                </h3>
                <p className="text-gray-500 p-1 text-center text-sm">
                    Enter your email to create account
                </p>
                <Form {...loginForm}>
                    <form
                        onSubmit={loginForm.handleSubmit((data) =>
                            console.log(data)
                        )}
                    >
                        <div className="py-2 px-2 ">
                            <FormField
                                control={loginForm.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        {/* <FormLabel>Email</FormLabel> */}
                                        <FormControl>
                                            <Input placeholder="name@example.com" />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="py-2 px-2 ">
                            <FormField
                                control={loginForm.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        {/* <FormLabel>Password</FormLabel> */}
                                        <FormControl>
                                            <Input
                                                placeholder="Password"
                                                type="password"
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="p-2">
                            <Button
                                className="w-full"
                                variant="secondary"
                                type="submit"
                            >
                                Continue with Email
                            </Button>
                        </div>
                        <div className="p-2">
                            <Button
                                className="w-full"
                                variant="link"
                                type="submit"
                            >
                                Reset Password
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    );
}
