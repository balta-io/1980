import { Controller, Post, Get, Body, Param, UseInterceptors, HttpStatus, HttpException } from '@nestjs/common';
import { CustomerService } from 'src/modules/backoffice/services/customer.service';
import { Customer } from 'src/modules/backoffice/models/customer.model';
import { Query } from 'src/modules/backoffice/models/query.model';
import { ValidatorInterceptor } from 'src/modules/backoffice/interceptors/validator.interceptor';
import { CreateCustomerContract } from 'src/modules/backoffice/contracts/customer.contracts';
import { Result } from 'src/modules/backoffice/models/result.model';
import { AccountService } from '../services/account.service';
import { User } from '../models/user.model';
import { CreateCustomerDto } from '../dtos/create-customer-dto';

@Controller('v1/customers')
export class CustomerController {
    constructor(private readonly customerService: CustomerService, private readonly accountService: AccountService) { }

    @Post()
    @UseInterceptors(new ValidatorInterceptor(new CreateCustomerContract()))
    async post(@Body() model: CreateCustomerDto) {
        try {
            const user = await this.accountService.create(new User(model.document, model.password, false));
            const customer = new Customer(model.firstName, model.lastName, model.document, model.email, null, null, null, null, user);
            await this.customerService.create(customer);
            return model;
        } catch (error) {
            throw new HttpException(new Result('Não foi possível realizar seu cadastro', false, null, error), HttpStatus.BAD_REQUEST);
        }
    }

    @Get()
    async getAll() {
        return this.customerService.findAll();
    }

    @Get(':document')
    async get(@Param('document') document) {
        return this.customerService.find(document);
    }

    @Post('query')
    async query(@Body() model: Query) {
        return this.customerService.query(model);
    }

    // @Put()
    // async put() { }

    // @Delete()
    // async delete() { }
}
