export type link = {
    id: number;
    name: string;
    to: string
}

export type card = {
    id: number;
    image: string;
    type: string;
    description: string
}

export type Testimonial = {
    id: number;
    image: string;
    name: string;
    description: string;
};

export type services = {
    id: number;
    name: string;
    description: string;
    duration: string;
    price: number;
};

export interface ServiceContextValue {
    services: services[];
    setServices: React.Dispatch<React.SetStateAction<services[]>>;
    index: number;
    setIndex: React.Dispatch<React.SetStateAction<number>>;
}

export type DateList = {
    index: number;
    Date: Date;
}[]

export type indexList = {
    start: number;
    end: number;
}

export interface DateContextValue {
    dates: DateList;
    setDates: React.Dispatch<React.SetStateAction<DateList>>;
    viewIndex: indexList;
    setViewIndex: React.Dispatch<React.SetStateAction<indexList>>;
}