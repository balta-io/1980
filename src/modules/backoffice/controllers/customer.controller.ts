import { Controller, Post, Get, Put, Delete } from "@nestjs/common";

@Controller('v1/customers')
export class CustomerController {
    @Post()
    async post() { }

    @Get()
    async getAll() { }

    @Get()
    async get() { }

    @Get()
    async query() { }

    @Put()
    async put() { }

    @Delete()
    async delete() { }
}