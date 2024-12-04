import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ImgService } from './img.service';
import { UserService } from '../user/user.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('img')
export class ImgController {
  constructor(private readonly imgService: ImgService, private readonly usersService: UserService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File): Promise<{ url: string }> {
    const fileUrl = await this.imgService.uploadImag(file);
    return { url: fileUrl };
  }
}
