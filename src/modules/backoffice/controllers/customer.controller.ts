import { Controller, Post, Get, Put, Delete, Body, Param, UseInterceptors, HttpStatus, HttpException } from '@nestjs/common';
import { CustomerService } from 'src/modules/backoffice/services/customer.service';
import { Customer } from 'src/modules/backoffice/models/customer.model';
import { Query } from 'src/modules/backoffice/models/query.model';
import { ValidatorInterceptor } from 'src/modules/backoffice/interceptors/validator.interceptor';
import { CreateCustomerContract } from 'src/modules/backoffice/contracts/customer.contracts';
import { Result } from 'src/modules/backoffice/models/result.model';

@Controller('v1/customers')
export class CustomerController {
    constructor(private readonly service: CustomerService) { }

    @Post()
    @UseInterceptors(new ValidatorInterceptor(new CreateCustomerContract()))
    async post(@Body() model: Customer) {
        try {
            await this.service.create(model);
            return model;
        } catch (error) {
            throw new HttpException(new Result('Não foi possível realizar seu cadastro', false, null, error), HttpStatus.BAD_REQUEST);
        }
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

    // @Put()
    // async put() { }

    // @Delete()
    // async delete() { }
}
