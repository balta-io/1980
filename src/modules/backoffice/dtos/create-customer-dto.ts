export class CreateCustomerDto {
    constructor(
        public firstName: string,
        public lastName: string,
        public document: string,
        public email: string,
        public password: string,
    ) {

    }
}
