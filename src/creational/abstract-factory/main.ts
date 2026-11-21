import { ClickFactory} from "./click";
import { PaymeFactory } from "./payme";

const click = new ClickFactory();

const clickPayment = click.createPayment();
const clickRefund = click.createRefund();

clickPayment.pay(50000);
clickRefund.refund(20000);


const payme = new PaymeFactory();

const paymePayment = payme.createPayment();
const paymeRefund = payme.createRefund();

paymePayment.pay(100000);
paymeRefund.refund(30000);