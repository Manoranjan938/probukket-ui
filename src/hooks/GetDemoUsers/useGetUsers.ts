import axios from "src/api/Instance";

const useGetUsers = (): any => {
  const getUsersList = async () => {
    const { data } = await axios.get("/users");

    return data;
  };

  return [getUsersList];
};

export default useGetUsers;
