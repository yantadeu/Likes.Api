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
- authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbiIsImp0aSI6ImUyNTU0NWY3LTEyNzUtNDg1Ni1hZjNkLWI5M2ZhMjc1MTY5ZCIsIk5hbWUiOiJBZG1pbiIsIlVzZXJJZCI6ImUyNTU0NWY3LTEyNzUtNDg1Ni1hZjNkLWI5M2ZhMjc1MTY5ZCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluaXN0cmF0b3IiLCJleHAiOjE3NjY3MTMyMDksImlzcyI6InVwaWsiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjgwODAifQ.Qs9f-Tn68Sywr7hL2RKwoBt2AfPn1JWSGYLR_t3TEmU

Example

curl -X 'POST' \
  'http://localhost:3000/likes' \
  -H 'accept: application/json' \
  -H 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbiIsImp0aSI6ImUyNTU0NWY3LTEyNzUtNDg1Ni1hZjNkLWI5M2ZhMjc1MTY5ZCIsIk5hbWUiOiJBZG1pbiIsIlVzZXJJZCI6ImUyNTU0NWY3LTEyNzUtNDg1Ni1hZjNkLWI5M2ZhMjc1MTY5ZCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluaXN0cmF0b3IiLCJleHAiOjE3NjY3MTMyMDksImlzcyI6InVwaWsiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjgwODAifQ.Qs9f-Tn68Sywr7hL2RKwoBt2AfPn1JWSGYLR_t3TEmU' \
  -H 'Content-Type: application/json' \
  -d '{
  "imageId": "fcc40f61-b7cd-4813-88c0-4d7f907a9b19",
  "liked": true
}'

```

### SWAGGER

* Use this jwt for authorize: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbiIsImp0aSI6ImUyNTU0NWY3LTEyNzUtNDg1Ni1hZjNkLWI5M2ZhMjc1MTY5ZCIsIk5hbWUiOiJBZG1pbiIsIlVzZXJJZCI6ImUyNTU0NWY3LTEyNzUtNDg1Ni1hZjNkLWI5M2ZhMjc1MTY5ZCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluaXN0cmF0b3IiLCJleHAiOjE3NjY3MTMyMDksImlzcyI6InVwaWsiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjgwODAifQ.Qs9f-Tn68Sywr7hL2RKwoBt2AfPn1JWSGYLR_t3TEmU

http://localhost:3000/api-docs
