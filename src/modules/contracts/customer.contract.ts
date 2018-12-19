import { Customer } from "models/customer.model";
import { Flunt } from "utils/flunt";
import { Injectable, NestInterceptor, ExecutionContext } from "@nestjs/common";
import { Observable } from "rxjs";

@Injectable()
export class CustomerContractInterceptor implements NestInterceptor {
    public EnsureCanCreateCustomer(customer: Customer): boolean {
        let flunt = new Flunt();

        flunt.hasMinLen(customer.name, 5, 'Nome inválido');
        flunt.isEmail(customer.email, 'E-mail inválido');
        flunt.isFixedLen(customer.document, 11, 'CPF inválido');
        flunt.hasMinLen(customer.password, 6, 'Senha inválida');

        return flunt.isValid();
    }

    intercept(context: ExecutionContext, call$: Observable<any>): Observable<any> {
        const body = context.switchToHttp().getRequest().body;

        
    }
}