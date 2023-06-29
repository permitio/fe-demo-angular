# FesdkDemoAngular

## How to run this example

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


