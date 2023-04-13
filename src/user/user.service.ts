import { Injectable, Logger, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { UserModel } from './types/user.interface';

@Injectable()
export class UserService {
    private users: Array<UserModel> = [];
    private readonly logger = new Logger(UserService.name);

    public findAll(): Array<UserModel> {
        return this.users;
    }

    public findUserById(id: number): UserModel {
        const user: UserModel = this.users.find(user => user.id === id);
        if(!user) {
            throw new NotFoundException('User not found');
        }

        return user;
    }

    public create(user: UserModel): UserModel {
        // const nameExists: boolean = this.users.some(item => item.lastName === user.lastName);
        // if (nameExists) {
        //     throw new UnprocessableEntityException('Name already exists');
        // }
        const maxId: number = Math.max(...this.users.map((user) => user.id), 0);
        const id: number = maxId + 1;
        
        const userPost: UserModel = {
            id,
            ...user,
        }
        this.users.push(userPost);

        return userPost;
    }

    public delete(id: number): void {
        const index: number = this.users.findIndex(user => user.id === id);

        if (index === -1) {
            throw new NotFoundException('User not found');
        }

        this.users.splice(index, 1);
    }

    public update(id: number, user: UserModel): UserModel {
        this.logger.log(`Updating user with: ${id}`);

        const index: number = this.users.findIndex(user => user.id === id);

        if (index === -1) {
            throw new NotFoundException('User not found.');
        }

        const nameExists: boolean = this.users.some(
            (item) => item.lastName === user.lastName && item.id !== id,
          );
          if (nameExists) {
            throw new UnprocessableEntityException('User title already exists.');
          }

        const userPost: UserModel = {
            ...user,
            id,
        }
        this.users[index] === userPost;

        return userPost;
    }
}
