
export interface Payment {
    pay(amount: number): void;
}

export interface Refund {
    refund(amount: number): void;
}

export interface PaymentFactory {
    createPayment(): Payment;
    createRefund(): Refund;
}