import { Injectable } from '@nestjs/common';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { Character } from './entities/character.entity';
import { get } from 'http';
import { GetCharacterDto } from './dto/get-character.dto';

@Injectable()
export class CharacterService {
  constructor(
    @InjectModel(Character.name)
    private characterModel: Model<Character>,
  ) {}
  async create(createCharacterDto: CreateCharacterDto) {
    try {
      console.log(createCharacterDto);
      const newCharacter = new this.characterModel(createCharacterDto);
      return newCharacter.save();
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async findAll(getCharacterDto: GetCharacterDto) {
    const { quantity } = getCharacterDto
    try {
      //Si se envia el parametro quantity trae la cantidad de personajes de forma
      if(quantity){
        const characters = await this.characterModel.aggregate([
          { $sample: { size: quantity } }
      ]);
        return characters
      }
      const characters = await this.characterModel.find();
      return characters;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} character`;
  }

  update(id: number, updateCharacterDto: UpdateCharacterDto) {
    return `This action updates a #${id} character`;
  }

  remove(id: number) {
    return `This action removes a #${id} character`;
  }
}
