import type { Payment, Refund, PaymentFactory } from "./interfaces";

class PaymePayment implements Payment {
    pay(amount: number): void {
        console.log(`Payme orqali ${amount} so'm to'landi`);
    }
}

class PaymeRefund implements Refund {
    refund(amount: number): void {
        console.log(`Payme orqali ${amount} so'm qaytarildi`);
    }
}

export class PaymeFactory implements PaymentFactory {
    createPayment(): Payment {
        return new PaymePayment();
    }

    createRefund(): Refund {
        return new PaymeRefund();
    }
}