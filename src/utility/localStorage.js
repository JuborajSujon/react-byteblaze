import { toast } from "react-hot-toast";

// get local storage data
export const getLocalStorageData = (keyName) => {
  let localStorageData = [];
  const data = localStorage.getItem(keyName);
  if (data) {
    localStorageData = JSON.parse(data);
  }
  return localStorageData;
};

// set local storage data
export const setLocalStorageData = (keyName, data) => {
  let savedLocalStoragedata = getLocalStorageData(keyName);
  const dataExist = savedLocalStoragedata.find((item) => item.id === data.id);
  if (dataExist) {
    toast.error("Already added to list");
    return;
  }
  savedLocalStoragedata.push(data);
  localStorage.setItem(keyName, JSON.stringify(savedLocalStoragedata));
  toast.success("List added successfully");
};

// Delete local storage data
export const deleteLocalStorageData = (keyName, id) => {
  let localStorageData = getLocalStorageData(keyName);
  const remainingdata = localStorageData.filter((item) => item.id !== id);
  localStorage.setItem(keyName, JSON.stringify(remainingdata));
  toast.success("List deleted successfully");
};
