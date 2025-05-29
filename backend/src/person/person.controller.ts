import { Controller, Post, Get, Body } from '@nestjs/common';
import { PersonService } from './person.service';
import { Person } from './schemas/person.schema';

@Controller('person')
export class PersonController {

  constructor(private readonly personService: PersonService) {}

  @Post()
  async create(@Body() body:Partial<Person>) {
    return this.personService.create(body);
  }
  @Get('latest')
  async getLatest(): Promise<Person[]> {
    return this.personService.findLatest();
  }

}
