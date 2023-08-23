import { Controller, Post, Body } from '@nestjs/common';

import { CreateTeamMemberBody } from './dtos/create-team-member-body';
import { RocketMembersRepository } from './repositories/rocket-members-repository';


@Controller('api/v2')
export class AppController {
  constructor(private rocketMembersRepository: RocketMembersRepository) {

  }

  @Post()
  async getHello(@Body() body: CreateTeamMemberBody) {

    const { name, 'function': memberFunction } = body


    await this.rocketMembersRepository.create(name, memberFunction)

  }
}

