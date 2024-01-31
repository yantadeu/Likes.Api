### Like Management

Using Morgan, Helmet, Cors, Express rescue, Express rate limit and others middlewares.

### How to run

```
npm run dev
```

### Routes

```
GET http://localhost:3000/likes/count/{id}
POST http://localhost:3000/likes

HEADERS
- authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdXBpay5jb20iLCJpYXQiOjE3MDY3MDUxMDAsImV4cCI6MTcwNjcwNjkwMH0.wjkZjDYsAqC5o4CRULFaeGIOGAO-EDgTW9rCEFJgmFM


Example

curl -X 'POST' \
  'http://localhost:3000/likes' \
  -H 'accept: application/json' \
  -H 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdXBpay5jb20iLCJpYXQiOjE3MDY3MDUxMDAsImV4cCI6MTcwNjcwNjkwMH0.wjkZjDYsAqC5o4CRULFaeGIOGAO-EDgTW9rCEFJgmFM' \
  -H 'Content-Type: application/json' \
  -d '{
  "imageId": "fcc40f61-b7cd-4813-88c0-4d7f907a9b19",
  "liked": true
}'

```

### SWAGGER

http://localhost:3000/api-docs
