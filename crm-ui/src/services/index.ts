import axiosInstance from "../utils/axios";

class BaseService {
  baseInstance = axiosInstance;
  get(path: string) {
    return this.baseInstance.get(path);
  }

  post(path: string, data: any) {
    return this.baseInstance.post(path + "/", data);
  }
  put(path: string, data: any) {
    return this.baseInstance.put(path, data);
  }
  delete(path: string) {
    return this.baseInstance.delete(path);
  }
}

export default new BaseService();
