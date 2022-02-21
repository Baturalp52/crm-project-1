import axiosInstance from "../utils/axios";

class BaseService {
  baseInstance = axiosInstance;

  post(path: string, data: any) {
    return this.baseInstance.post(path, data);
  }
  put(path: string, data: any) {
    return this.baseInstance.put(path, data);
  }
  delete(path: string, data: any) {
    return this.baseInstance.delete(path);
  }
}

export default new BaseService();
