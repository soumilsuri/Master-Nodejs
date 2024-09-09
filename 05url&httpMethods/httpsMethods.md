# HTTP Methods

HTTP methods define the type of action to be performed on a resource (data) when communicating with a server.

## 1. GET
- **Purpose**: Retrieve data from the server.
- **Characteristics**:
  - Data is requested from a specific resource.
  - No data is modified or created.
  - The parameters can be sent via the URL (usually as query parameters).
- **Example**:
  ```bash
  GET https://api.example.com/users?active=true
  ```
  - Fetches a list of active users.

## 2. POST
- **Purpose**: Send data to the server to create a new resource.
- **Characteristics**:
  - Commonly used in forms and data submissions.
  - The data is included in the request body.
- **Example**:
  ```bash
  POST https://api.example.com/users
  Body: {
      "name": "John Doe",
      "email": "john@example.com"
  }
  ```
  - Creates a new user with the provided name and email.

## 3. PUT
- **Purpose**: Update an existing resource by replacing it entirely.
- **Characteristics**:
  - The resource is updated with the complete new data provided.
  - If the resource does not exist, it can sometimes be created (depending on the API).
- **Example**:
  ```bash
  PUT https://api.example.com/users/123
  Body: {
      "name": "John Smith",
      "email": "johnsmith@example.com"
  }
  ```
  - Updates user with ID 123, replacing the old details with the new name and email.

## 4. PATCH
- **Purpose**: Partially update an existing resource.
- **Characteristics**:
  - Only the fields that need to be updated are sent.
  - More efficient for small updates compared to PUT.
- **Example**:
  ```bash
  PATCH https://api.example.com/users/123
  Body: {
      "email": "johnnew@example.com"
  }
  ```
  - Only updates the email of user 123, keeping other details the same.

## 5. DELETE
- **Purpose**: Remove a specified resource from the server.
- **Characteristics**:
  - Used when a resource needs to be deleted from the server.
- **Example**:
  ```bash
  DELETE https://api.example.com/users/123
  ```
  - Deletes the user with ID 123 from the database.

## Example Request Summary:
- **GET**: Fetch data (e.g., fetch a list of users).
- **POST**: Create a new resource (e.g., add a new user).
- **PUT**: Update a resource (e.g., update all user details).
- **PATCH**: Update specific parts of a resource (e.g., change only the email).
- **DELETE**: Remove a resource (e.g., delete a user).
