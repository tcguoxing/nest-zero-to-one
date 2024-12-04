import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { UserService } from './logical/user/user.service';
import { UserController } from './logical/user/user.controller';
import { UserModule } from './logical/user/user.module';
// import { AuthService } from './logical/auth/auth.service';
import { AuthModule } from './logical/auth/auth.module';
import { CommodityService } from './logical/commodity/commodity.service';
import { CommodityController } from './logical/commodity/commodity.controller';
import { ImgModule } from './logical/img/img.module';
import { ImgController } from './logical/img/img.controller';

@Module({
  imports: [UserModule, AuthModule, ImgModule],
  controllers: [AppController, UserController, CommodityController, ImgController],
  providers: [AppService, CommodityService],
})
export class AppModule {}
