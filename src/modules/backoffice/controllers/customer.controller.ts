import { Controller, Post, Get, Put, Delete, Body, Param } from "@nestjs/common";
import { CustomerService } from "../services/customer.service";
import { Customer } from "models/customer.model";
import { Query } from "models/query.model";

@Controller('v1/customers')
export class CustomerController {
    constructor(private readonly service: CustomerService) { }

    // Validar os dados
    @Post()
    async post(@Body() model: Customer) {
        await this.service.create(model);
        return model;
    }

    @Get()
    async getAll() {
        return this.service.findAll();
    }

    @Get(':document')
    async get(@Param('document') document) {
        return this.service.find(document);
    }

    @Post('query')
    async query(@Body() model: Query) {
        return this.service.query(model);
    }

    @Put()
    async put() { }

    @Delete()
    async delete() { }
}