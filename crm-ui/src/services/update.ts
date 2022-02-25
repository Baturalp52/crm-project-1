import BaseService from "./index";
export default function update<DataType extends { id: number }>(
  path: string,
  data: DataType
) {
  console.log(data);
  return BaseService.put(`${path}/${data.id}`, data);
}
