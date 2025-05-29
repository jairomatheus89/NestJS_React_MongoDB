import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Person } from './schemas/person.schema';

@Injectable()
export class PersonService {

  constructor(
    @InjectModel(Person.name) private personModel: Model<Person>
  ){}

  async create(data: Partial<Person>): Promise<Person> {
    try {
      const createdPerson = new this.personModel(data);
      return await createdPerson.save();
    } catch (error) {
      console.error('Erro ao criar pessoa:', error);
      throw error; // pode melhorar isso com HttpException
    }
  }

  async findLatest(): Promise<Person[]> {
    return this.personModel.find().sort({ createdAt: -1 }).limit(10).exec();
  }

}
