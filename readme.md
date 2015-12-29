# Swagger UI with Electron

This is Swagger UI with Electron, can load local json/yaml swagger schema file. Standalone.

[Swagger](http://swagger.io/)  
[Swagger UI](https://github.com/swagger-api/swagger-ui)    

![](https://farm6.staticflickr.com/5681/24040873435_db6d28aabe_b.jpg)

## Install

This project use node.js. 
`brew install node`


at first,install electron

```
$npm -g install electron-prebuilt
```

clone this project,and go to this project local path.

```
$git clone https://github.com/asaday/swaggerEUI
$cd swaggerEUI
```

install npm libs

```
$npm install
```

show sample

```
$electron . sample/sample.yaml
```


## Usage


```
$ electron . -h
usage: swaggereui [-h] [-a ADD] [file]

Positional arguments:
  file               Swagger schema json or yaml

Optional arguments:
  -h, --help         Show this help message and exit.
  -a ADD, --add ADD  add header json
```

if you want to add headers (for example auth token),
prepare headers by json file.

```
{
  "Authorization": "Bearer YOUR_SERVER_TOKEN"
}
```
and use -a option

```
$electron . sample/sample.yaml -a sample/header.json
```

