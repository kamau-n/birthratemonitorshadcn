export type Payment = {
    id: string;
    amount: number;
    status: "pending" | "processing" | "success" | "failed";
    email: string;
};

export const payments: Payment[] = [
    {
        id: "728ed52f",
        amount: 100,
        status: "pending",
        email: "m@example.com",
    },
    {
        id: "489e1d42",
        amount: 125,
        status: "processing",
        email: "example@gmail.com",
    },
    //generate more objects
    {
        id: "489e1d42",
        amount: 125,
        status: "processing",
        email: "type@gmail.com",
    },
    {
        id: "489e1d42",
        amount: 125,
        status: "processing",
        email: "second@gmail.com",
    },
    {
        id: "489e1d42",
        amount: 125,
        status: "processing",
        email: "okay@gmail.com",
    },

    {
        id: "489e1d42",
        amount: 125,
        status: "processing",
        email: "okay@gmail.com",
    },
    {
        id: "489e1d42",
        amount: 125,
        status: "processing",
        email: "okay@gmail.com",
    },
    {
        id: "489e1d42",
        amount: 125,
        status: "processing",
        email: "okay@gmail.com",
    },

    {
        id: "489e1d42",
        amount: 125,
        status: "processing",
        email: "okay@gmail.com",
    },

    {
        id: "489e1d42",
        amount: 1025,
        status: "processing",
        email: "okay@gmail.com",
    },

    {
        id: "489e1d42",
        amount: 1525,
        status: "processing",
        email: "okay@gmail.com",
    },

    {
        id: "489e1d42",
        amount: 1325,
        status: "processing",
        email: "okay@gmail.com",
    },
    {
        id: "489e1d42",
        amount: 1259,
        status: "processing",
        email: "aocto@gmail.com",
    },
    {
        id: "489e1d42",
        amount: 1256,
        status: "processing",
        email: "hex@gmail.com",
    },


];
