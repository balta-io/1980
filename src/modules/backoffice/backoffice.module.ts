import { Module } from '@nestjs/common';
import { CustomerController } from './controllers/customer.controller';
import { CustomerSchema } from 'schemas/customer.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerService } from './services/customer.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Customer', schema: CustomerSchema }])],
    controllers: [CustomerController],
    providers: [CustomerService]
})
export class BackofficeModule {

}
