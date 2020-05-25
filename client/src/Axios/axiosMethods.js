import axiosInstance from "./axiosInstance";

export const getTeachers = async (setData, setMessage) => {
  try {
    const teachers = await axiosInstance.get("teachers");
    setData(teachers.data);
  } catch (error) {
    setMessage(error.response.data.message);
  }
};

export const addEntry = async (data, newEntry, setData, setMessage) => {
  try {
    await axiosInstance.post("teachers", newEntry);
    setData([...data, newEntry]);
    setMessage("Info submitted. Redirecting...");
  } catch (error) {
    setMessage(error.response.data.reason);
  }
};

export const edit = async (data, setData, setMessage, id, changes) => {
  try {
    await axiosInstance.put(`teachers/${id}`, changes);
    const teachers = await axiosInstance.get("teachers");
    const index = teachers.data.findIndex((teacher) => teacher.id === id);
    data[index] = changes;
    setData([...data]);
  } catch (error) {
    setMessage(error.response.data.message);
  }
};

export const deleteEntry = async (id, data, setData) => {
  try {
    await axiosInstance.delete(`teachers/${id}`);
    const filteredEntry = data.filter((entry) => entry.id !== id);
    setData(filteredEntry);
  } catch (error) {
    console.log(error.response.data.message);
  }
};
