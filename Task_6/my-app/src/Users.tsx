import React, { useState, useEffect } from "react";
import { IUsers, UsersEntity } from "./models/IUsers";
import { UserService } from "./services/UseService";

interface IState {
  loading: boolean;
  users: UsersEntity[];
  errorMsg: string;
  selectedFields: string[];
}

const Users: React.FC = () => {
  const [state, setState] = useState<IState>({
    loading: false,
    users: [] as UsersEntity[],
    errorMsg: "",
    selectedFields: ["id", "firstName", "lastName", "age", "gender", "email", "phone","username","password","birthDate","img", "bloodGroup","height","weight"]
  });

  useEffect(() => {
    setState({ ...state, loading: true });
    UserService.getAllUsers()
      .then(res =>
        setState({
          ...state,
          loading: false,
          users: res.data.users || [],
          errorMsg: ""
        })
      )
      .catch(err =>
        setState({ ...state, loading: false, errorMsg: err.message })
      );
  }, []);

  const { loading, users, errorMsg, selectedFields } = state;

  const handleFieldToggle = (field: string) => {
    if (selectedFields.includes(field)) {
      setState({
        ...state,
        selectedFields: selectedFields.filter(f => f !== field)
      });
    } else {
      setState({
        ...state,
        selectedFields: [...selectedFields, field]
      });
    }
  };

  return (
    <div className="container">
      <h1>DataOnJson</h1>
      <div className="field-group">
        <h3>Если надо, я выведу все поля. А пока выберите данные для отрисовки:</h3>
        <label>
          <input
            type="checkbox"
            checked={selectedFields.includes("id")}
            onChange={() => handleFieldToggle("id")}
          />{" "}
          ID
        </label>
        <label>
          <input
            type="checkbox"
            checked={selectedFields.includes("firstName")}
            onChange={() => handleFieldToggle("firstName")}
          />{" "}
          First Name
        </label>
        <label>
          <input
            type="checkbox"
            checked={selectedFields.includes("lastName")}
            onChange={() => handleFieldToggle("lastName")}
          />{" "}
          Last Name
        </label>
        <label>
          <input
            type="checkbox"
            checked={selectedFields.includes("age")}
            onChange={() => handleFieldToggle("age")}
          />{" "}
          Age
        </label>
        <label>
          <input
            type="checkbox"
            checked={selectedFields.includes("gender")}
            onChange={() => handleFieldToggle("gender")}
          />{" "}
          Gender
        </label>
        <label>
          <input
            type="checkbox"
            checked={selectedFields.includes("email")}
            onChange={() => handleFieldToggle("email")}
          />{" "}
          Email
        </label>
        <label>
          <input
            type="checkbox"
            checked={selectedFields.includes("phone")}
            onChange={() => handleFieldToggle("phone")}
          />{" "}
          Phone
        </label>
        <label>
          <input
            type="checkbox"
            checked={selectedFields.includes("username")}
            onChange={() => handleFieldToggle("username")}
          />{" "}
          User name
        </label>
        <label>
          <input
            type="checkbox"
            checked={selectedFields.includes("password")}
            onChange={() => handleFieldToggle("password")}
          />{" "}
          Password
        </label>
        <label>
          <input
            type="checkbox"
            checked={selectedFields.includes("birthDate")}
            onChange={() => handleFieldToggle("birthDate")}
          />{" "}
          BerthDate
        </label>
        <label>
          <input
            type="checkbox"
            checked={selectedFields.includes("img")}
            onChange={() => handleFieldToggle("img")}
          />{" "}
          Image
        </label>
        <label>
          <input
            type="checkbox"
            checked={selectedFields.includes("bloodGroup")}
            onChange={() => handleFieldToggle("bloodGroup")}
          />{" "}
          Blood Group
        </label>
        <label>
          <input
            type="checkbox"
            checked={selectedFields.includes("height")}
            onChange={() => handleFieldToggle("height")}
          />{" "}
          Height
        </label>
        <label>
          <input
            type="checkbox"
            checked={selectedFields.includes("weight")}
            onChange={() => handleFieldToggle("weight")}
          />{" "}
          Weight
        </label>
      </div>

      {errorMsg && <p>{errorMsg}</p>}
      {loading && <h1>Loading...</h1>}
      <table>
  <thead>
    <tr>
      {selectedFields.includes("id") && <th>ID</th>}
      {selectedFields.includes("firstName") && <th>First Name</th>}
      {selectedFields.includes("lastName") && <th>Last Name</th>}
      {selectedFields.includes("age") && <th>Age</th>}
      {selectedFields.includes("gender") && <th>Gender</th>}
      {selectedFields.includes("email") && <th>Email</th>}
      {selectedFields.includes("phone") && <th>Phone</th>}
      {selectedFields.includes("username") && <th>UserName</th>}
      {selectedFields.includes("password") && <th>Password</th>}
      {selectedFields.includes("birthDate") && <th>BirthDate</th>}
      {selectedFields.includes("img") && <th>Image</th>}
      {selectedFields.includes("bloodGroup") && <th>bloodGroup</th>}
      {selectedFields.includes("height") && <th>height</th>}
      {selectedFields.includes("weight") && <th>weight</th>}
    </tr>
  </thead>
  <tbody>
    {users.length > 0 &&
      users.map((user) => (
        <tr key={user.id}>
          {selectedFields.includes("id") && <td>{user.id}</td>}
          {selectedFields.includes("firstName") && <td>{user.firstName}</td>}
          {selectedFields.includes("lastName") && <td>{user.lastName}</td>}
          {selectedFields.includes("age") && <td>{user.age}</td>}
          {selectedFields.includes("gender") && <td>{user.gender}</td>}
          {selectedFields.includes("email") && <td>{user.email}</td>}
          {selectedFields.includes("phone") && <td>{user.phone}</td>}
          {selectedFields.includes("username") && <td>{user.username}</td>}
          {selectedFields.includes("password") && <td>{user.password}</td>}
          {selectedFields.includes("birthDate") && <td>{user.birthDate}</td>}
          {selectedFields.includes("img") && (
          <td>
            <img src={user.image} alt="User Image"width="50" height="50" />
          </td>
        )}
        {selectedFields.includes("bloodGroup") && <td>{user.bloodGroup}</td>}
        {selectedFields.includes("height") && <td>{user.height}</td>}
        {selectedFields.includes("weight") && <td>{user.weight}</td>}
        </tr>
      ))}
  </tbody>
</table>
    </div>
  );
};

export default Users;