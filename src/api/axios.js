import axios from "axios";

const instance = axios.create({
  baseURL: "/api.themoivedb.org/3",
  params: {
    api_key: "f643ad5042c57933d8eec6a7a984a73c",
    language: "ko-KR",
  },
});

export default instance;
