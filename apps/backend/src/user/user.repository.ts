import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { BadRequestException } from '@nestjs/common';

export class UsersRepository extends Repository<User> {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {
    super(
      userRepository.target,
      userRepository.manager,
      userRepository.queryRunner,
    );
  }

  public async findAll(): Promise<User[]> {
    return this.find();
  }

  public async findById(id: number): Promise<User | null> {
    return this.findOneBy({ id: id });
  }

  public async findByEmail(email: string): Promise<User | null> {
    return this.findOneBy({ email: email });
  }

  public async updateOne(user: User): Promise<User | undefined> {
    if (!user) {
      throw new BadRequestException("User does not exist");
    }
    return this.save(user);
  }

  public async createUser(userData: User): Promise<User> {
    const newUser = this.create(userData);
    newUser.dateJoined = new Date(Date.now());
    return await this.save(newUser);
  }

  public async destroy(id: number): Promise<void> {
    await this.delete(id);
  }
}
