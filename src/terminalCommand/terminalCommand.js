import React from "react";

export default class terminalCommand extends React.Component {
    render() {
        return (
        <div><div>2. 终端命令入门总结</div>{
            // 新建文件夹: mkdiv
            // 删除文件夹: rmdir
            // 移动或重命名一个目录: mvdir 例如: mvdir dir1 dir2
            // 进入文件夹: cd
            // 上级目录: cd ..
            // 返回上一个访问的目录: cd -
            // 显示当前目录的路径名: pwd　
            // 列出目录下所有文件: ls
            // 比较两个目录的内容: dircmp 例如: dircmp dir1 dir2

            // 在终端下查看文件: cat 文件名
            // 显示非文本文件的内容: od 例如: od -c filename
            // 复制文件或目录: cp 例如: cp file1 file2
            // 将文件拷贝到目标目录下: cp 文件名 目标目录
            // 删除文件或目录: rm 
            // 显示文件类型: file
            // 用默认的程序打开文件: open

            // 显示文件的最初几行: head 例如: head -20 filename
            // 显示文件的最后几行: tail 例如: tail -15 filename
            // 比较并显示两个文件的差异: diff 例如: diff file1 file2
            // 排序或归并文件: sort 例如: sort -d -f -u file1
            // 去掉文件中的重复行: uniq 例如: uniq file1 file2

            // 修改用户密码: passwd
            // 给终端上锁: xlock 例如: xlock -remote

            // 显示进程当前状态: ps 例如: ps u
            // 终止进程: kill 例如:  kill -9 30142

            // 显示系统的当前日期和时间: date
            // 显示日历: cal 例如: cal 8 1996
            // 查询磁盘使用情况: du 例如: du -k subdir
            // 列出当前登录的所有用户: who 
            // 显示文件系统的总空间和可用空间: df 例如: df /tmp
            // 显示当前系统活动的总信息: w
            // 显示当前所有设置过的环境变量: env
            // 清除屏幕或窗口内容: clear
            // 显示操作系统的有关信息: uname
            // 编译源文件，产生a.out: g++ 源文件名
            // 运行  例如：./a.out < 输入文件名 > 输出文件名: ./文件名
            // 打开: nano ....sh
            // 运行脚本: bash ....sh
            // 输出语句: echo "...$i..."
        }</div>
        )
    }
}