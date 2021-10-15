# Forced original scale

## About:

### Is the site or web application displayed incorrectly due to scaling set by the operating system? This package will solve your problem. It doesn't matter what percentage your page scaling by system is - it will be displayed at the correct scale

Описание на русском языке внизу страницы. Этот пакет поможет вашему сайту всегда отображаться в правильном масштабе.

## How to use
1. Install the package:
<code>npm install forced-original-scale</code>

2. Import function in your page:

<code>var originalScale = require('original.scale.page');</code>

*(if you use clean HTML+JS, insert into "head" \<scripts>here\</scripts>)*

*(if you use ECMAScript, you can use <code>import originalScale from 'forced-original-scale';</code>)*

### with HTML+JS:
3. add before the "body" closing tag:

<code>\<script>
	document.addEventListener("DOMContentLoaded",   function(event) { originalScale('container'); }
	);
	\</script>
</code>
where "container" is main container with all your pages, like 
<code>\<div id="container">...your html...\</div></code>
*(you can name it whatever you want, as long but it want to be the id of the main component)*

### with JQuery:
3. <code>`$( document ).ready(function() { originalScale('container'); });`</code>
where "container" is main container with all your pages, like 
<code>\<div id="container">...your html...\</div></code>

*(you can name it whatever you want, as long but it want to be the id of the main component)*

### with React:
3. add in your App.jsx: 

if you use hooks:
<code>useEffect(() => { originalScale('App'); }, [] );</code> 

if you use classes:
<code>componentDidMount() { originalScale('App'); };</code> 
where "App" is main container with all your pages, like 
<code>\<div id="App">
	   ....
	\</div></code>

*(you can name it whatever you want, as long but it want to be the id of the main component)*
___
# RU
### О пакете:

### Сайт или веб-приложение отображается неправильно из-за масштабирования, установленного операционной системой? Этот модуль решит вашу проблему. Неважно, какой процент масштабирования вашей страницы системой - он будет отображаться в правильном масштабе.

## Как использовать

1. Установите пакет:
<code>npm install forced-original-scale</code>
2. Импортируйте функцию: вставьте в файл страницы, в самом верху 

<code>var originalScale = require('original.scale.page'); </code>

*(если используете чистый HTML+JS, вставьте в head \<scripts>сюда\</scripts>)*


*(Также вы можете импортировать таким образом: <code>import originalScale from 'forced-original-scale';</code> (ECMAScript))*

### Чистый HTML+JS:
3. добавьте перед закрывающимся тэгом "body":

<code>\<script>
	document.addEventListener("DOMContentLoaded",   function(event) { originalScale('container'); }
	);
	\</script>
</code>

где "container" это ID главного контейнера, в котором находится весь ваш HTML-код *Пример:*
<code>\<div id="container">...ваш html...\</div></code>

*(вы можете назвать его как угодно, главное чтобы это был именно id контейнера внутри которого всё находится)*

### Используя JQuery:
3. <code>`$( document ).ready(function() { originalScale('container'); });`</code>

где "container" это ID главного контейнера, в котором находится весь ваш HTML-код *Пример:*
<code>\<div id="container">...ваш html...\</div></code>
*(вы можете назвать его как угодно, главное чтобы это был именно id контейнера внутри которого всё находится)*

### Используя React:
3. добавьте в ваш App.jsx: 

Если вы используете хуки:
<code>useEffect(() => { originalScale('App'); }, [] );</code> 

Если вы предпочитаете классы:
<code>componentDidMount() { originalScale('App'); };</code> 

где "App" это ID главного контейнера, в котором находится всё ваше приложение. *Пример:*
<code>\<div id="App">\</div></code>
*(вы можете назвать его как угодно, главное чтобы это был именно id контейнера внутри которого всё находится)*