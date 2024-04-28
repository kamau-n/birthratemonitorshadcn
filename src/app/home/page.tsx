import { Button } from "@/components/ui/button";
import React from "react";

const HomePage: React.FC = () => {
    return (
        <div className="flex justify-center align-middle h-full ">
            <Button variant={"destructive"} size={"default"}>
                Click me
            </Button>
        </div>
    );
};

export default HomePage;
