import { Computer } from "./Computer";

export class ComputerBuilder {
    private cpu: string = "";
    private ram: string = "";
    private storage: string = "";
    private gpu: string = "";

    setCPU(cpu: string): ComputerBuilder {
        this.cpu = cpu;
        return this;
    }

    setRAM(ram: string): ComputerBuilder {
        this.ram = ram;
        return this;
    }

    setStorage(storage: string): ComputerBuilder {
        this.storage = storage;
        return this;
    }

    setGPU(gpu: string): ComputerBuilder {
        this.gpu = gpu;
        return this;
    }

    build(): Computer {
        return new Computer(
            this.cpu,
            this.ram,
            this.storage,
            this.gpu
        );
    }
}