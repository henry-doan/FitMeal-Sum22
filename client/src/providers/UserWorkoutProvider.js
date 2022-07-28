import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const UserWorkoutContext = React.createContext();

export const UserWorkoutConsumer = UserWorkoutContext.Consumer;

const UserWorkoutProvider = ({ children }) => {
  const [userWorkouts, setUserWorkouts] = useState([]);
  const [workouts, setWorkouts] = useState([]);

  const navigate = useNavigate();

  const getAllUserWorkouts = (userId) => {
    axios
      .get(`/api/users/${userId}/userworkouts`)
      .then((res) => setUserWorkouts(res.data))
      .catch((err) => console.log(err));
  };

  const getAllLoginedUserWorkouts = () => {
    axios
      .get("/api/userWorkouts")
      .then((res) => setWorkouts(res.data))
      .catch((err) => console.log(err));
  };

  const addUserWorkout = (userId, workout_id) => {
    const userworkout = { workout_id: workout_id };
    axios
      .post(`/api/users/${userId}/userworkouts`, { userworkout })
      .then((res) => setUserWorkouts([...userWorkouts, res.data]))
      .catch((err) => console.log(err));
  };

  const updateUserWorkout = (userId, id, userWorkout) => {
    axios
      .put(`/api/users/${userId}/userworkouts/${id}`, {
        userWorkout,
      })
      .then((res) => {
        const newUpdateUserWorkout = userWorkouts.map((u) => {
          if (u.id === id) {
            return res.data;
          }
          return u;
        });
        setUserWorkouts(newUpdateUserWorkout);
        navigate(`/${userId}/userWorkouts`);
      })
      .catch((err) => console.log(err));
  };

  const deleteUserWorkout = (userId, id) => {
    axios
      .delete(`/api/users/${userId}/userworkouts/${id}`)
      .then((res) => {
        setUserWorkouts(userWorkouts.filter((u) => u.id !== id));
      })
      .catch((err) => console.log(err));
  };

  return (
    <UserWorkoutContext.Provider
      value={{
        userWorkouts,
        getAllUserWorkouts,
        addUserWorkout,
        updateUserWorkout,
        deleteUserWorkout,
        workouts,
        getAllLoginedUserWorkouts,
      }}
    >
      {children}
    </UserWorkoutContext.Provider>
  );
};

export default UserWorkoutProvider;
