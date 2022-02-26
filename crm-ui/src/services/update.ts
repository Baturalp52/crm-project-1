import BaseService from "./index";
export default function update<DataType extends { id: number }>(
  path: string,
  data: DataType
) {
  return BaseService.put(`${path}/${data.id}`, data);
}
