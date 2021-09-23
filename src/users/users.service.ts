import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeit',
    },
    {
      userId: 2,
      username: 'Khan',
      password: 'changeit',
    },
    {
      userId: 3,
      username: 'johnny',
      password: 'changeit',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
