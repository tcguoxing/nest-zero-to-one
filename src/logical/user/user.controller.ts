import { Controller, Post, Body, UseGuards, UsePipes } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../auth/auth.service';
import { UserService } from './user.service';
import { ValidationPipe } from '../../pipe/validation.pipe';
import { LoginDTO, RegisterInfoDTO } from './user.dto';
import { ApiTags, ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import { log } from 'console';
@ApiBearerAuth()
// 可以在最外层添加一个全局的jwt验证；
// @UseGuards(AuthGuard('jwt'))
@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly authService: AuthService, private readonly usersService: UserService) {}

  // JWT验证 - Step 1: 用户请求登录
  @Post('login')
  @ApiBody({
    description: '用户登录',
    type: LoginDTO,
  })
  async login(@Body() loginParmas: LoginDTO) {
    console.log('JWT验证 - Step 1: 用户请求登录');
    const authResult = await this.authService.validateUser(loginParmas.username, loginParmas.password);
    switch (authResult.code) {
      case 1:
        return this.authService.certificate(authResult.user);
      case 2:
        return {
          code: 600,
          msg: `账号或密码不正确`,
        };
      default:
        return {
          code: 600,
          msg: `查无此人`,
        };
    }
  }

  // JWT守卫
  @UseGuards(AuthGuard('jwt'))
  @UsePipes(new ValidationPipe())
  @Post('register')
  async register(@Body() body: any) {
    return await this.usersService.register(body);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('find-one')
  async findOne(@Body() body) {
    const {username} = body
    console.log('username: ', username);
    const findRes = await this.usersService.findOne(username)
    log('find res: ', findRes)
    return findRes
  }

}
