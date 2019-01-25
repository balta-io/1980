import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Customer } from 'src/modules/backoffice/models/customer.model';
import { Query } from 'src/modules/backoffice/models/query.model';

@Injectable()
export class CustomerService {
    constructor(@InjectModel('Customer') private readonly model: Model<Customer>) { }

    // Cria um novo cliente
    async create(data: Customer): Promise<Customer> {
        const customer = new this.model(data);
        return await customer.save();
    }

    // Atualiza os dados do cliente

    // Adiciona um endereço de cobrança

    // Remove um endereço de cobrança

    // Adiciona um endereço de entrega

    // Remove um endereço de entrega

    // Adiciona um pet

    // Remove um pet

    // Lista um cliente pelo documento
    async find(document): Promise<Customer[]> {
        return await this.model.find({ document }).exec();
    }

    // Lista vários clientes
    async findAll(): Promise<Customer[]> {
        return await this.model.find({}, 'firstName lastName name email document').exec();
    }

    // Consulta livre
    async query(model: Query): Promise<Customer[]> {
        return await this.model.find(model.query, model.fields, { skip: model.skip, limit: model.take }).exec();
    }

    // Lista os pets de um cliente

    // Busca um cliente pelo CPF

    // Busca um Pet pelo nome
}
