## 基本数据类型
Java中有8种基本数据类型分为三大类。
### 字符型
char
### 布尔型
boolean
### 数值型
1. 整型：byte、short、int、long 
2. 浮点型：float、double

这八种基本类型都有对应的包装类分别为：Byte、Short、Integer、Long、Float、Double、Character、Boolean
### 基本数据类型取值范围
| 基本类型 | 位数 | 字节 | 范围 | 默认值 |
| :-----| :-----| :-----| :-----| :-----|
|int|32|4|-2,147,483,648 (-2^31)-2,147,483,647 (2^31-1)|0|
|short|16|2|-32,768 (-2^15)-32,767 (2^15-1)|0|
|long|64|8|-9,223,372,036,854,775,808 (-2^63)-9,223,372,036, 854,775,807 (2^63-1)|0L|
|byte|8|1|-128(-2^7)-127(2^7-1)|0|
|char|16|2|0~65535|'u0000'|
|float|32|4||0f|
|double|64|8||0d|
|boolean|1|||false|

## 自动拆装箱