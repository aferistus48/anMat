export class User {
    constructor(
        public surname: string,
        public name: string,
        public dateOfBirth: string,
        public email: string,
        public phone: string,
        public photo: string,
        public patronymic?: string
    ) { }
}
