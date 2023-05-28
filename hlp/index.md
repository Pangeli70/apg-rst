# Apg-Rst Help

Ver. 0.9.7 - 2023/05/28
<br>

### Import the library in ```deps.ts``` of your project 


Using:
```Typescript
export * as Rst from "https://raw.githubusercontent.com/Pangeli70/apg-rst/master/mod.ts";
```

Import in your file using:
```Typescript
import { Rst, ... } from "[...PATH...]/deps.ts";
```

Use IApgRst to carry result informations, errors and payloads.

Use IApgRstPayload to carry data with the result using a signature to check if the result is the expected one.

Use ApgRst to check payloads and interpolate messages.

Use ApgRstAssert to manage critical situations and return errors or to throw exceptions.

Use ApgRstErrors to generate standard result errors.



