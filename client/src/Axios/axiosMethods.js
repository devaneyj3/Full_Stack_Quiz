import axiosInstance from './axiosInstance';

export const getTeachers = async (setData, setMessage) => {
  try {
    const teachers = await axiosInstance.get("teachers");
    setData(teachers.data);
  } catch (error) {
    setMessage(error.response.data.message);
  }
};
