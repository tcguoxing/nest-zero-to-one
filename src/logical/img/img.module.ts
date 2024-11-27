import { Module } from '@nestjs/common';
import { ImgController } from './img.controller';
import { ImgService } from './img.service';

@Module({
  // 基本的控制器
  controllers: [ImgController],
  // service 业务模块
  providers: [ImgService]
})
export class ImgModule {}
