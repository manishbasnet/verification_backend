# Description

Blys Backend

## Developer notes

Install:

```
yarn install
```
## Database 
To run a seeder, run:
``` 
npm run db-migrate up // migrates seeder from file
```

To create new migration, run:
``` 
npm run db-migrate create <migration_file_name> // creates new migration file in migrations directory
```

Run:

```
yarn run start
```
For searching, test by queiring valid topic to the provided endpoint with postman, e.g:

-   POST | http://localhost:5000/api/verify

```

```

