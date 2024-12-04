* 创建图片仓库的命令
```
CREATE TABLE imgStorage (
  id VARCHAR(36) NOT NULL, -- 假设使用 UUID 作为唯一标识符
  keywords TEXT,           -- 关键字，可以是多个用逗号分隔
  aikeywords TEXT,         -- ai对这张图片分析后的关键字，可以是多个用逗号分隔
  aiid VARCHAR(36),         -- ai获取到的关键字
  filename VARCHAR(255),   -- 图片文件名
  filetype VARCHAR(100),   -- MIME 类型，例如 image/jpeg
  filesize BIGINT,         -- 文件大小，以字节为单位
  imageData LONGBLOB,      -- 图片的实际二进制数据
  uploadTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- 上传时间
  PRIMARY KEY (id)
) COMMENT '';

```