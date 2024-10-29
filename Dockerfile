# 使用官方 Node.js 镜像作为基础镜像
FROM node:18

# 复制项目文件
COPY . /app/

# 设置工作目录
WORKDIR /app

# 安装项目依赖
RUN yarn

# 暴露应用监听的端口
EXPOSE 3000

# 定义启动命令
CMD ["node", "app.js"]
