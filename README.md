# FesdkDemoAngular

## How to run this example
This example is a simple angular app that uses permit and casl to manage permissions.
It uses a simple server that query the permit api to get the permissions of the user.
The server is only used to demonstrate the usage of permit and casl in the client side.
In a real world application you will need to create such route in your server and use it in your client side.

### Permit setup
Go to permit dashboard and create a `board` resource with `create` and `update` actions.
Create a admin role and give it the permission to `create` and `update` the `board` resource.
Create a user and assign the admin role to it (remember its key, you will need it).

### Example server setup
Add your permit environment secret key to `server/server.ts` instead of `permit_secret_XXXXXXXXXXXXX`
Run `npm install` in the `server` directory.
Run `npm start` in the `server` directory.

### Example client setup
Run `npm install` in the root directory.
Run `npm start` in the root directory.
Go to `src/app/CaslAbility.ts` and change the user `test@test.com` to the key of the user you created in the permit dashboard.

Now you can go to `http://localhost:4200` and see the example in action.
Add or remove permissions from the user in the permit dashboard and see the changes in the web app.


## How to use permit in your angular app
You need to add those three packages to your project:
    "permit-fe-sdk": "1.1.0",
    "@casl/ability": "^5.4.4",
    "@casl/angular": "^7.0.0",
You need to load the Ability Module, check out `src/app/app.module.ts` for an example.
You need to create a `CaslAbility` class that extends `Ability` from `@casl/ability` and implement the `defineAbility` method.
Now you can get the casl ability instance from any component see example in `src/app/app.component.ts`.
And inside your html you can check for permissions in the following way:
```html
  <div *ngIf="'create' | able: 'board'">
    <button (click)="createBoard()">Create Board</button>
  </div>
```

### Further reading
To learn more about permit visit: https://permit.io
To learn more about casl visit: https://casl.js.org/v4/en/package/casl-angular
