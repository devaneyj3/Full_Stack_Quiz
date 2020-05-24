import axiosInstance from "./axiosInstance";

export const getTeachers = async (setData, setMessage) => {
  try {
    const teachers = await axiosInstance.get("teachers");
    setData(teachers.data);
  } catch (error) {
    setMessage(error.response.data.message);
  }
};

export const edit = async (data, setData, id, changes) => {
  try {
    await axiosInstance.put(`teachers/${id}`, changes);
    const teachers = await axiosInstance.get("teachers");
      const index = teachers.data.findIndex((teacher) => teacher.id === id);
      data[index] = changes;
    setData( [...data, changes]);
  } catch (error) {
    console.log(error.response.data.message);
  }
};
