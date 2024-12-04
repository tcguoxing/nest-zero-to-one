import { Injectable, UploadedFile } from '@nestjs/common';
import { Express } from 'express';
import uuid from 'uuid'
import sequelize from '../../database/sequelize'; // 引入 Sequelize 实例

@Injectable()
export class ImgService {
  async uploadImag(@UploadedFile() file: Express.Multer.File) {
    try {
      const record = await sequelize.create({
        id: uuid(), // 使用 UUID 或其他唯一标识符生成器
        keywords: '', // 根据需要设置关键字
        aikeywords: '',
        aiid: '',
        filename: file.originalname,
        filetype: file.mimetype,
        filesize: file.size,
        imageData: file.buffer, // 将文件的 buffer 存储为 BLOB 数据
        uploadTime: new Date(),
      });

      return record;
    } catch (error) {
      throw new HttpException('上传失败', HttpStatus.INTERNAL_SERVER_ERROR);
    }

    throw new Error('Method not implemented.');
  }
}
