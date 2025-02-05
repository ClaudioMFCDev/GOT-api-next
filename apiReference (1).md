# s20-03-webapp: ClassRun API Reference Manual

## Authentication
Authentication is based on access token stored on cookie "token".

> Make sure you enabled credentials and completed a login before getting a private route. Otherwise, you'll get a 401 error "Unauthorized".
> 
> Check the samples below on how to enable credentials with fetch or axios.

### Using fetch with credentials:

```javascript
try {
	const res = await fetch("https://api.example.com/private/userRole", {
		method: "GET", // replace by corresponding method
		credentials: "include", // this allows cookies
	});
} catch (err) {
	console.error("Error:", err);
}
```

### Using axios with credentials:

axios can be configured to enable credentials globally (recommended method if using a global instance of axios)

```javascript
import axios from "axios"; // global instance of axios

axios.defaults.withCredentials = true; // this allows cookies globally

try {
	// make sure to change method according to your needs
	const res = await axios.get("https://api.example.com/private/userRole");
} catch (err) {
	console.error("Error:", err);
}
```

If you opt not to use global config for credentials make sure to enable credentials on each api call who requires authentication (all the routes under "/private" area)

```javascript
import axios from "axios";

try {
	// make sure to change method according to your needs
	const res = await axios.get("https://api.example.com/private/userRole", {
		withCredentials: true // this allows cookies
	});
} catch (err) {
	console.error("Error:", err)
}
```

---

### Authentication routes
/auth

All the authentication related stuff will be under the route "/auth", for example the login route would be something like this "https://api.example.com/auth/login".

The API receives data through JSON body unless specified otherwise.

---

#### login route

##### POST - /auth/login

**expects**: JSON body

```json
{
	"username": "String",
	"password": "String"
}
```

**returns**: JSON response

```json
{
	"status": "Number",
	"message": "String",
	"payload": {
		"id": "ObjectId",
		"name": "String",
		"lastname": "String",
		"role": "String"
	}
}
```

> NOTE: __payload__ will only be available if the login proccess was correct.
> 
> Also if the login was correct you will be receiving a Set-Cookie header with a cookie named "token" and his content will a JSON Web Token used for authentication.

---

#### register route - /auth/register

##### POST - /auth/register

**expects**: JSON body

```json
{
	"username":"String",
	"password": "String",
	"name":"String",
	"lastname":"String",
	"bithdate":"Date",
	"phonenumber":"String",
	"role":"String",
	"email":"String",
	"address":"String"
}
```

**returns**: JSON response

```json
{
	"status": "Number",
	"message": "String",
	"payload": {
		"id": "ObjectId",
		"username": "String",
		"name": "String",
		"lastname": "String",
		"birthdate": "Date",
		"phonenumber": "String",
		"role": "String",
		"avatar": "String",
		"active": "Boolean",
	}
}
```

> NOTE: __payload__ will only be available if register proccess was correct.
> 
> You won't be receiving a cookie after user registration, login is required in order to set the access token.

---

### Private routes (Authentication required, please refer to Authentication routes)

Authentication routes are based on user roles and per role sub-route. Each role will have the required set of endpoints in orden the get or set relevant information.

---

### Roles

[schoolAdmin](#schooladmin)

Most privileged role on the platform. It is responsible of creating courses, levels and subjects.

- Can create, update and disable users of any role.
- Can create, update and disable user groups.
- Can create, update and disable courses.
- Can create, update and disable courses levels.
- Can create, update and disable subjects.
- Can add subjects to courses levels.

[teacher](#teacher)

Resposible of creating classes, attendance control, exams and comunication with parents.

- Can create, update and disable student users.
- Can create, update and disable user groups.
- Can create classes.
- Can update attendance.
- Can create and update exams.

[student](#student) 

Only sees his own information and direct messages.

- Can see enrolled courses and manager (schoolAdmin).
- Can see enrolled subjects and teachers.
- Can see errolled subjects exams results.
- Can see enrolled subjects attendance.

[parent](#parent)

Only see related users information and direct messages.

- Can see related students course.
- Can see related students exams results.
- Can see related students attendance.
- Can see direct messages or notifications.

---

### Routes

#### schoolAdmin
/private/manager

##### GET - /private/manager/courses

Use this route to get all the courses, levels and subjets.

**returns:** JSON response.

```json
{
	"title": "String",
	"description": "String",
	"levels": [
		{
			"title": "String",
			"description": "String",
			"subjects": [
				{
					"title": "String",

				}
			],
			"startDate": "String",
			"endDate": "String",
			"status": "String",
		}
	],
	"startDate": "Date",
	"endDate": "Date",
	"title": "String",
	"status": "String",
}
```

##### GET - /private/manager/subjects

```json
{
	"username": "String",
	"password": "String"
}
```

##### GET - /private/manager/groups

```json
{
	"username": "String",
	"password": "String"
}
```

---

#### teacher
/private/teacher

```json
{
	"username": "String",
	"password": "String"
}
```

---

#### student
/private/student

```json
{
	"username": "String",
	"password": "String"
}
```

---

#### parent
/private/parent

```json
{
	"username": "String",
	"password": "String"
}
```

---

### Error management



---