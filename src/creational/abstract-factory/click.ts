import type { Payment, Refund, PaymentFactory } from "./interfaces";

class ClickPayment implements Payment {
    pay(amount: number): void {
        console.log(`Click orqali ${amount} so'm to'landi`);
    }
}

class ClickRefund implements Refund {
    refund(amount: number): void {
        console.log(`Click orqali ${amount} so'm qaytarildi`);
    }
}

export class ClickFactory implements PaymentFactory {
    createPayment(): Payment {
        return new ClickPayment();
    }

    createRefund(): Refund {
        return new ClickRefund();
    }
}