
export const getItems = async (url) => {
    try {
      const response = await axios.get(url);
      console.log(response)
      const datas = response.data;
      return datas;
    } catch (errors) {
        console.log(errors);
    }
  };
const putItems = async (url,id,data) => {
    try {
        const response = await axios.put(`${url}/${id}`,data);
        const datas = response.data;
        return datas;
    } catch (errors) {
        console.log(errors);
        
    }
};
const post = async (url,data) => {
    try {
        const response = await axios.post(url,data);
        const datas = response.data;
        return datas;
    } catch (errors) {
        console.log(errors);
    }
}
