import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ImgService } from './img.service';
import { UserService } from '../user/user.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('img')
export class ImgController {
  constructor(private readonly imgService: ImgService, private readonly usersService: UserService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file): Promise<{ url: string }> {
    const fileUrl = await this.imgService.uploadFile(file);
    return { url: fileUrl };
  }
}
