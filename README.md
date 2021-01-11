## nestjs-alldata-decorator

When using the "@All" decorator, collect all data

## install
```sh
$ npm install nestjs-alldata-decorator
```

## User
```ts
import { All, Controller, Get } from '@nestjs/common';
import { AllData } from 'nestjs-alldata-decorator';

@Controller()
export class AppController {
  @All(':p1')
  main(@AllData() data) {
    console.log(data); // { word: 'hello', name: 'ajanuw', p1: 'xxx' }
    return 'hello world';
  }
}
```
```
curl --location --request POST 'http://localhost:3000/xxx?word=hello' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'name=ajanuw'
```