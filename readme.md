# webpack使用回顾

```
    webpack使用需要安装的包
        传送门 https://webpack.docschina.org/guides/installation/
    1.基本使用
        让命令可以跑起来
            cnpm instal webpack webpack-cli --save-dev
        打包js功能
            webpack
    2.配置文件
        传送门:https://webpack.docschina.org/guides/getting-started/#使用一个配置文件
    3.各种loader
        让webpack拥有 解析 不同文件的功能

        cssloader:传送门:https://webpack.docschina.org/guides/asset-management/#%E5%8A%A0%E8%BD%BD-css

        命令:
            npm install --save-dev style-loader css-loader
    4.css文件分离
        传送门:
            1.x,2.x,3.x使用的方式
            https://webpack.docschina.org/guides/production/#split-css
            https://webpack.docschina.org/plugins/extract-text-webpack-plugin
            4.x使用的方式
            https://github.com/webpack-contrib/extract-text-webpack-plugin
            https://github.com/webpack-contrib/mini-css-extract-plugin
        命令:
            1.x,2.x,3.x使用的方式
            npm install --save-dev extract-text-webpack-plugin
            4.x使用的方式
            npm install --save-dev mini-css-extract-plugin
    5.自动生成html页面
        传送门:
            https://webpack.docschina.org/guides/output-management/#%E8%AE%BE%E5%AE%9A-htmlwebpackplugin
        命令:
            npm install --save-dev html-webpack-plugin
    6.自动更新
        传送门:
            https://webpack.docschina.org/guides/development/#%E4%BD%BF%E7%94%A8-webpack-dev-server
        命令:
            npm install --save-dev webpack-dev-server
    7.记录命令
        一大串的命令存在 package.json
        scripts这个建
            dev:"webpack-dev-server --open"
        命令
            npm run dev 即可
    8.不想每次做项目都自己配置这么多文件
        有一种开箱即用的整合环境(webstorm)
        自动生成项目基本结构 安装依赖
        @vue/cli
        传送门:
            https://vue-loader.vuejs.org/zh/guide/
            https://github.com/vuejs/vue-cli
            https://cli.vuejs.org/guide/installation.html   
        安装命令:
            npm install -g @vue/cli
        工具是什么
            工具的作用是让我们节省时间
            脚手架一定要做到开箱即用
        初始化项目命令
            vue create xxx (最新的脚手架的命令)

            vue init webpack xx(1.x,2.x)的命令
                暴露出来的配置较多
                有一部分的loader需要自行配置
    9.插件&包
        插件:
            依赖于某个东西才能够运行的
                webpack的插件 依赖于 webpack
        包: jQ,express,bootsrap
            自身就是独立的存在可以在任何的地方使用不依赖于什么
        包>插件
```
