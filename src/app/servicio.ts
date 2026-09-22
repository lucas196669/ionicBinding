import { Service } from '@angular/core';

@Service()
export class Servicio {
    private users: Usuario[] = [
        { id: 1, nombre: 'Lucas', email: 'Lucas@gmail.com', activo: true },
        { id: 2, nombre: 'Pedro', email: 'pedro@gmail.com', activo: false },
        { id: 3, nombre: 'Marta', email: 'marta@gmail.com', activo: true },
    ];
    async getUsuarios(): Promise<Usuario[]> {
        return new Promise(resolve =>{setTimeout(() => resolve(this.users),1000);});
    }
}
