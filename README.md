# todo-app
![vue-todo](vue-todo-2.gif)
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Clone below repository and run
```
https://github.com/Joysond/app
```
Change database port and server properties >> https://github.com/Joysond/app/blob/master/src/main/resources/application.properties#L2

```spring.jpa.hibernate.ddl-auto``` value should be <b>create</b> when you run for the first time. This will create the required database tables. Change it to <b>validate</b> once the tables are created
