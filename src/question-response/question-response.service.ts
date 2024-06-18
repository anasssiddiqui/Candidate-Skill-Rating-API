import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { QuestionResponse } from './question-response.entity';
import { CreateQuestionResponseDto } from './dto/create-question-response.dto';
import { UpdateQuestionResponseDto } from './dto/update-question-response.dto';

@Injectable()
export class QuestionResponseService {
  constructor(
    @InjectRepository(QuestionResponse)
    private questionResponseRepository: Repository<QuestionResponse>,
  ) {}

  create(
    createQuestionResponseDto: CreateQuestionResponseDto,
  ): Promise<QuestionResponse> {
    const questionResponse = this.questionResponseRepository.create(
      createQuestionResponseDto,
    );
    return this.questionResponseRepository.save(questionResponse);
  }

  findAll(): Promise<QuestionResponse[]> {
    return this.questionResponseRepository.find();
  }

  findOne(id: number): Promise<QuestionResponse> {
    return this.questionResponseRepository.findOneBy({ id });
  }

  async update(
    id: number,
    updateQuestionResponseDto: UpdateQuestionResponseDto,
  ): Promise<QuestionResponse> {
    await this.questionResponseRepository.update(id, updateQuestionResponseDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.questionResponseRepository.delete(id);
  }

  async getAggregatedSkills(candidateId: number) {
    const responses = await this.questionResponseRepository.find({
      where: { candidate: { id: candidateId } },
    });

    const skillRatings = {};

    responses.forEach((response) => {
      if (!skillRatings[response.skillId]) {
        skillRatings[response.skillId] = { totalRating: 0, totalWeight: 0 };
      }

      const weight = this.getWeight(response.difficultyLevel);
      skillRatings[response.skillId].totalRating += response.rating * weight;
      skillRatings[response.skillId].totalWeight += weight;
    });

    const aggregatedSkills = Object.keys(skillRatings).map((skillId) => ({
      skillId: parseInt(skillId, 10),
      rating:
        skillRatings[skillId].totalRating / skillRatings[skillId].totalWeight,
    }));

    return aggregatedSkills;
  }

  private getWeight(difficultyLevel: string): number {
    switch (difficultyLevel) {
      case 'easy':
        return 1;
      case 'medium':
        return 2;
      case 'hard':
        return 3;
      default:
        return 1;
    }
  }
}
