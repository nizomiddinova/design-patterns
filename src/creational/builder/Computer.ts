export class Computer {
   cpu: string;
    ram: string;
    storage: string;
    gpu: string;

    constructor(cpu: string, ram: string, storage: string, gpu: string) {
        this.cpu = cpu;
        this.ram = ram;
        this.storage = storage;
        this.gpu = gpu;
    }
        showInfo(): void {
        console.log("Computer Configuration:");
        console.log("CPU: " + this.cpu);
        console.log("RAM: " + this.ram);
        console.log("Storage: " + this.storage);
        console.log("GPU: " + this.gpu);
    }
}