type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

type Params = Omit<Form, 'errors'>;

const params: Params = {
    email: 'example@mail.com',
    firstName: 'Laura',
    lastName: 'Smith',
    phone: '675235423',
}

console.log(params);