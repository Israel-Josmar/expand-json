# expand-json
Expand templates on JSON

This tool allows you expand templates on a JSON.  
It uses Mustache¹ as template engine and has custom helpers.  
¹: it doest _not_ escape HTML automatically  

## Install
```
npm install expand-json
```

## Usage
```
import { expandJson } from 'expand-json'

const mapping = {
  full_name: '{{name}} {{last_name}}',
  age: '{{age}}'
}

const payload = {
  name: 'Thomas',
  last_name: 'Anderson',
  age: '36',
}

const json = expandJson(mapping, payload)

console.log(json) // { full_name: 'Thomas Anderson', age: '36' }
```

## Roadmap
- [x] expand templates on json
- [x] add `upper` helper: `{{#upper}}{{name}}{{/upper}}`
- [ ] add custom escaping
