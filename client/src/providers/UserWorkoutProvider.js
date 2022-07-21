import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const UserWorkoutContext = React.createContext();

export const UserWorkoutConsumer = UserWorkoutContext.Consumer;

const UserWorkoutProvider = ({ children }) => {
  const [userWorkouts, setUserWorkouts] = useState([]);

  const navigate = useNavigate();

  const getAllUserWorkouts = (workoutId) => {
    axios
      .get(`/api/workouts/${workoutId}/userWorkouts`)
      .then((res) => setUserWorkouts(res.data))
      .catch((err) => console.log(err));
  };

  const addUserWorkout = (workoutId, userWorkout) => {
    axios
      .post(`/api/workouts/${workoutId}/userWorkouts`, { userWorkout })
      .then((res) => setUserWorkouts([...userWorkouts, res.data]))
      .catch((err) => console.log(err));
  };

  const updateUserWorkout = (workoutId, id, userWorkout) => {
    axios
      .put(`/api/workouts/${workoutId}/userWorkouts/${id}`, {
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
        navigate(`/${workoutId}/userWorkouts`);
      })
      .catch((err) => console.log(err));
  };

  const deleteUserWorkout = (workoutId, id) => {
    axios
      .delete(`/api/workouts/${workoutId}/userWorkouts/${id}`)
      .then((res) => {
        setUserWorkouts(userWorkouts.filter((u) => u.id !== id));
        navigate(`/${workoutId}/userWorkouts`);
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
      }}
    >
      {children}
    </UserWorkoutContext.Provider>
  );
};

export default UserWorkoutProvider;
