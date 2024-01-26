import React, { useState, useEffect } from "react";
import { IUsers, UsersEntity } from "./models/IUsers";
import { UserService } from "./services/UseService";

interface IState {
  loading: boolean;
  users: UsersEntity[];
  errorMsg: string;
}

const Users: React.FC = () => {
  const [state, setState] = useState<IState>({
    loading: false,
    users: [] as UsersEntity[],
    errorMsg: ""
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

  const { loading, users, errorMsg } = state;

  return (
    <>
      <div className="container">
        <h1>Data</h1>
        {errorMsg && <p>{errorMsg}</p>}
        {loading && <h1>Loading...</h1>}
        <table>
          <thead>
            <tr>
              <td>ID</td>
              <td>First Name</td>
              <td>Last Name</td>
              <td>Maiden Name</td>
              <td>Age</td>
              <td>Gender</td>
              <td>Email</td>
              <td>Phone</td>
              <td>Username</td>
              <td>Password</td>
              <td>BirthDate</td>
              <td>Image</td>
              <td>Blood Group</td>
              <td>Height</td>
              <td>Weight</td>
              <td>Eye Color</td>
              <td>Domain</td>
              <td>Ip</td>
              <td>Adress</td>
              <td>Hair color</td>
              <td>Hair type</td>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 &&
              users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.maidenName}</td>
                  <td>{user.age}</td>
                  <td>{user.gender}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.username}</td>
                  <td>{user.password}</td>
                  <td>{user.birthDate}</td>
                    <td>
                    <a href={user.image} >
                        <img src={user.image} alt="User avatar"  width="50" height="50"/>
                    </a>
                    </td>
                  <td>{user.bloodGroup}</td>
                  <td>{user.height}</td>
                  <td>{user.weight}</td>
                  <td>{user.eyeColor}</td>
                  <td>{user.domain}</td>
                  <td>{user.ip}</td>
                  <td>{user.address.address}</td>
                  <td>{user.hair.color}</td>
                  <td>{user.hair.type}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Users;