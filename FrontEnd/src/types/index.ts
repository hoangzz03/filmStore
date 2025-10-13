export interface ProductData {
    _id: string;
    name: string;
    price: number;
    desc: string;
    image: string;
    detail: string;
}


export interface OrderDetails {
    _id: string;
    quantity: number;
    product: ProductData;
    user: {
        _id: string;
        name: string;
        email: string;
        address: string;
        phone: string;
    }
}

export interface User {
    _id: string;
    name: string;
    email: string;
    address: string;
    phone: string;
    avatar: string;
    role: {
        _id: number;
        name: string;
    }
}
export interface UserFull {
    _id: string;
    name: string;
    email: string;
    address: string;
    phone: string;
    role: {
        _id: number;
        name: string;
    }
    orderDetails: OrderDetails[]
    payments: []
}

export interface LoginFormData {
    email: string;
    password: string;
}

export interface AuthResponse {
    token: string;
    user: User;
}

export interface AuthState {
    _id: string;
    name: string;
    email: string;
    address: string;
    phone: string;
    avatar: string;
    role: {
        _id: number;
        name: string;
    }
}

export interface PaymentData {
    _id: number;
    amount: number;
    message: string;
    payUrl: string;
    resultCode: number;
    user: {
        _id: string;
        username: string;
        email: string;
        address: string;
        phone: string;
    }
    order_Id: string;
    createat: string;
}

export interface Payment {
    _id: number;
    amount: number;
    message: string;
    payUrl: string;
    resultCode: number;
    order_Id: string;
    createat: string;
}

