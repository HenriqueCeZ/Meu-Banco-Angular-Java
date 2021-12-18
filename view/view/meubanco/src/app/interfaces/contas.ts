import { ICliente } from './cliente';
export interface IContas{


    agencia: string,
    cliente: ICliente,
    id: number,
    numero: string,
    saldo: number


}
