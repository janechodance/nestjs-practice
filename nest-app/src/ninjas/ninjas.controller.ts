import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Controller('ninjas')
export class NinjasController {
  @Get()
  getNinjas() {
    return [];
  }
  @Get(':id')
  getOneNinja(@Param('id') id: string) {
    return {
      id,
    };
  }
  @Post()
  createNinja(@Body() createNinjaDto: CreateNinjaDto) {
    return {
      name: createNinjaDto.name,
    };
  }
  @Put(':id')
  updateNinja(@Param('id') id: string, @Body() updateNinjoDto: UpdateNinjaDto) {
    return {
      id,
      name: updateNinjoDto.name,
    };
  }
  @Delete(':id')
  removeNinja() {
    return {};
  }
}
