import { Controller, Post } from '@nestjs/common';
import { ImgService } from './img.service';
import { UserService } from '../user/user.service';

@Controller('img')
export class ImgController {
  constructor(private readonly imgService: ImgService, private readonly usersService: UserService) {}

  @Post('upload')
  uploadImg(data: any) {
    return this.imgService.uploadImag(data)
  }
}
