## nestjs-alldata-decorator

When using the "@All" decorator, collect all data

## install
```sh
$ npm install nestjs-alldata-decorator
```

## Use
```ts
import { All, Controller } from '@nestjs/common';
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

See also:
  - [custom decorators](https://docs.nestjs.com/custom-decorators)
  - [Use validator](https://docs.nestjs.com/custom-decorators#working-with-pipes)