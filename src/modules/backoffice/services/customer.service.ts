import { Model } from 'mongoose';
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Customer } from "models/customer";

@Injectable()
export class CustomerService {
    constructor(@InjectModel('Cat') private readonly model: Model<Customer>) { }

    async create(data: Customer): Promise<Customer> {
        const customer = new this.model(data);
        return await customer.save();
    }

    async findAll(): Promise<Customer[]> {
        return await this.model.find().exec();
    }
}