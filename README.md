## Speck API
| Name | Routes | HTTP | Description |
|------|--------|------|-------------|
| Notes      | 
|            | `/api/v1/cms/notes` | GET | Get all notes | Yes |
|            | `/api/v1/cms/notes` | POST | Post one note | Yes |
|            | `/api/v1/cms/notes/:id` | GET | Get one note by id | Yes |
|            | `/api/v1/cms/notes/:id` | PUT | Update one note by id | Yes |
|            | `/api/v1/cms/notes/:id` | DELETE | Delete one note by id | Yes |
| Register   | 
|            | `/api/v1/cms/users` | POST | Create user | Yes |
| Login      | 
|            | `/api/v1/cms/users/login` | POST | Check user | Yes |

### Get all notes
Method GET
<br />
`http://[host]:[port]/api/v1/cms/notes` 
<br />
<br />
Response body <br />
```
{
    "data": [
        {
            "id": 128,
            "title": "Auth success 🥱",
            "notes": "horeeee 😀"
        }
    ]
}
```
### Get one note by id
Method GET
<br />
`http://[host]:[port]/api/v1/cms/notes/:id` 
<br />
<br />
Response body <br />
```
{
    "data": {
        "id": 128,
        "title": "Auth success 🥱",
        "notes": "horeeee 😀"
    }
}
```
### Create note
Method POST
<br />
`http://[host]:[port]/api/v1/cms/notes` 
<br />
<br />
Request body <br />
```
{
    "title": "Cleaning house",
    "notes": "Before go to work I will clean my room first"
}
```
Response body <br />
```
{
    "message": "note successfully created",
    "data": {
        "id": 129,
        "title": "Cleaning house",
        "notes": "Before go to work I will clean my room first",
        "updatedAt": "2022-11-18T15:19:13.411Z",
        "createdAt": "2022-11-18T15:19:13.411Z"
    }
}
```
### Update note by id
Method PUT
<br />
`http://[host]:[port]/api/v1/cms/notes/:id` 
<br />
<br />
Request body <br />
```
{
    "title": "Wash my car",
    "notes": "after buy noodle at market I will wash my car"
}
```
Response body <br />
```
{
    "message": "note successfully updated",
    "data": [
        1
    ]
}
```
### Delete note by id
Method DELETE
<br />
`http://[host]:[port]/api/v1/cms/notes/:id` 
<br />
<br />
Response body <br />
```
{
    "message": "delete successfully",
    "data": 1
}
```
