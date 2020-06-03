import axiosInstance from "./axiosInstance";

export const get = async (dbName, setData, setMessage) => {
  try {
    const response = await axiosInstance.get(dbName);

    setData(response.data);
  } catch (error) {
    setMessage(error.response.data.message);
  }
};

export const addData = async (dbname, data, newEntry, setData, setMessage) => {
  try {
    await axiosInstance.post(dbname, newEntry);
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

 export const getByID = async (setElement, id) => {
  const elementByID = await axiosInstance.get(`teachers/${id}`)
    try {
    setElement(elementByID.data);
  } catch (error) {
      console.log(error.response.data.reason);
  }
}

export const deleteEntry = async (id, data, setData) => {
  try {
    await axiosInstance.delete(`teachers/${id}`);
    const filteredEntry = data.filter((entry) => entry.id !== id);
    console.log(id)
    setData(filteredEntry);
  } catch (error) {
    console.log(error.response.data.message);
  }
};
