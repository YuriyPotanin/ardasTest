# ardasTest  
ardasTestServer  
Для запуска сервера приложения необходимо выполнить следующие действия:  
1) в корневой папке сервера выполнить команду:  
```shell
  npm i  
  npm install -g bower
 ```
2) в корневой папке сервера выполнить команду:  
```shell 
  bower i
```
3)перед запуском сервера необходимо выполнить сборку командой:  
```shell
 grunt
```
4)запустить сервер  
```shell
 node server.js
```
5)страница проекта: localhost:2222/  
6)для запуска Unit тестов выполните команду:  
```shell
 grunt karma
```