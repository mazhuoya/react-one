import React from "react";

export default class GitMethod extends React.Component {
    render() {
        return (
        <div><div>1. git 命令总结</div>{
            // 创建新分支push到远程
            // (1) 本地分支: git checkout -b 分支名 
            // (2) push到远程分支: git push origin 分支名 或 git push origin 本地分支名：远程分支名
            // (3) 切换分支: git checkout 分支名

            // 配置 用户与邮箱
            // (1) git config --global user.name "用户名"
            // (2) git config --global user.email "邮箱名"

            // 查看是否配置成功
            // (1) git config --global --list

            // code提交方式
            // (1) git add .
            // (2) git commit -m "名称" -n
            // (3) git push --set-upstream origin 分支名

            // 修改文件名
            // (1) 手动删除  然后git add文件名 再git rm 文件名 相对来说繁琐
            // (2) 命令删除 git mv 第一个文件名为改动之前的名字 第二个文件名为改动之后的名字

            // git 命令总结
            // (1) 查看版本是否安装: git --version
            // (2) 查看哪些代码做了修改: git status
            // (3) 查看所有人的改动: git log
            // (4) 查看一个简单的信息: git log --oneline 
            // (5) 查看个人的改动: git log --author="查看的名字" 
            // (6) 删除某一个文件: 1.手动删除 2.命令(git rm 文件名)
            // (7) 把文件移到另外一个文件夹: git mv 移动的文件 移动到的文件夹
            // (8) 先移动后修改名字: git mv 移动的文件 移动到的文件夹/移动的文件名修改
            // (9) 两次修改具体哪里不同: git diff
            // (10) 把代码从暂存区撤销出来: git reset HEAD home/home.html(还原的文件)
            // (11) 修改的不想修改了想还原（git add . 提交前的命令）git checkout -- home/home.html(还原的文件)

            // 想要回到上一版本或者指定版本时如何操作
            // (1) 注：一个^简括号代表回到上一个版本。两个代表两个版本......
            // (2) git reset --hard HEAD^
            // 但是一个版本一个简括号实在太慢，100个版本呢？所以更快捷的方法
            // (1) 先拿到要回退到的哪个版本号id（全部或者前几位都可以）
            // (2) git log
            // (3) 然后在使用命令
            // (4) git reset --hard ID号

            // 想要将某一文件回退到指定版本如何操作
            // (1) 先 git log 查看之前版本 id
            // (2) git checkout 版本号 -- 我们要回退文件的名字

            // 想要给每个版本创建一个独特标签，做所有版本标签管理时如何操作
            // (1) git tag v1.0
            // (2) 检查版本是否成功，直接git tag
            // 如果想要把版本加在之前版本怎么加呢？
            // (1) git tag v0.5(版本标签号) 跟上commit id号
            // 如果版本标签加错了，要删除怎么删呢？
            // (1) git tag -d v0.5(版本标签号)

            // 想要切换、创建、删除分支时如何操作？
            // (1) 创建一个dev的分支: git branch dev 
            // (2) 切换到dev分支: git checkout dev
            // (3) 删除dev分支: git branch -d dev (-d 改为 -D 就是强制删除)
            // 创建一个分支并且跳到创建分支(test 是分支名，自己取名)
            // (1) git checkout -b test

            // 想要合并分支时如何进行操作
            // (1) git merge 要合并分支的名字

            // 不同人想要查看版本路线如何进行操作
            // (1) git log --oneline --graph

            // 不同人想要删除不想要的分支如何操作
            // (1) git fetch 拉取所有的远程仓库
            // (2) git branck -av 查看分支
            // (3) git  push origin --delete 分支名

            // chrome 装插件 方便 github 中查看
            // (1) 装 chrome 插件
            // (2) 在扩展程序中 搜 Enhanced GitHub 可以单独下载文件，不需要下载全部文件
            // (3) 在扩展程序中 搜 Octotree 可以在github里面左侧出现快速查找列表，很像编辑器
            // (4) 在扩展程序中 gitzip for github 可以下载文件 双击
        }</div>
        )
    }
}