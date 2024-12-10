import { Injectable, UploadedFile } from '@nestjs/common';
import { MulterDiskUploadedFiles } from '@nestjs/platform-express';
// import uuid from 'uuid'
// import sequelize from '../../database/sequelize'; // 引入 Sequelize 实例

@Injectable()
export class ImgService {
  async uploadFile(file: Express.Multer.File): Promise<string> {
    // console.log('upload img: ', file)
    return `http://localhost/img/upload/${file.originalname}`;
    // throw new Error('Method not implemented.');
  }
}
