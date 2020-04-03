function greeter(person: string) { //type annotation ': string'
  return 'Hello, ' + person;
}

let user = 'Jane User';

document.body.innerHTML = greeter(user);
