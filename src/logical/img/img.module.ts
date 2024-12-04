import { Module } from '@nestjs/common';
import { ImgController } from './img.controller';
import { ImgService } from './img.service';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname, join } from 'path';

// 创建有关图像上传下载的功能；
@Module({
  // 基本的控制器
  // controllers: [ImgController],
  // service 业务模块
  imports: [
    MulterModule.register({
      limits: { fileSize: 51200 * 1024 }, // 限制文件大小为10MB
      // 最后，从性能角度考虑，使用服务器（本地）存储图片的方式；
      storage: diskStorage({
        //destination配置文件上传后的路径
        //__dirname是全局变量，表示当前文件目录。假设index.js文件在/home/ubuntu/index.js这里，那么
        //__dirname表示：/home/ubuntu
        //path模块的join()函数，用来合并两个目录。
        //拿上面的例子距离，合并后的路径为：/home/images
        //因为../images表示上一级目录的images文件夹
        destination: join(__dirname, "../../images"),
        //定义文件名，这里通过函数来决定文件的名字
        //这个函数传入三个参数：request、file对象和callback函数
        //callback函数接收两个参数：错误对象和文件名。如果没有错误通常传入null
        //callback函数用来通知multer，文件命名已经完成了，如果没有错误的话可以进行下一步操作了
        filename: (_, file, callback) => {
          //这里的文件名为字符串，具体是：当前时间的时间戳 + 文件扩展名
          const fileName = `${new Date().getTime() + extname(file.originalname)}`
          console.log('fileName: ', fileName)
          return callback(null, fileName)
        }
      })
    }),
  ],
  providers: [ImgService],
  exports: [ImgService],
})
export class ImgModule {}
