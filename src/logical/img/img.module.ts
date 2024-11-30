import { Module } from '@nestjs/common';
import { ImgController } from './img.controller';
import { ImgService } from './img.service';

// 创建有关图像上传下载的功能；
@Module({
  // 基本的控制器
  controllers: [ImgController],
  // service 业务模块
  providers: [ImgService]
})
export class ImgModule {}
