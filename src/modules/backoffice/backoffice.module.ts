import { Module } from '@nestjs/common';
import { CustomerController } from 'src/modules/backoffice/controllers/customer.controller';
import { CustomerSchema } from 'src/modules/backoffice/schemas/customer.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerService } from 'src/modules/backoffice/services/customer.service';

@Module({
    imports: [MongooseModule.forFeature([
        {
            name: 'Customer',
            schema: CustomerSchema,
        },
    ])],
    controllers: [CustomerController],
    providers: [CustomerService],
})
export class BackofficeModule {

}
