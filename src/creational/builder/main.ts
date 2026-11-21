import { ComputerBuilder } from "./ComputerBuilder";

const builder = new ComputerBuilder();

const computer = builder
    .setCPU("Intel Core i7")
    .setRAM("16GB")
    .setStorage("1TB SSD")
    .setGPU("NVIDIA RTX 4060")
    .build();

computer.showInfo();