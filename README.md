# Forced original scale

## About:

### Is the site or web application displayed incorrectly due to scaling set by the operating system? This package will solve your problem. It doesn't matter what percentage your page scaling by system is - it will be displayed at the correct scale

RU: Описание на русском языке внизу страницы. Этот пакет поможет вашему сайту всегда отображаться в правильном масштабе.

## How to use
#### Install the package: <code>npm install forced-original-scale</code>

### Clean HTML+JS without WebPack:

#### Before using npm-package in a clean HTML+JS or PHP, you need to compile a bundle from it. It's very simple, follow the instructions:
1. Install browserify first: <code>npm i -g browserify</code> *(in the console, the root folder of the project)*
2. Создайте в корневой папке проекта файл index.js и напишите внутри него:  
<code>var originalScale = require('forced-original-scale');</code>
3. Build bundle using browserify: <code>browserify index.js > bundle.js</code> *(in the console, the root folder of the project)*
4. In your index.html, before the closing "body" tag, add:

<code>\<script src="bundle.js">\</script>\<script>document.addEventListener("DOMContentLoaded", function() { window.originalScale('container'); } );\</script></code>
where "container" is main container with all your pages, like
<code>\<div id="container">...ваш html...\</div></code>
*(you can name it whatever you want, as long but it want to be the id of the main component)*

### Using React:
#### 1. Import the module into your App.jsx
<code>import originalScale from 'forced-original-scale';</code> 
#### 2. Call the module when the main component is ready
if you use hooks:
<code>useEffect(() => { originalScale('App'); }, [] );</code> 

if you use classes:
<code>componentDidMount() { originalScale('App'); };</code> 

where "App" is main container with all your pages, like <code>\<div id="App">.....\</div></code>
*(you can name it whatever you want, as long but it want to be the id of the main component)*
___
# RU
### О пакете:

### Сайт или веб-приложение отображается неправильно из-за масштабирования, установленного операционной системой? Этот модуль решит вашу проблему. Неважно, какой процент масштабирования вашей страницы системой - он будет отображаться в правильном масштабе.

## Как использовать

#### Установите пакет: <code>npm install forced-original-scale</code>

### Чистый HTML+JS:

#### Чтобы использовать npm-модуль в чистом HTML+JS или PHP, вам необходимо собрать его при помощи browserify в бандл. Это очень просто, следуйте инструкции:

1. Сначала установите browserify: <code>npm i -g browserify</code> *(в консоли, корневая папка проекта)*
2. Создайте в корневой папке проекта файл index.js и напишите внутри него:  
<code>var originalScale = require('forced-original-scale');</code>
3. Выполните сборку при помощи browserify: <code>browserify index.js > bundle.js</code> *(в консоли, корневая папка проекта)*
4. Далее в вашем index.html перед закрывающимся тэгом body добавьте:

<code>\<script src="bundle.js">\</script>\<script>document.addEventListener("DOMContentLoaded", function() { window.originalScale('container'); } );\</script></code>
 где "container" это ID главного контейнера, в котором находится весь ваш HTML-код 

*Пример:*
<code>\<div id="container">...ваш html...\</div></code>
*(вы можете назвать его как угодно, главное чтобы это был именно id контейнера внутри которого всё находится)*

### Используя React:
#### 1. Добавьте в ваш App.jsx импорт модуля
<code>import originalScale from 'forced-original-scale';</code> 
#### 2. Вызовите модуль, когда главный компонент будет отрисован 
Если вы используете хуки:
<code>useEffect(() => { originalScale('App'); }, [] );</code> 

Если вы предпочитаете классы:
<code>componentDidMount() { originalScale('App'); };</code> 

где "App" это ID главного контейнера, в котором находится всё ваше приложение. 

*Пример:*
<code>\<div id="App">.....\</div></code>
*(вы можете назвать его как угодно, главное чтобы это был именно id контейнера внутри которого всё находится)*